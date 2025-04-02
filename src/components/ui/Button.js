import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

const Button = ({ 
  children, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'right',
  className,
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white focus:ring-blue-500/50",
    secondary: "bg-white/10 hover:bg-white/20 border border-white/20 text-white focus:ring-white/30",
    outline: "bg-transparent border-2 border-white/20 hover:bg-white/10 text-white focus:ring-white/30",
    dark: "bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500/50",
    light: "bg-white hover:bg-gray-100 text-gray-800 focus:ring-gray-300/50",
  };
  
  const sizeClasses = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    disabled && "opacity-50 cursor-not-allowed",
    className
  );
  
  const iconClasses = clsx(
    size === 'xs' ? 'text-xs' : 
    size === 'sm' ? 'text-sm' : 
    size === 'lg' ? 'text-lg' : 
    size === 'xl' ? 'text-xl' : 
    'text-base',
    iconPosition === 'left' ? 'mr-2' : 'ml-2'
  );
  
  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <FontAwesomeIcon 
        icon={icon} 
        className={iconClasses} 
      />
    );
  };
  
  const renderContent = () => (
    <>
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );
  
  if (to) {
    return (
      <Link 
        to={to} 
        className={buttonClasses}
        {...props}
      >
        {renderContent()}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {renderContent()}
      </a>
    );
  }
  
  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button; 