import React, { useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

interface TextAreaProps extends TextInputProps {
  error?: string;
}

export function TextArea({ className = '', error, onFocus, onBlur, ...props }: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="w-full mb-4">
      <TextInput
        multiline
        textAlignVertical="top"
        className={`w-full p-4 rounded-xl border text-lg text-black dark:text-white min-h-[120px] ${
          error ? 'border-red-500' : isFocused ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'
        } bg-white dark:bg-black ${className}`}
        placeholderTextColor="#9ca3af"
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        accessibilityInvalid={!!error}
        {...props}
      />
      {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
    </View>
  );
}

interface ProgressStepperProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function ProgressStepper({ currentStep, totalSteps, className = '' }: ProgressStepperProps) {
  const dots = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <View 
      className={`flex-row justify-center items-center gap-2 ${className}`}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 1, max: totalSteps, now: currentStep }}
    >
      {dots.map((step) => {
        const isActive = step <= currentStep;
        return (
          <View
            key={step}
            testID={`progress-dot-${step}`}
            className={`h-2 rounded-full ${isActive ? 'w-8 bg-black dark:bg-white' : 'w-2 bg-gray-300 dark:bg-gray-600'}`}
          />
        );
      })}
    </View>
  );
}
