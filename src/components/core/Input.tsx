import React from 'react';
import { View, TextInput as RNTextInput, TextInputProps, Text } from 'react-native';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function TextInput({ label, error, className = '', onFocus, onBlur, ...props }: CustomTextInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View className="w-full mb-4">
      {label && <Text className="mb-2 text-sm text-gray-700 dark:text-gray-300 font-semibold">{label}</Text>}
      <RNTextInput
        className={`w-full py-4 border-b text-lg text-black dark:text-white ${
          error ? 'border-red-500' : isFocused ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'
        } ${className}`}
        placeholderTextColor="#9ca3af"
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
      {error && <Text className="mt-1 text-sm text-red-500">{error}</Text>}
    </View>
  );
}

interface OtpInputProps {
  length: number;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}

export function OtpInput({ length = 6, value, onChangeText, error }: OtpInputProps) {
  // In a real app, this would use a ref array for focus management between 6 hidden/visible inputs.
  // For the structural dummy UI, we render the visual layout blocks.
  const boxes = Array.from({ length }, (_, i) => {
    const char = value[i] || '';
    return (
      <View 
        key={i}
        testID={`otp-box-${i}`}
        importantForAccessibility="no-hide-descendants"
        className={`w-12 h-14 border-b-2 justify-center items-center mx-1 ${
          error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
        }`}
      >
        <Text className={`text-2xl font-bold ${error ? 'text-red-500' : 'text-black dark:text-white'}`}>
          {char}
        </Text>
      </View>
    );
  });

  return (
    <View className="w-full items-center">
      <View className="flex-row justify-center mb-4">
        {boxes}
      </View>
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
      
      {/* Invisible actual input that captures keyboard presses */}
      <RNTextInput
        className="absolute w-full h-full opacity-0"
        value={value}
        onChangeText={(text) => {
          if (text.length <= length) {
            onChangeText(text);
          }
        }}
        keyboardType="number-pad"
        maxLength={length}
        accessibilityLabel={`Enter ${length} digit one time password`}
        accessibilityHint="Double tap to enter code"
      />
    </View>
  );
}
