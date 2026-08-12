import React from 'react';
import { View, Text } from 'react-native';
import { APP_COPY } from '../../constants/copy';

export function SwipeFeature() {
  return (
    <View>
      <Text>{APP_COPY.swipeDeck.emptyStateTitle}</Text>
    </View>
  );
}
