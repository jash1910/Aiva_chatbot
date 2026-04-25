import React from 'react';
import { Bot, User } from 'lucide-react';
import './chat.css';

const ChatMessage = ({ message }) => {
  const isBot = message.role === 'bot';

  // Fallback micro-parser when we don't safely have react-markdown installed yet.
  const formatMessageText = (text) => {
    if (!text) return null;
    
    // Split text into paragraphs based on double newlines or single newlines occasionally.
    const blocks = text.split(/\n/);
    
    return blocks.map((line, idx) => {
      if (!line.trim()) return <br key={idx} />;
      
      // Parse Bold text **bold**
      let parsedHTML = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code style="background:var(--bg-primary); padding: 0.1rem 0.25rem; border-radius: 0.25rem; font-family: monospace;">$1</code>');
        
      // Handle simple headers
      if (line.match(/^###\s/)) {
         return <h3 key={idx} style={{marginTop: '1rem', marginBottom: '0.5rem'}} dangerouslySetInnerHTML={{ __html: parsedHTML.replace(/^###\s/, '') }} />;
      }
      if (line.match(/^##\s/)) {
         return <h2 key={idx} style={{marginTop: '1rem', marginBottom: '0.5rem'}} dangerouslySetInnerHTML={{ __html: parsedHTML.replace(/^##\s/, '') }} />;
      }
      if (line.match(/^#\s/)) {
         return <h1 key={idx} style={{marginTop: '1rem', marginBottom: '0.5rem'}} dangerouslySetInnerHTML={{ __html: parsedHTML.replace(/^#\s/, '') }} />;
      }
      
      // Basic List handling
      if (line.trim().match(/^(\*|-)\s/)) {
         return <li key={idx} style={{marginLeft: '1.5rem', marginBottom: '0.25rem'}} dangerouslySetInnerHTML={{ __html: parsedHTML.replace(/^(\*|-)\s/, '') }} />;
      }

      return <div key={idx} style={{marginBottom: '0.5rem'}} dangerouslySetInnerHTML={{ __html: parsedHTML }} />;
    });
  };

  return (
    <div className={`message-wrapper ${isBot ? 'bot' : 'user'} msg-enter`}>
      <div className={`avatar ${isBot ? 'bot' : 'user'}`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className="message-bubble" style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
        {formatMessageText(message.content)}
      </div>
    </div>
  );
};

export default ChatMessage;
