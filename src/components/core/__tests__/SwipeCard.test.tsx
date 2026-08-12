import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SwipeCard, IconButton } from '../SwipeCard';

describe('Swipe Components', () => {
  describe('SwipeCard', () => {
    it('renders text content correctly', () => {
      const { getByText } = render(
        <SwipeCard title="UI Designer" rate="$3,000" imageUri="https://example.com/img.jpg" />
      );
      expect(getByText('UI Designer')).toBeTruthy();
      expect(getByText('$3,000')).toBeTruthy();
    });

    it('renders stamp overlay when provided', () => {
      const { getByText } = render(
        <SwipeCard title="UI Designer" rate="$3k" stamp="LIKE" />
      );
      expect(getByText('LIKE')).toBeTruthy();
    });
  });

  describe('IconButton', () => {
    it('handles onPress', () => {
      const onPressMock = jest.fn();
      const { getByRole } = render(
        <IconButton icon="star" accessibilityLabel="Star" onPress={onPressMock} />
      );
      fireEvent.press(getByRole('button'));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });
});
