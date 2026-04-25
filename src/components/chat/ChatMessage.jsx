import React from 'react';
import { Bot, User } from 'lucide-react';
import './chat.css';

const ChatMessage = ({ message }) => {
  const isBot = message.role === 'bot';

  return (
    <div className={`message-wrapper ${isBot ? 'bot' : 'user'} msg-enter`}>
      <div className={`avatar ${isBot ? 'bot' : 'user'}`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className="message-bubble">
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
