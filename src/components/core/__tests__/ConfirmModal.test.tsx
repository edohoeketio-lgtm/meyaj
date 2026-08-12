import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ConfirmModal } from '../ConfirmModal';

describe('ConfirmModal Component', () => {
  it('does not render when visible is false', () => {
    const { queryByText } = render(
      <ConfirmModal 
        visible={false} 
        title="REPORT ACCOUNT?" 
        message="Are you sure?" 
        onCancel={() => {}} 
        onConfirm={() => {}} 
      />
    );
    expect(queryByText('REPORT ACCOUNT?')).toBeNull();
  });

  it('renders correctly when visible and handles actions', () => {
    const onCancelMock = jest.fn();
    const onConfirmMock = jest.fn();

    const { getByText } = render(
      <ConfirmModal 
        visible={true} 
        title="REPORT ACCOUNT?" 
        message="Are you sure?" 
        cancelText="No"
        confirmText="Yes"
        onCancel={onCancelMock} 
        onConfirm={onConfirmMock} 
      />
    );

    expect(getByText('REPORT ACCOUNT?')).toBeTruthy();
    
    fireEvent.press(getByText('No'));
    expect(onCancelMock).toHaveBeenCalledTimes(1);

    fireEvent.press(getByText('Yes'));
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });
});
