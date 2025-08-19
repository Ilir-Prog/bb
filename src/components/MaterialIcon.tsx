import React from 'react';

interface MaterialIconProps {
  name: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ 
  name, 
  className = '', 
  size = 'medium' 
}) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  return (
    <span className={`material-icons ${sizeClasses[size]} ${className}`}>
      {name}
    </span>
  );
};