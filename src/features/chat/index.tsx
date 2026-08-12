import React from 'react';
import { View, Text } from 'react-native';
import { APP_COPY } from '../../constants/copy';

export function ChatFeature() {
  return (
    <View>
      <Text>{APP_COPY.chat.crucibleWarning}</Text>
    </View>
  );
}
