import React from 'react';
import './landing.css';

const About = () => {
  return (
    <section id="about" className="features-section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 className="section-title">Beyond a <span className="text-gradient">Chatbot</span></h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Aiva is built for professionals, creators, and developers who demand more from their conversational tools. We meticulously designed the architecture to prioritize reasoning, context retention, and security—enabling you to accomplish complex workflows seamlessly.
        </p>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
          Whether you're debugging intricate codebase logic, drafting a compelling narrative, or analyzing multifaceted data, Aiva provides a robust, zero-distraction environment.
        </p>
      </div>
    </section>
  );
};

export default About;
