import React from 'react';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function SignupCard(props: { example: { users: any; }; setAlert: (arg0: { open: boolean; text: string; severity: string; }) => void; setExample: (arg0: any) => void; }) {
    const [user, setUser] = React.useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        showPassword: false,
        checkPassword: '',
    });
    const changeUsername = (event: { target: { value: any; }; }) => {
        setUser({ ...user, username: event.target.value });
    };
    const changeEmail = (event: { target: { value: any; }; }) => {
        setUser({ ...user, email: event.target.value });
    };
    const changePassword = (event: { target: { value: any; }; }) => {
        setUser({ ...user, password: event.target.value });
    };
    const changeCheckPassword = (event: { target: { value: any; }; }) => {
        setUser({ ...user, checkPassword: event.target.value });
    };
    function changeVisibility(state: boolean) {
        setUser({ ...user, showPassword: state });
    };
    const connect = () => {
        let newUsers = props.example.users;
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
        }
    }
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Create Account
                </Typography>
                <TextField fullWidth label="Username" value={user.username} onChange={changeUsername} />
                <TextField fullWidth label="Mail" value={user.email} onChange={changeEmail} />
                <FormControl fullWidth>
                    <InputLabel>Password</InputLabel>
                    <Input
                        type={user.showPassword ? 'text' : 'password'}
                        value={user.password}
                        onChange={changePassword}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => changeVisibility(true)}
                                    onMouseDown={() => changeVisibility(false)}
                                >
                                    {user.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl fullWidth /*style={{color:user.checkPassword===user.password&user.checkPassword!==''? "green":null}}*/ error={user.checkPassword !== user.password && user.checkPassword !== ''}>
                    <InputLabel>Repeat Password</InputLabel>
                    <Input
                        type={'password'}
                        value={user.checkPassword}
                        onChange={changeCheckPassword}
                    />
                </FormControl>
            </CardContent>
            <CardActions>
                <Button disabled={user.firstname === '' || user.lastname === '' || user.username === '' || user.email === '' || user.password === '' || user.password !== user.checkPassword} size="small" color="primary" onClick={connect}>
                    Create
                </Button>
            </CardActions>
        </Card>
    )
}