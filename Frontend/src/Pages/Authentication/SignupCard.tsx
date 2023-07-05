import axios from "axios";
import React, {useEffect} from "react";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import {OutlinedInput} from "@mui/material";

type User = {
	username: string;
	started_username: boolean;
	email: string;
	password: string;
	started_password: boolean;
	showPassword: boolean;
	checkPassword: string;
};

export default function SignupCard(props: {
	setAlert: (arg0: {open: boolean; text: string; severity: string}) => void;
	setView: (arg0: string) => void;
	onSignup: (arg0: any, arg1: "login" | "signup") => void;
}) {
	const [user, setUser] = React.useState({
		username: "",
		started_username: false,
		email: "",
		password: "",
		started_password: false,
		showPassword: false,
		checkPassword: "",
	} as User);

	const [isConnecting, setConnection] = React.useState(false);

	useEffect(() => {
		if (isConnecting) {
			props.onSignup(user, "signup");
		}
	}, [isConnecting]);

	const changeProperty = (event: {target: {value: any}}, property: keyof User) => {
		setUser({...user, [property]: event.target.value});
	};
	
	function changeVisibility(state: boolean) {
		setUser({...user, showPassword: state});
	}
	function invalidEmail(){
		//eslint-disable-next-line
		const regex = /^(?![\.\-_])[a-zA-Z0-9\.\-_]{3,}(?<![\.\-_])@[a-zA-Z0-9]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
		return (user.email.length>0)&&!(regex.test(user.email))
	}
	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Create Account
				</Typography>
				<TextField
					sx={{pb: "1rem"}}
					fullWidth
					label="Username"
					value={user.username}
					inputProps={{ "data-testid": "username" }}
					onChange={(event) => changeProperty(event, "username")}
				/>
				<TextField
					sx={{pb: "1rem"}}
					fullWidth
					label="Mail"
					error={invalidEmail()}
					helperText={user.email===""?null:invalidEmail()?"Invalid Email":"Valid Email"}
					value={user.email}
					inputProps={{ "data-testid": "email" }}
					onChange={(event) => changeProperty(event, "email")}
				/>
				<FormControl fullWidth sx={{pb: "1rem"}}>
					<InputLabel>Password</InputLabel>
					<OutlinedInput
						label="Password"
						inputProps={{ "data-testid": "password1" }}
						type={user.showPassword ? "text" : "password"}
						value={user.password}
						onChange={(event) => changeProperty(event, "password")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton onClick={() => changeVisibility(!user.showPassword)}>
									{user.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
				<FormControl
					fullWidth
					error={
						user.password !== "" && user.checkPassword !== user.password && user.checkPassword !== ""
					}
				>
					<InputLabel>Repeat Password</InputLabel>
					<OutlinedInput
						label="Repeat Password"
						type={user.showPassword ? "text" : "password"}
						value={user.checkPassword}
						inputProps={{ "data-testid": "password2" }}
						onChange={(event) => changeProperty(event, "checkPassword")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton onClick={() => changeVisibility(!user.showPassword)}>
									{user.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{user.password === ""?<FormHelperText>Missing password</FormHelperText>:user.checkPassword !== user.password && user.checkPassword !== ""?<FormHelperText error>Password doesnt match</FormHelperText>:null}
				</FormControl>
				
			</CardContent>
			<CardActions sx={{
						justifyContent: "end",
					}}>

				<Button
					size="medium"
					color="secondary"
					variant="outlined"
					onClick={() => props.setView("landing")}
					sx={{
						margin: "8px",
						justifyContent: "end",
					}}
				>
					Cancel
				</Button>
				<Button
					disabled={user.username === "" || user.email === "" || invalidEmail() || user.password === "" || user.password !== user.checkPassword}
					size="medium"
					color="primary"
					variant="outlined"
					data-testid="create"
					onClick={() => setConnection(!isConnecting)}
					sx={{
						margin: "8px",
						justifyContent: "end",
					}}
				>
					Create
				</Button>
			</CardActions>
		</Card>
	);
}
