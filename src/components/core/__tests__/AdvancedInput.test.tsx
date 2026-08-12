import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TextArea, ProgressStepper } from '../AdvancedInput';

describe('AdvancedInput Components', () => {
  describe('TextArea', () => {
    it('renders with correct placeholder', () => {
      const { getByPlaceholderText } = render(<TextArea placeholder="Write your bio..." />);
      expect(getByPlaceholderText('Write your bio...')).toBeTruthy();
    });

    it('handles text changes', () => {
      const onChangeMock = jest.fn();
      const { getByPlaceholderText } = render(
        <TextArea placeholder="Bio" onChangeText={onChangeMock} />
      );
      
      fireEvent.changeText(getByPlaceholderText('Bio'), 'Hello world');
      expect(onChangeMock).toHaveBeenCalledWith('Hello world');
    });
  });

  describe('ProgressStepper', () => {
    it('renders correct number of total steps', () => {
      const { getAllByTestId } = render(<ProgressStepper currentStep={2} totalSteps={4} />);
      const dots = getAllByTestId(/progress-dot-/);
      expect(dots).toHaveLength(4);
    });

    it('highlights active steps correctly', () => {
      const { getByTestId } = render(<ProgressStepper currentStep={2} totalSteps={3} />);
      
      // Step 1 should be active
      const dot1 = getByTestId('progress-dot-1');
      expect(dot1.props.className).toContain('bg-black');
      
      // Step 2 should be active
      const dot2 = getByTestId('progress-dot-2');
      expect(dot2.props.className).toContain('bg-black');
      
      // Step 3 should be inactive
      const dot3 = getByTestId('progress-dot-3');
      expect(dot3.props.className).toContain('bg-gray-300');
    });
  });
});
