import React from 'react';
import { PlusCircle, MessageSquare, Trash2, Moon, Sun, LogOut } from 'lucide-react';
import Button from '../ui/Button';
import { useChat } from '../../context/ChatContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import './chat.css';

const Sidebar = ({ isOpen, toggleSidebar, onOpenSettings }) => {
  const { history, clearChat, startNewChat } = useChat();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <div className={`chat-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Button variant="outline" className="w-full" style={{ width: '100%', justifyContent: 'flex-start', gap: '0.75rem' }} onClick={startNewChat}>
          <PlusCircle size={20} />
          New Chat
        </Button>
      </div>

      <div className="sidebar-content">
        <h3 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>
          Recent
        </h3>
        {history.map((chat) => (
          <div key={chat.id} className="history-item">
            <MessageSquare size={18} />
            <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.875rem' }}>
              {chat.title}
            </span>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', marginBottom: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {user?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <span style={{ fontSize: '0.875rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
            {user?.email || 'User'}
          </span>
        </div>

        <Button variant="ghost" className="w-full" style={{ justifyContent: 'flex-start', gap: '0.75rem', color: '#ef4444' }} onClick={clearChat}>
          <Trash2 size={20} />
          Clear Conversations
        </Button>
        <Button variant="ghost" className="w-full" style={{ justifyContent: 'flex-start', gap: '0.75rem' }} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
        <Button variant="ghost" className="w-full" style={{ justifyContent: 'flex-start', gap: '0.75rem' }} onClick={logout}>
          <LogOut size={20} />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
