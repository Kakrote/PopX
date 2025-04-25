import React from 'react';

const Button = ({ label, onClick, className = '', disabled = false, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
         px-4 py-2 rounded-lg duration-150 
        ${disabled ? 'bg-gray-300 text-white cursor-not-allowed' : 'cursor-pointer'} 
        ${!disabled && className}
      `}
    >
      {label}
    </button>
  );
};

Button.displayName = "Button";
export default Button;
