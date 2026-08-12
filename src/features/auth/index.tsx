import React from 'react';
import { View, Text } from 'react-native';
import { APP_COPY } from '../../constants/copy';

export function AuthFeature() {
  return (
    <View>
      <Text>{APP_COPY.onboarding.welcomeTitle}</Text>
    </View>
  );
}
