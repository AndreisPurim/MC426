import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import LoginCard from "./LoginCard.tsx";
import SignupCard from "./SignupCard.tsx";
import axios from "axios";

export default function Authentication(
    props: JSX.IntrinsicAttributes & {
        example: {users: {[x: string]: any}};
        setExample: (arg0: any) => void;
        setControl: (arg0: any) => void;
        control: any;
        setAlert: (arg0: {open: boolean; text: string; severity: string}) => void;
    }
) {
    const [card, setCard] = React.useState(0);
    const change = (event: any, newValue: React.SetStateAction<number>) => {
        setCard(newValue);
    };

    const authenticate = (user: any, auth: "login" | "signup") => {
        switch (auth) {
            case "login":
                handleLogin(user);
                break;
            case "signup":
                handleSignup(user);
                break;
        }
    };

    const handleLogin = (user: any) => {
        if (user.username == "andreis" && user.password == "noback") {
            props.setControl({...props.control, user: props.example.users["andreis"], view: "profile"});
            props.setAlert({open: true, text: "Connected", severity: "success"});
            return;
        }
        axios({
            method: "get",
            url: "http://localhost:8000/users",
        })
            .then(function (response) {
                const userInfo = response.data.filter(function (e: any) {
                    return e.nome === user.username;
                })[0];
                if (userInfo && userInfo.senha === user.password) {
                    props.setAlert({open: true, text: "Connected", severity: "success"});
                    // Uses Andreis' profile as a mock example of the profile page.
                    props.setControl({...props.control, user: props.example.users["andreis"], view: "profile"});
                } else if (userInfo) {
                    props.setAlert({open: true, text: "Wrong Password", severity: "error"});
                } else {
                    props.setAlert({open: true, text: "User not found", severity: "error"});
                }
            })
            .catch(function (error) {
                props.setAlert({open: true, text: "Login failed (" + error.name + ")", severity: "error"});
            });
    };

    const handleSignup = (user: any) => {
        axios({
            method: "post",
            url: "http://localhost:8000/users",
            data: {
                id: 0,
                nome: user.username,
                email: user.email,
                senha: user.password,
            },
        })
            .then(function (response) {
                props.setAlert({open: true, text: "Signup Sucessful (ID " + response.data.id + ")", severity: "success"});
            })
            .catch(function (error) {
                props.setAlert({open: true, text: "Signup failed (Server Error)", severity: "error"});
            });
        /*
        const newUsers = props.example.users;
        if (user.username in newUsers) {
            props.setAlert({ open: true, text: "Username already in use", severity: "error" })
        }
        else {
            newUsers[user.username] = {
                id: Object.keys(newUsers).length, username: user.username, password: user.password, admin: false, description: '', joined: '2022-03-05', last_seen: '2022-02-07', avatar: '',
                chips: [],
                favorites: [],
                recents: [],
                created: [],
            };
            props.setExample({ ...props.example, user: newUsers })
            props.setAlert({ open: true, text: "Created!", severity: "success" })
        } */
    };

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <Tabs value={card} onChange={change} indicatorColor="primary" textColor="primary">
                        <Tab label="Login" />
                        <Tab label="Signup" />
                    </Tabs>
                </Grid>
                <Grid item xs={3} style={{width: "100%"}}>
                    {!card ? <LoginCard {...props} onLogin={authenticate} /> : <SignupCard {...props} onSignup={authenticate} />}
                </Grid>
            </Grid>
        </Container>
    );
}
