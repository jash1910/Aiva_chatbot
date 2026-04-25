import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Moon, Sun } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';
import './landing.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand">
        <Bot className="text-gradient" size={28} />
        <span>Aiva</span>
      </Link>

      {/* Desktop Links */}
      <div className="nav-links hidden-mobile">
        <a href="#features" className="nav-link">Features</a>
        <a href="#about" className="nav-link">About</a>
        <button onClick={toggleTheme} className="btn btn-ghost" style={{padding: '0.5rem'}}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <Link to="/login" className="nav-link">Log in</Link>
        <Link to="/signup">
          <Button variant="primary">Get Started</Button>
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button className="btn btn-ghost visible-mobile" onClick={() => setMobileOpen(!mobileOpen)} style={{display: 'none'}}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
