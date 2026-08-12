import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className="bg-primary-obsidian p-4 rounded-md">
      <Text className="text-primary-offWhite text-center">{title}</Text>
    </TouchableOpacity>
  );
}
