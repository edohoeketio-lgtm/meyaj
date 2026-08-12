import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { SelectionPill } from '../SelectionPill';

describe('SelectionPill Component', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<SelectionPill label="UI/UX Designer" selected={false} />);
    expect(getByText('UI/UX Designer')).toBeTruthy();
  });

  it('reflects unselected accessibility state correctly', () => {
    const { getByText } = render(<SelectionPill label="Graphic Design" selected={false} />);
    const button = getByText('Graphic Design').parent?.parent as any;
    expect(button.props.accessibilityState.selected).toBe(false);
  });

  it('reflects selected accessibility state correctly', () => {
    const { getByText } = render(<SelectionPill label="Video Editor" selected={true} />);
    const button = getByText('Video Editor').parent?.parent as any;
    expect(button.props.accessibilityState.selected).toBe(true);
  });

  it('handles onPress', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<SelectionPill label="Click Me" selected={false} onPress={onPressMock} />);
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
