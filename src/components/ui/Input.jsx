import React from 'react';
import './ui.css';

const Input = React.forwardRef(({ 
  label,
  error,
  icon: Icon,
  className = '',
  containerClassName = '',
  ...props 
}, ref) => {
  return (
    <div className={`input-container ${containerClassName}`}>
      {label && <label className="input-label">{label}</label>}
      <div className="input-wrapper">
        {Icon && <div className="input-icon"><Icon size={20} /></div>}
        <input 
          ref={ref}
          className={`input-field ${Icon ? 'has-icon' : ''} ${error ? 'has-error' : ''} ${className}`}
          {...props} 
        />
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
