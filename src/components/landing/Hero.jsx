import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import './landing.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-secondary)', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '2rem' }}>
        <Sparkles size={16} />
        <span>Introducing Aiva 2.0</span>
      </div>

      <h1 className="hero-title">
        Intelligence that feels <span className="text-gradient">fundamentally human.</span>
      </h1>
      
      <p className="hero-subtitle">
        Experience a next-generation conversational AI that understands context, anticipates needs, and articulates complex ideas with unprecedented clarity.
      </p>

      <div className="hero-actions">
        <Link to="/signup">
          <Button variant="primary" size="lg" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            Try Aiva Free <ArrowRight size={20} />
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="outline" size="lg" className="border-btn">
            View Capabilities
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
