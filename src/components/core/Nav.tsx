import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface TopNavBarProps {
  rightElement?: React.ReactNode;
  className?: string;
}

export function TopNavBar({ rightElement, className = '' }: TopNavBarProps) {
  return (
    <View className={`flex-row justify-between items-center px-6 py-4 bg-white dark:bg-black ${className}`}>
      {/* Logo placeholder - eventually an SVG */}
      <Text className="text-2xl font-bold tracking-tighter text-black dark:text-white">
        meyaj
      </Text>

      {/* Right Element (e.g. Filter Icon) */}
      {rightElement && (
        <View>
          {rightElement}
        </View>
      )}
    </View>
  );
}

interface BottomTabBarProps {
  activeTabId?: string;
  onTabPress?: (id: string) => void;
  className?: string;
}

export function BottomTabBar({ activeTabId = 'home', onTabPress, className = '' }: BottomTabBarProps) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'messages', label: 'Messages' },
    { id: 'likes', label: 'Likes' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <View className={`flex-row justify-around items-center px-6 py-4 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <TouchableOpacity 
            key={tab.id} 
            testID={`nav-icon-${tab.id}`} 
            className="items-center justify-center p-2"
            onPress={() => onTabPress?.(tab.id)}
            accessibilityRole="button"
            accessibilityLabel={tab.label}
            accessibilityState={{ selected: isActive }}
          >
            {/* Placeholder for icons */}
            <View className={`w-6 h-6 rounded-full mb-1 ${isActive ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-700'}`} />
            <Text className={`text-[10px] ${isActive ? 'text-black dark:text-white font-bold' : 'text-gray-500 font-medium'}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
