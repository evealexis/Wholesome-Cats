import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../src/App';
import Api from '../src/Image';

describe('App', () => {
    it('should render the App component', () => {
        render(<App />);

        // heading - h1
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Cats/i);
    });
});