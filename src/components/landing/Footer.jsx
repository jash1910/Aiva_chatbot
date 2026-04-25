import React from 'react';
import { Bot } from 'lucide-react';
import './landing.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div className="nav-brand" style={{ justifyContent: 'center' }}>
          <Bot className="text-gradient" size={24} />
          <span>Aiva</span>
        </div>
        <p>© {new Date().getFullYear()} Aiva Inc. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
          <a href="#" className="nav-link">Privacy Policy</a>
          <a href="#" className="nav-link">Terms of Service</a>
          <a href="#" className="nav-link">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
