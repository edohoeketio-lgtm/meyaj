import React from 'react';
import { Modal, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

interface ConfirmModalProps {
  visible: boolean;
  title: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
  onCancel: () => void;
  onConfirm: () => void;
  isDestructive?: boolean;
  isLoading?: boolean;
}

export function ConfirmModal({ 
  visible, 
  title, 
  message, 
  cancelText = 'Cancel', 
  confirmText = 'Confirm', 
  onCancel, 
  onConfirm,
  isDestructive = false,
  isLoading = false
}: ConfirmModalProps) {
  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/60 justify-center items-center px-6">
        <View className="bg-white dark:bg-gray-900 w-full rounded-2xl p-6 items-center">
          <Text className="text-xl font-bold text-black dark:text-white mb-2 text-center">{title}</Text>
          <Text className="text-gray-500 text-center mb-8">{message}</Text>
          
          <View className="flex-row w-full justify-between gap-4">
            <TouchableOpacity 
              className="flex-1 py-4 border border-gray-300 dark:border-gray-600 rounded-xl items-center"
              onPress={onCancel}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityState={{ disabled: isLoading }}
            >
              <Text className={`font-bold ${isLoading ? 'text-gray-400' : 'text-black dark:text-white'}`}>{cancelText}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              className={`flex-1 py-4 rounded-xl items-center justify-center border ${
                isDestructive ? 'bg-red-500 border-red-500' : 'bg-black dark:bg-white border-black dark:border-white'
              } ${isLoading ? 'opacity-70' : ''}`}
              onPress={onConfirm}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityState={{ busy: isLoading, disabled: isLoading }}
            >
              {isLoading ? (
                <ActivityIndicator color={isDestructive ? '#fff' : '#888'} />
              ) : (
                <Text className={`font-bold ${isDestructive ? 'text-white' : 'text-white dark:text-black'}`}>
                  {confirmText}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
