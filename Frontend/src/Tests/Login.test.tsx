import renderer from "react-test-renderer";
import React from "react";
import Login from "../Pages/Authentication/Authentication";
import LoginCard from "../Pages/Authentication/LoginCard";
import SignupCard from "../Pages/Authentication/SignupCard";
import {dbExample} from "../Source/example";

describe("Login", () => {
    it("renders Login Page", () => {
        const baseProps = {
            setControl: jest.fn(() => null),
            setExample: jest.fn(() => null),
            control: {
                view: "Login",
                formID: null,
                tempData: {},
                user: null,
            },
            example: dbExample(),
            setView: jest.fn(),
            setAlert: jest.fn(() => null),
            changeLightMode: jest.fn(() => null),
            theme: "light",
        };
        const component = renderer.create(<Login {...baseProps} />);
    });
});

describe("LoginCard", () => {
    it("renders Login Card", () => {
        const baseProps = {
            setControl: jest.fn(() => null),
            setExample: jest.fn(() => null),
            example: dbExample(),
            control: {
                view: "Login",
                formID: null,
                tempData: {},
                user: null,
            },
            setView: jest.fn(),
            setAlert: jest.fn(() => null),
            changeLightMode: jest.fn(() => null),
            theme: "light",
        };
        const component = renderer.create(<LoginCard {...baseProps} />);
    });
});

describe("SignupCard", () => {
    it("renders Signup Card", () => {
        const baseProps = {
            setControl: jest.fn(() => null),
            setExample: jest.fn(() => null),
            onSignup: jest.fn(() => null),
            example: dbExample(),
            control: {
                view: "Login",
                formID: null,
                tempData: {},
                user: null,
            },
            setView: jest.fn(),
            setAlert: jest.fn(() => null),
            changeLightMode: jest.fn(() => null),
            theme: "light",
        };
        const component = renderer.create(<SignupCard {...baseProps} />);
    });
});
