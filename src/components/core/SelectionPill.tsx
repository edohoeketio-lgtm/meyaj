import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface SelectionPillProps extends TouchableOpacityProps {
  label: string;
  selected: boolean;
}

export function SelectionPill({ label, selected, onPress, className = '', ...props }: SelectionPillProps) {
  const containerClasses = selected 
    ? 'bg-black dark:bg-white border-black dark:border-white' 
    : 'bg-white dark:bg-black border-gray-300 dark:border-gray-600';
    
  const textClasses = selected 
    ? 'text-white dark:text-black font-bold' 
    : 'text-gray-700 dark:text-gray-300 font-normal';

  return (
    <TouchableOpacity
      className={`px-4 py-3 border rounded-full self-start flex-row items-center justify-center mr-2 mb-2 ${containerClasses} ${className}`}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      {...props}
    >
      <Text className={`text-sm ${textClasses}`}>{label}</Text>
    </TouchableOpacity>
  );
}
