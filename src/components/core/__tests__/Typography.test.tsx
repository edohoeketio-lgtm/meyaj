import React from 'react';
import { render } from '@testing-library/react-native';
import { Heading, BodyText } from '../Typography';

describe('Typography Components', () => {
  describe('Heading', () => {
    it('renders correctly with level 1 (H1)', () => {
      const { getByText } = render(<Heading level={1}>Test H1</Heading>);
      const textElement = getByText('Test H1');
      expect(textElement).toBeTruthy();
      // In a real test with DOM we'd check styles, but here we just ensure it renders with the right prop
      expect(textElement.props.className).toContain('text-4xl');
      expect(textElement.props.className).toContain('font-bold');
    });

    it('renders correctly with level 2 (H2)', () => {
      const { getByText } = render(<Heading level={2}>Test H2</Heading>);
      const textElement = getByText('Test H2');
      expect(textElement.props.className).toContain('text-2xl');
      expect(textElement.props.className).toContain('font-bold');
    });

    it('applies custom class names', () => {
      const { getByText } = render(<Heading level={1} className="text-red-500">Custom</Heading>);
      const textElement = getByText('Custom');
      expect(textElement.props.className).toContain('text-red-500');
    });
  });

  describe('BodyText', () => {
    it('renders correctly', () => {
      const { getByText } = render(<BodyText>Body Content</BodyText>);
      const textElement = getByText('Body Content');
      expect(textElement).toBeTruthy();
      expect(textElement.props.className).toContain('text-base');
    });

    it('renders error state correctly', () => {
      const { getByText } = render(<BodyText variant="error">Error Text</BodyText>);
      const textElement = getByText('Error Text');
      expect(textElement.props.className).toContain('text-red-500');
      expect(textElement.props.className).toContain('text-sm');
    });
  });
});
