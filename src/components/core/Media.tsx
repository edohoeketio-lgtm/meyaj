import React from 'react';
import { TouchableOpacity, View, Text, Image, TouchableOpacityProps, ActivityIndicator } from 'react-native';

interface ImageUploadBlockProps extends TouchableOpacityProps {
  uri?: string | null;
  placeholder?: string;
  loading?: boolean;
  uploadingText?: string;
  changeImageText?: string;
  uploadImageText?: string;
}

export function ImageUploadBlock({ 
  uri, 
  placeholder = 'Upload', 
  loading = false,
  uploadingText = 'Uploading...',
  changeImageText = 'Change uploaded image',
  uploadImageText = 'Upload image for',
  className = '', 
  onPress, 
  ...props 
}: ImageUploadBlockProps) {
  return (
    <TouchableOpacity
      className={`w-32 h-32 rounded-xl justify-center items-center overflow-hidden ${
        uri ? 'border-0' : 'border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800'
      } ${className}`}
      onPress={onPress}
      disabled={loading || props.disabled}
      accessibilityRole="button"
      accessibilityLabel={uri ? changeImageText : `${uploadImageText} ${placeholder}`}
      accessibilityState={{ busy: loading, disabled: loading || props.disabled }}
      {...props}
    >
      {loading ? (
        <View className="items-center justify-center p-2">
          <ActivityIndicator color="#000" />
          <Text className="text-gray-500 font-medium text-xs text-center mt-2">{uploadingText}</Text>
        </View>
      ) : uri ? (
        <Image 
          testID="uploaded-image"
          source={{ uri }} 
          className="w-full h-full" 
          resizeMode="cover"
        />
      ) : (
        <View className="items-center justify-center p-2">
          {/* We'll assume an icon is here, simulating with a plus sign for now */}
          <Text className="text-gray-400 text-3xl mb-1">+</Text>
          <Text className="text-gray-500 font-medium text-xs text-center">{placeholder}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

interface SquareGridProps {
  children: React.ReactNode;
  className?: string;
}

export function SquareGrid({ children, className = '' }: SquareGridProps) {
  return (
    <View className={`flex-row flex-wrap justify-between ${className}`}>
      {React.Children.map(children, (child) => (
        <View className="w-[48%] mb-4 aspect-square">
          {child}
        </View>
      ))}
    </View>
  );
}
