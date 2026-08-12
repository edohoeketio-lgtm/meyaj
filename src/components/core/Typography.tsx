import React from 'react';
import { Text, TextProps } from 'react-native';

interface HeadingProps extends TextProps {
  level?: 1 | 2 | 3;
}

export function Heading({ level = 1, className = '', children, ...props }: HeadingProps) {
  let sizeClass = 'text-4xl'; // default H1 (e.g. "The work is the proposal.")
  if (level === 2) sizeClass = 'text-2xl'; // e.g. "Continue with your email address"
  if (level === 3) sizeClass = 'text-xl';

  return (
    <Text
      className={`font-bold text-primary-obsidian dark:text-primary-offWhite ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </Text>
  );
}

interface BodyTextProps extends TextProps {
  variant?: 'default' | 'error' | 'muted';
}

export function BodyText({ variant = 'default', className = '', children, ...props }: BodyTextProps) {
  let variantClass = 'text-base text-gray-800 dark:text-gray-300';
  if (variant === 'error') {
    variantClass = 'text-sm text-red-500'; // e.g. "Invalid code."
  } else if (variant === 'muted') {
    variantClass = 'text-sm text-gray-500'; // e.g. "By continuing you agree..."
  }

  return (
    <Text className={`${variantClass} ${className}`} {...props}>
      {children}
    </Text>
  );
}
