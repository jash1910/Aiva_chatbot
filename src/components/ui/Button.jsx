import React from 'react';
import './ui.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  ...props 
}) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const loadingClass = isLoading ? 'btn-loading' : '';

  return (
    <button 
      className={`${baseClass} ${variantClass} ${sizeClass} ${loadingClass} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="btn-spinner" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" strokeWidth="4"></circle>
        </svg>
      )}
      <span className={isLoading ? 'btn-text-hidden' : ''}>{children}</span>
    </button>
  );
};

export default Button;
