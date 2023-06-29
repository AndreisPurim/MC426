import renderer from "react-test-renderer";
import React from "react";
import Login from "../Pages/Login/Login";
import LoginCard from "../Pages/Login/LoginCard";
import SignupCard from "../Pages/Login/SignupCard";
import {dbExample} from "../Source/example";

describe("Login", () => {
    it("renders Login Page", () => {
        const baseProps = {
            auth: "login" as "login" | "signup",
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
            auth: "login",
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
            auth: "signup",
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
