import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { useChat } from '../../context/ChatContext';
import './chat.css';

const MessageInput = () => {
  const [text, setText] = useState('');
  const { sendMessage, isTyping } = useChat();

  const handleSend = () => {
    if (text.trim() && !isTyping) {
      sendMessage(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-area">
      <div className="input-container-inner">
        <textarea
          className="chat-input"
          placeholder="Ask Aiva anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={isTyping}
        />
        <div className="send-btn-wrapper">
          <Button 
            variant={text.trim() ? 'primary' : 'ghost'} 
            size="sm" 
            onClick={handleSend}
            disabled={!text.trim() || isTyping}
            style={{ borderRadius: 'var(--radius-lg)' }}
          >
            {isTyping ? <Sparkles size={18} className="btn-spinner" /> : <Send size={18} />}
          </Button>
        </div>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
        Aiva can generate simulated responses and make mistakes. Consider verifying important information.
      </p>
    </div>
  );
};

export default MessageInput;
