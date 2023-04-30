import renderer from 'react-test-renderer';
import React from "react";
import Landing from '../Pages/Landing/Landing';

describe('Landing', () => {
    it('renders Landing Page', () => {
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
            <Landing {...baseProps}/>
        );
    });
});