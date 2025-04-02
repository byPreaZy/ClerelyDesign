import React from 'react';

const IconWrapper = ({ 
  children, 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center justify-center ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};

export default IconWrapper; 