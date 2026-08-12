import React from 'react';
import { View, Modal, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

interface LoadingOverlayProps {
  visible: boolean;
}

export function LoadingOverlay({ visible }: LoadingOverlayProps) {
  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View 
        testID="loading-overlay"
        className="flex-1 bg-black/70 justify-center items-center"
      >
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    </Modal>
  );
}

interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function BottomSheet({ visible, onClose, children }: BottomSheetProps) {
  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="slide" onRequestClose={onClose}>
      <View 
        testID="bottom-sheet"
        className="flex-1 justify-end"
      >
        {/* Backdrop */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View className="absolute inset-0 bg-black/40" />
        </TouchableWithoutFeedback>
        
        {/* Sheet Content */}
        <View className="bg-white dark:bg-gray-900 rounded-t-3xl p-6 min-h-[50%]">
          {/* Drag Handle Indicator */}
          <View className="w-12 h-1.5 bg-gray-300 rounded-full self-center mb-6" />
          
          {children}
        </View>
      </View>
    </Modal>
  );
}
