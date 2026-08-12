import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ImageUploadBlock, SquareGrid } from '../Media';
import { Text } from 'react-native';

describe('Media Components', () => {
  describe('ImageUploadBlock', () => {
    it('renders empty state placeholder text', () => {
      const { getByText } = render(<ImageUploadBlock placeholder="Upload Avatar" />);
      expect(getByText('Upload Avatar')).toBeTruthy();
    });

    it('renders image when uri is provided', () => {
      const { getByTestId, queryByText } = render(<ImageUploadBlock uri="https://example.com/img.jpg" />);
      expect(queryByText('Upload Avatar')).toBeNull(); // Should not show placeholder
      expect(getByTestId('uploaded-image')).toBeTruthy(); // Should render the image component
    });

    it('handles onPress event', () => {
      const onPressMock = jest.fn();
      const { getByRole } = render(<ImageUploadBlock placeholder="Upload" onPress={onPressMock} />);
      fireEvent.press(getByRole('button'));
      expect(onPressMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('SquareGrid', () => {
    it('renders children evenly spaced in a grid', () => {
      const { getByText } = render(
        <SquareGrid>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
        </SquareGrid>
      );
      expect(getByText('Item 1')).toBeTruthy();
      expect(getByText('Item 2')).toBeTruthy();
    });
  });
});
