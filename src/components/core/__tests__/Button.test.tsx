import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders primary button correctly', () => {
    const { getByText } = render(<Button title="Continue" variant="primary" />);
    const textElement = getByText('Continue');
    expect(textElement).toBeTruthy();
    
    // Check if the parent view has the primary background class
    const buttonElement = textElement.parent?.parent;
    expect(buttonElement?.props.className).toContain('bg-black');
  });

  it('renders social button correctly', () => {
    const { getByText } = render(<Button title="Continue with Apple" variant="social" />);
    const textElement = getByText('Continue with Apple');
    
    const buttonElement = textElement.parent?.parent;
    expect(buttonElement?.props.className).toContain('bg-white');
    expect(buttonElement?.props.className).toContain('border-gray-200');
  });

  it('renders disabled state correctly', () => {
    const { getByText } = render(<Button title="Verify" disabled={true} />);
    const textElement = getByText('Verify');
    
    const buttonElement = textElement.parent?.parent;
    expect(buttonElement?.props.className).toContain('bg-gray-300');
    expect(buttonElement?.props.accessibilityState.disabled).toBe(true);
  });

  it('handles onPress events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Click Me" onPress={onPressMock} />);
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders loading state correctly and disables interaction', () => {
    const onPressMock = jest.fn();
    const { getByTestId, queryByText } = render(
      <Button title="Click Me" loading={true} onPress={onPressMock} />
    );
    
    // Title should be hidden or still there but spinner present
    expect(getByTestId('button-spinner')).toBeTruthy();
    
    // Pressing should not trigger the action
    fireEvent.press(getByTestId('button-spinner').parent?.parent as any);
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('does not trigger onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Click Me" disabled={true} onPress={onPressMock} />);
    
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
