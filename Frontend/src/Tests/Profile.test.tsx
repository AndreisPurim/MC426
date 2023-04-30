import renderer from 'react-test-renderer';
import React from "react";
import Profile from '../Pages/Profile/Profile';
import UserCard from '../Pages/Profile/UserCard';
import UserTable from '../Pages/Profile/UserTable';
import ReadQRCode from '../Pages/Profile/ReadQRCode';
import { dbExample } from '../Source/example';

describe('UserCard', () => {
    it('renders User Card', () => {
        const baseProps = {
            setControl: jest.fn(()=>null),
            setExample: jest.fn(()=>null),
            example: dbExample(),
            control: {
                view: "Login",
                formID: null,
                tempData: {},
                user: dbExample().users['andreis'],
            },
            setView: jest.fn(),
            setAlert: jest.fn(()=>null),
            changeLightMode: jest.fn(()=>null),
            theme: 'light',
        };
        const component = renderer.create(
            <UserCard {...baseProps}/>
        );  
    });
});

/* describe('ReadQR', () => {
    it('renders ReadQR Page', () => {
        const baseProps = {
            setControl: jest.fn(()=>null),
            setExample: jest.fn(()=>null),
            example: dbExample(),
            control: {
                view: "Login",
                formID: null,
                tempData: {},
                user: dbExample().users['andreis'],
            },
            setView: jest.fn(),
            setAlert: jest.fn(()=>null),
            changeLightMode: jest.fn(()=>null),
            theme: 'light',
        };
        const component = renderer.create(
            <ReadQRCode {...baseProps}/>
        );  
    });
}); */