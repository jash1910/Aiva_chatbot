import React, { useState } from 'react';
import Sidebar from '../components/chat/Sidebar';
import ChatWindow from '../components/chat/ChatWindow';
import MessageInput from '../components/chat/MessageInput';
import { Menu } from 'lucide-react';
import Button from '../components/ui/Button';

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="chat-layout">
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <main className="chat-main">
        {/* Mobile Header overlay */}
        <div className="chat-header visible-mobile" style={{ display: 'none' }}>
           <Button variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
             <Menu size={24} />
           </Button>
           <span style={{ fontWeight: 600, marginLeft: '0.5rem' }}>Aiva</span>
        </div>
        
        <ChatWindow />
        <MessageInput />
      </main>
      
      {/* Overlay to close sidebar on mobile */}
      {sidebarOpen && (
        <div 
          className="visible-mobile"
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 30, display: 'none' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Chat;
