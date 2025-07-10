import React from 'react';
import { useNewsletterDialog } from '../../hooks/useNewsletterDialog';
import NewsletterDialog from './NewsletterDialog';

interface NewsletterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

export function NewsletterButton({
  variant = 'primary',
  size = 'md',
  className = '',
  children = 'Subscribe to Newsletter',
  ...props
}: NewsletterButtonProps) {
  const { isOpen, openDialog, closeDialog } = useNewsletterDialog();

  const baseStyles = 'font-medium rounded-md transition-colors duration-200 ease-in-out';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    text: 'text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
      <NewsletterDialog isOpen={isOpen} onClose={closeDialog} />
    </>
  );
}
