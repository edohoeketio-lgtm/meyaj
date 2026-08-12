import React from 'react';
import { View, Text } from 'react-native';
import { APP_COPY } from '../../constants/copy';

export function ProfileFeature() {
  return (
    <View>
      <Text>{APP_COPY.profile.standoutLabel}</Text>
    </View>
  );
}
