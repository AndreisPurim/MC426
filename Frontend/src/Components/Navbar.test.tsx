import '@testing-library/jest-dom'
import * as React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import Footer from './Footer';

describe('App', () => {
    it('renders App component', () => {
        render(<Footer />);
    });
});