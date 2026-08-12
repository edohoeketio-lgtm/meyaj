import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextInput, OtpInput } from '../Input';

describe('Input Components', () => {
  describe('TextInput', () => {
    it('renders with placeholder', () => {
      const { getByPlaceholderText } = render(<TextInput placeholder="Email address" />);
      expect(getByPlaceholderText('Email address')).toBeTruthy();
    });

    it('updates value on text change', () => {
      const onChangeTextMock = jest.fn();
      const { getByPlaceholderText } = render(
        <TextInput placeholder="Email" onChangeText={onChangeTextMock} />
      );
      
      fireEvent.changeText(getByPlaceholderText('Email'), 'test@example.com');
      expect(onChangeTextMock).toHaveBeenCalledWith('test@example.com');
    });

    it('renders label if provided', () => {
      const { getByText } = render(<TextInput label="Email Label" />);
      expect(getByText('Email Label')).toBeTruthy();
    });
  });

  describe('OtpInput', () => {
    it('renders 6 boxes by default', () => {
      const { getAllByTestId } = render(<OtpInput length={6} value="" onChangeText={() => {}} />);
      const boxes = getAllByTestId(/otp-box-/);
      expect(boxes).toHaveLength(6);
    });

    it('renders error state correctly', () => {
      const { getByText, getAllByTestId } = render(
        <OtpInput length={6} value="" onChangeText={() => {}} error="Invalid code. Please try again." />
      );
      
      // Should show the error message
      expect(getByText('Invalid code. Please try again.')).toBeTruthy();
      
      // The boxes should have error styling (red text/border)
      const boxes = getAllByTestId(/otp-box-/);
      expect(boxes[0].props.className).toContain('border-red-500');
    });
  });
});
