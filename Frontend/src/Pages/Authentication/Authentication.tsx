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
		auth: "login" | "signup";
		example: {users: {[x: string]: any}};
		setControl: (arg0: any) => void;
		setView: (arg0: string) => void;
		control: any;
		setAlert: (arg0: {open: boolean; text: string; severity: string}) => void;
	}
) {
	const [card, setCard] = React.useState(props.auth === "login" ? 0 : 1);
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

	const handleLogin = (user: any, force = false) => {
		axios
			.post(
				"http://localhost:8000/usuarios/login",
				{username: user.email, password: user.password},
				{headers: {"Content-Type": "application/x-www-form-urlencoded", "Access-Control-Allow-Origin": "*"}}
			)
			.then(function (response) {
				user = {...user, ...response.data};
				axios.get("http://localhost:8000/usuarios").then(function (res) {
					const data = res.data.find((element: any) => element.email === user.email);
					props.setAlert({open: true, text: "Connected", severity: "success"});
					props.setControl({...props.control, user: {...user, ...data}, view: "profile", users: res.data});
				});
			})
			.catch(function (error) {
				props.setAlert({open: true, text: "Login failed (" + error.name + ")", severity: "error"});
			});
	};

	const handleSignup = (user: any) => {
		axios
			.post(
				"http://localhost:8000/usuarios",
				{nome: user.username, email: user.email, password: user.password},
				{headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"}}
			)
			.then(function (response) {
				props.setAlert({open: true, text: "Signup Sucessful (ID " + response.data.id + ")", severity: "success"});
				handleLogin(user);
			})
			.catch(function (error) {
				props.setAlert({open: true, text: "Signup failed (" + error.name + ")", severity: "error"});
			});
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
