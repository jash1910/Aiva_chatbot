import React, { useState } from 'react';
import { X, Key, Shield, Play } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';

const SettingsModal = ({ isOpen, onClose }) => {
  // Load token immediately to see if we have it
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('nexus_gemini_key') || '');
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    localStorage.setItem('nexus_gemini_key', apiKey.trim());
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1000);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(4px)' }}>
      <div className="auth-card" style={{ maxWidth: '500px', animation: 'msgFadeUp 0.3s ease-out', padding: '2rem' }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Key size={24} className="text-gradient" />
          Settings
        </h2>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem', lineHeight: 1.5 }}>
          To enable real AI responses, please provide a Google Gemini API Key. This key is stored exclusively in your browser's Local Storage and is never sent to our servers.
        </p>

        <Input 
          type="password"
          label="Google Gemini API Key"
          placeholder="AIzaSy..."
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          icon={Shield}
        />

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>
            {saved ? 'Saved!' : 'Save Token'}
          </Button>
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(59,130,246,0.1)', borderRadius: 'var(--radius-md)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
          <strong>Need a key?</strong> You can get a free API key from Google AI Studio. 
          <br /><br />
          If no key is provided, the chatbot will fall back to simulated mock responses.
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
