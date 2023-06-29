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

export default function LoginCard(props: any) {
	const [user, setUser] = React.useState({
		show: false,
		username: "",
		password: "",
	});

	const [isConnecting, setConnection] = React.useState(false);

	useEffect(() => {
		if (isConnecting) {
			props.onLogin(user, "login");
		}
	}, [isConnecting]);

	const changeUsername = (event: {target: {value: any}}) => {
		setUser({...user, username: event.target.value});
	};
	const changePassword = (event: {target: {value: any}}) => {
		setUser({...user, password: event.target.value});
	};

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
					label="Username"
					value={user.username}
					onChange={changeUsername}
				/>
				<FormControl fullWidth variant="outlined">
					<InputLabel>Password</InputLabel>
					<OutlinedInput
						label="Password"
						type={user.show ? "text" : "password"}
						value={user.password}
						onChange={changePassword}
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
					disabled={user.username === "" || user.password === ""}
					size="medium"
					variant="outlined"
					color="primary"
					onClick={() => setConnection(!isConnecting)}
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
