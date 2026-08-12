import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { LoadingOverlay, BottomSheet } from '../Overlay';

describe('Overlay Components', () => {
  describe('LoadingOverlay', () => {
    it('does not render when visible is false', () => {
      const { queryByTestId } = render(<LoadingOverlay visible={false} />);
      expect(queryByTestId('loading-overlay')).toBeNull();
    });

    it('renders correctly when visible is true', () => {
      const { getByTestId } = render(<LoadingOverlay visible={true} />);
      const overlay = getByTestId('loading-overlay');
      expect(overlay).toBeTruthy();
      
      // Should have semi-transparent background
      expect(overlay.props.className).toContain('bg-black/70');
    });
  });

  describe('BottomSheet', () => {
    it('does not render when visible is false', () => {
      const { queryByTestId } = render(
        <BottomSheet visible={false} onClose={() => {}}>
          <></>
        </BottomSheet>
      );
      expect(queryByTestId('bottom-sheet')).toBeNull();
    });

    it('renders with children when visible is true', () => {
      const { getByText, getByTestId } = render(
        <BottomSheet visible={true} onClose={() => {}}>
          <Text>Sheet Content</Text>
        </BottomSheet>
      );
      
      expect(getByTestId('bottom-sheet')).toBeTruthy();
      expect(getByText('Sheet Content')).toBeTruthy();
    });
  });
});
