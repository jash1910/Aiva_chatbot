import React, { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome-msg',
      role: 'bot',
      content: 'Hello! I am Aiva. How can I help you today?',
      timestamp: new Date().toISOString()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([
    { id: uuidv4(), title: 'Getting Started', date: new Date().toLocaleDateString() }
  ]);

  const callGeminiAPI = async (chatMessages) => {
    // Attempt to load from explicitly deployed environment variable
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    // Fallback to mock if API key isn't provided or still set to default
    if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') return null;

    try {
      // Map history to Gemini format. Only use recent messages so we don't blow context optionally, but Gemini has large context.
      // Roles must be "user" or "model"
      const formatRole = (role) => role === 'bot' ? 'model' : 'user';
      
      const contents = chatMessages.map(msg => ({
        role: formatRole(msg.role),
        parts: [{ text: msg.content }]
      }));

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }
      
      return data.candidates[0].content.parts[0].text;

    } catch (err) {
      console.error("Gemini API Error:", err);
      return `[System: AI Connection Error] ${err.message}. Please check that your API key in the .env file is valid and has active permissions.`;
    }
  };

  const getMockResponse = () => {
    const botResponses = [
      "That's exceptionally interesting! I'd love to delve deeper into that.",
      "Based on my analysis, this approach is highly scalable.",
      "Could you provide a bit more context so I can give you a precise answer?",
      "Indeed. It's like orchestrating a symphony of data points."
    ];
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const sendMessage = async (content) => {
    if (!content.trim()) return;

    const userMsg = {
      id: uuidv4(),
      role: 'user',
      content: content,
      timestamp: new Date().toISOString()
    };
    
    // Add user message to state synchronously
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      let botResponseText = "";
      
      if (apiKey && apiKey !== 'YOUR_API_KEY_HERE') {
        // Exclude system/welcome messages conditionally or just format them.
        // Wait, if welcome message is first, it's 'model' which is not valid unless preceded by user? 
        // Gemini allows conversations starting with model? Let's just filter out the initial welcome message to be safe.
        const filteredHistory = updatedMessages.filter(m => m.id !== 'welcome-msg');
        botResponseText = await callGeminiAPI(filteredHistory);
      }

      if (!botResponseText) {
        // Fallback to simulated latency wrapper
        await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
        botResponseText = getMockResponse();
      }
      
      const botMsg = {
        id: uuidv4(),
        role: 'bot',
        content: botResponseText,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      // Handled inside
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    if (messages.length > 1) {
      setHistory(prev => [
        { id: uuidv4(), title: messages[1].content.substring(0, 20) + '...', date: new Date().toLocaleDateString() },
        ...prev
      ]);
    }

    setMessages([
      {
        id: 'welcome-msg',
        role: 'bot',
        content: 'I have cleared our conversation. Let\'s start fresh!',
        timestamp: new Date().toISOString()
      }
    ]);
  };

  const startNewChat = () => clearChat();

  return (
    <ChatContext.Provider value={{ messages, isTyping, sendMessage, clearChat, history, startNewChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
