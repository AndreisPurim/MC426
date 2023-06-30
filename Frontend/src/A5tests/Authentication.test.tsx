import renderer from "react-test-renderer";
import { render, fireEvent } from '@testing-library/react';
import React from "react";
import Login from "../Pages/Authentication/Authentication";
import LoginCard from "../Pages/Authentication/LoginCard";
import SignupCard from "../Pages/Authentication/SignupCard";
import {dbExample} from "../Source/example";
import "@testing-library/jest-dom/extend-expect"
import '@testing-library/jest-dom'

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

describe("Signup Class Equivalence", () => {
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
    const valid_emails = [
        "joao123@example.com",
        "alice_silva@example.com",
        "pedro.21@example.com",
        "mariana-oliveira@example.com",
        "lucia@unicamp.br"
      ]
      
    valid_emails.map((email: string) => {
        it("Testing valid email: "+email, ()=> {
            const component = render(<SignupCard {...baseProps} />);
            const input = component.getByTestId("email") as HTMLInputElement;
            fireEvent.change(input, { target: { value: email } });
            expect(component.getByText("Valid Email")).toBeInTheDocument();
        })
    })
    const invalid_emails = [
        { email: "joa!o123@example.com", reason: "Contains invalid character (not number of letter)" },
        { email: "joao..silva@example.com", reason: "Repeated periods (. followed by .)" },
        { email: ".joao@example.com", reason: "Name starts with a period" },
        { email: "joao.@example.com", reason: "Name ends with a period" },
        { email: "joao@example..com", reason: "Domain starts with a period" },
        { email: "joao@example.com.", reason: "Domain ends with a period" },
        { email: "joao@example.co..uk", reason: "Top level starts with a period" },
        { email: "joao@example.co.uk.", reason: "Top level ends with a period" },
        { email: "jo@example.com", reason: "Name has less than three letters" },
    ]
    invalid_emails.map((email: any) => {
        it("Testing invalid email ("+email.reason+"): "+email.email, ()=> {
            const component = render(<SignupCard {...baseProps} />);
            const input = component.getByTestId("email") as HTMLInputElement;
            fireEvent.change(input, { target: { value: email } });
            expect(component.getByText("Invalid Email")).toBeInTheDocument();
        })
    })
})

describe("Signup Decision table", () => {
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
    const valid_users = [
        {
          user: "andreis",
          email: "andreis.p@example.com",
          p1: "password123",
          p2: "password123",
        },
        {
          user: "blabla",
          email: "blabla@example.com",
          p1: "pass123",
          p2: "pass123",
        },
        {
          user: "alexandre",
          email: "alexandre@example.com",
          p1: "abcd1234",
          p2: "abcd1234",
        }
    ];
    valid_users.map((u: any) => {
        it("Testing valid user: "+ u.user +" "+ u.email+" "+u.p1, ()=> {
            const component = render(<SignupCard {...baseProps} />);
            const user = component.getByTestId("username") as HTMLInputElement;
            const mail = component.getByTestId("email") as HTMLInputElement;
            const p1 = component.getByTestId("password1") as HTMLInputElement;
            const p2 = component.getByTestId("password2") as HTMLInputElement;
            const button = component.getByTestId("create") as HTMLInputElement;
            fireEvent.change(user, { target: { value: u.user } });
            fireEvent.change(mail, { target: { value: u.email } });
            fireEvent.change(p1, { target: { value: u.p1 } });
            fireEvent.change(p2, { target: { value: u.p2 } });
            expect(button).not.toHaveClass("Mui-disabled");
        })
    });
    const invalid_users = [
        {
          user: "",
          email: "andreis.p@example.com",
          p1: "password123",
          p2: "password123",
          reason: "Email valid but information missing (R2)",
          helper: "Valid Email"
        },
        {
          user: "blabla",
          email: "blabla@examplecom",
          p1: "pass123",
          p2: "pass123",
          reason: "Email filled but invalid (R3)",
          helper: "Invalid Email"
        },
        {
          user: "alexandre",
          email: "alexandre@example.com",
          p1: "abcd1234",
          p2: "",
          reason: "Password filled but repeat password not (R4)",
          helper: ""
        }, 
        {
            user: "blabla",
            email: "blabla@example.com",
            p1: "pass123",
            p2: "123pass",
            reason: "Password doesnt match (R5)",
            helper: "Password doesnt match"
        },
        {
            user: "andreis",
            email: "andreis.p@example.com",
            p1: "",
            p2: "password123",
            reason: "Missing password (R6)",
            helper: "Missing password"
        },
    ];
    invalid_users.map((u: any) => {
        it("Testing invalid user ("+u.reason+"): "+ u.user +" "+ u.email+" "+u.p1+" "+u.p2, ()=> {
            const component = render(<SignupCard {...baseProps} />);
            const user = component.getByTestId("username") as HTMLInputElement;
            const mail = component.getByTestId("email") as HTMLInputElement;
            const p1 = component.getByTestId("password1") as HTMLInputElement;
            const p2 = component.getByTestId("password2") as HTMLInputElement;
            const button = component.getByTestId("create") as HTMLInputElement;
            fireEvent.change(user, { target: { value: u.user } });
            fireEvent.change(mail, { target: { value: u.email } });
            fireEvent.change(p1, { target: { value: u.p1 } });
            fireEvent.change(p2, { target: { value: u.p2 } });
            expect(button).toHaveClass("Mui-disabled");
            if(u.helper!==""){
                expect(component.getByText(u.helper)).toBeInTheDocument();
            }
        })
    });
})