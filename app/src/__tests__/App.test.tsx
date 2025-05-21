import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders navbar brand', () => {
  render(<App />);
  const brand = screen.getByText('iPaty');
  expect(brand).toBeInTheDocument();
});
