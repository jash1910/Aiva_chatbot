import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Mail, Lock } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import './auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth network request
    setTimeout(() => {
      login(email);
      setLoading(false);
      navigate('/chat', { replace: true });
    }, 1200);
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-glow"></div>
      
      <div className="auth-card">
        <Link to="/" style={{ display: 'block', textDecoration: 'none' }}>
          <div className="auth-header">
            <Bot className="text-gradient" size={40} />
            <h1 className="auth-title">Welcome back</h1>
            <p className="auth-subtitle">Log in to continue to Aiva</p>
          </div>
        </Link>
        
        <form className="auth-form" onSubmit={handleLogin}>
          <Input 
            type="email" 
            label="Email Address" 
            placeholder="name@example.com"
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <Input 
            type="password" 
            label="Password" 
            placeholder="••••••••"
            icon={Lock}
            required 
          />
          
          <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={loading} style={{ width: '100%', marginTop: '0.5rem' }}>
            Log in
          </Button>
        </form>
        
        <div className="auth-footer">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
