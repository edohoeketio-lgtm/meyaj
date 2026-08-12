import React from 'react';
import { render } from '@testing-library/react-native';
import { TopNavBar, BottomTabBar } from '../Nav';
import { Text } from 'react-native';

describe('Navigation Components', () => {
  describe('TopNavBar', () => {
    it('renders logo and optional right element', () => {
      const { getByText } = render(
        <TopNavBar rightElement={<Text>Filter</Text>} />
      );
      expect(getByText('meyaj')).toBeTruthy(); // Checking the default logo string
      expect(getByText('Filter')).toBeTruthy();
    });
  });

  describe('BottomTabBar', () => {
    it('renders 4 navigation icons', () => {
      const { getAllByTestId } = render(<BottomTabBar />);
      const navItems = getAllByTestId(/nav-icon-/);
      expect(navItems).toHaveLength(4);
    });
  });
});
