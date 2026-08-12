import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SwipeCardProps {
  title: string;
  rate: string;
  imageUri?: string | null;
  stamp?: 'LIKE' | 'PASS' | null;
  className?: string;
}

export function SwipeCard({ title, rate, imageUri, stamp, className = '' }: SwipeCardProps) {
  return (
    <View className={`flex-1 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
      {/* Background Image */}
      {imageUri ? (
        <Image source={{ uri: imageUri }} className="absolute inset-0 w-full h-full" resizeMode="cover" />
      ) : (
        <View className="absolute inset-0 w-full h-full bg-gray-200 dark:bg-gray-700" />
      )}

      {/* Dark gradient overlay for text readability */}
      <View className="absolute inset-0 w-full h-full bg-black/20" />

      {/* Stamp Overlay (Check/X) */}
      {stamp && (
        <View className="absolute top-10 w-full items-center z-10">
          <View className={`px-6 py-2 border-4 rounded-lg transform ${stamp === 'LIKE' ? 'border-green-500 rotate-12' : 'border-red-500 -rotate-12'}`}>
            <Text className={`text-4xl font-bold ${stamp === 'LIKE' ? 'text-green-500' : 'text-red-500'}`}>
              {stamp}
            </Text>
          </View>
        </View>
      )}

      {/* Info Block at Bottom */}
      <View className="absolute bottom-0 w-full p-6 pt-12 bg-gradient-to-t from-black/80 to-transparent">
        <Text className="text-3xl font-bold text-white mb-2">{title}</Text>
        <Text className="text-lg font-medium text-white">{rate}</Text>
      </View>
    </View>
  );
}

interface IconButtonProps extends TouchableOpacityProps {
  icon: React.ReactNode;
  accessibilityLabel: string;
}

export function IconButton({ icon, accessibilityLabel, className = '', ...props }: IconButtonProps) {
  return (
    <TouchableOpacity
      className={`w-12 h-12 rounded-full bg-black dark:bg-white justify-center items-center ${className}`}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      {...props}
    >
      {/* We will eventually drop SVGs here, for now it renders the string or component passed */}
      {typeof icon === 'string' ? <Text className="text-white dark:text-black">{icon}</Text> : icon}
    </TouchableOpacity>
  );
}
