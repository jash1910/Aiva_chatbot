import React from 'react';
import { Bot } from 'lucide-react';
import './chat.css';

const TypingIndicator = () => {
  return (
    <div className="message-wrapper bot msg-enter">
      <div className="avatar bot">
        <Bot size={20} />
      </div>
      <div className="message-bubble">
        <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
