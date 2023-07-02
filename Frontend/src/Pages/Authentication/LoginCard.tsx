import axios from "axios";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import React, {useEffect} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {FormHelperText} from "@mui/material";

export default function LoginCard(props: any) {
	const [user, setUser] = React.useState({
		show: false,
		email: "",
		password: "",
	});

	const [isConnecting, setConnection] = React.useState(false);

	useEffect(() => {
		if (isConnecting) {
			props.onLogin(user, "login");
		}
	}, [isConnecting]);

	const changeEmail = (event: {target: {value: any}}) => {
		setUser({...user, email: event.target.value});
	};
	const changePassword = (event: {target: {value: any}}) => {
		setUser({...user, password: event.target.value});
	};

	function invalidEmail() {
		//eslint-disable-next-line
		const regex = /^(?![\.\-_])[a-zA-Z0-9\.\-_]{3,}(?<![\.\-_])@[a-zA-Z0-9]+\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
		return user.email.length > 0 && !regex.test(user.email);
	}

	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					Login
				</Typography>
				<TextField
					fullWidth
					variant="outlined"
					sx={{pb: "1rem"}}
					value={user.email}
					label="Mail"
					error={invalidEmail()}
					helperText={user.email === "" ? null : invalidEmail() ? "Invalid Email" : "Valid Email"}
					inputProps={{"data-testid": "email"}}
					onChange={changeEmail}
				/>
				<FormControl fullWidth variant="outlined" error={user.password === ""}>
					<InputLabel>Password</InputLabel>
					<OutlinedInput
						label="Password"
						type={user.show ? "text" : "password"}
						value={user.password}
						onChange={changePassword}
						inputProps={{"data-testid": "password"}}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={() => setUser({...user, show: true})}
									onMouseDown={() => setUser({...user, show: false})}
								>
									{user.show ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{user.password === "" ? <FormHelperText>Missing password</FormHelperText> : null}
				</FormControl>
			</CardContent>
			<CardActions
				sx={{
					justifyContent: "end",
				}}
			>
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
					disabled={user.email === "" || user.password === "" || invalidEmail()}
					size="medium"
					variant="outlined"
					color="primary"
					onClick={() => setConnection(!isConnecting)}
					data-testid="login"
					sx={{
						margin: "8px",
						justifyContent: "end",
					}}
				>
					Login
				</Button>
			</CardActions>
		</Card>
	);
}
