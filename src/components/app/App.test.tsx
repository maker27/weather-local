import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { notSupportGeolocation } from '../../assets/constants';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(notSupportGeolocation);
    expect(linkElement).toBeInTheDocument();
});
