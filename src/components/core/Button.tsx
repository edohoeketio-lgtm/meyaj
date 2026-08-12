import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, View, ActivityIndicator } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'social' | 'ghost';
  icon?: React.ReactNode;
  loading?: boolean;
}

export function Button({ 
  title, 
  variant = 'primary', 
  disabled = false, 
  loading = false,
  icon,
  className = '', 
  ...props 
}: ButtonProps) {
  
  // Base classes for the touchable container
  let containerClasses = 'flex-row items-center justify-center rounded-xl p-4 w-full';
  // Base classes for the text
  let textClasses = 'font-bold text-lg text-center';

  if (disabled || loading) {
    containerClasses += ' bg-gray-300';
    textClasses += ' text-gray-500';
  } else if (variant === 'primary') {
    containerClasses += ' bg-black dark:bg-white';
    textClasses += ' text-white dark:text-black';
  } else if (variant === 'social') {
    containerClasses += ' bg-white border border-gray-200';
    textClasses += ' text-black';
  } else if (variant === 'ghost') {
    containerClasses += ' bg-transparent';
    textClasses += ' text-black dark:text-white';
  }

  return (
    <TouchableOpacity 
      className={`${containerClasses} ${className}`}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      {...props}
    >
      {loading ? (
        <ActivityIndicator testID="button-spinner" color={variant === 'primary' ? '#fff' : '#000'} />
      ) : (
        <>
          {icon && (
            <View className="absolute left-4">
              {icon}
            </View>
          )}
          <Text className={textClasses}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
