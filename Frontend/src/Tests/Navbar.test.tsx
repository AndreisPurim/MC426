import renderer from 'react-test-renderer';
import React from "react";
import Navbar from '../Components/Navbar';

describe('Navbar', () => {
    it('renders Navbar component', () => {
        const baseProps = {
            setControl: jest.fn(()=>null),
            control: {
                view: "landing",
                formID: null,
                tempData: {},
                user: null,
            },
            setView: jest.fn(),
            setAlert: jest.fn(()=>null),
            changeLightMode: jest.fn(()=>null),
            theme: 'light',
        };
        const component = renderer.create(
            <Navbar {...baseProps}/>
        );
    });
});