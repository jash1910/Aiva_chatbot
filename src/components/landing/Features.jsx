import React from 'react';
import { Zap, Shield, Globe, Cpu, MessageSquareText, Layers } from 'lucide-react';
import './landing.css';

const features = [
  { icon: MessageSquareText, title: 'Natural Conversations', desc: 'Engage in fluid, context-aware dialogues that feel completely organic.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Experience near-zero latency responses powered by edge computing.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Your data is encrypted end-to-end and never used to train public models.' },
  { icon: Globe, title: 'Multilingual', desc: 'Fluent in over 50 languages with dialect and cultural understanding.' },
  { icon: Cpu, title: 'Advanced Reasoning', desc: 'Solves complex math, code, and logic problems with step-by-step clarity.' },
  { icon: Layers, title: 'Seamless Integration', desc: 'Easily export conversations, snippets, and integrate with your workflow.' },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2 className="section-title">Designed for <span className="text-gradient">Excellence</span></h2>
      <div className="features-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon-wrapper">
              <feature.icon size={24} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
