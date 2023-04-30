import renderer from 'react-test-renderer';
import React from "react";
import Footer from './Footer';

describe('Footer', () => {
    it('renders Footer component', () => {
        const component = renderer.create(<Footer />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});