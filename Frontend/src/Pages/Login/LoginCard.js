import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login(props){
  const [user, setUser] = React.useState({
    show: false,
    username: '',
    password: '',
  })
  const changeUsername = (event) => {
    setUser({...user, username: event.target.value});
  };
  const changePassword = (event) => {
    setUser({...user, password: event.target.value});
  };
  const connect = () => {
    if(user.username in props.example.users && props.example.users[user.username].password === user.password){
      props.setControl({...props.control, user: props.example.users[user.username], view: 'profile'})
      props.setAlert({open: true, text: "Connected", severity: "success"})
    }
    else{
      props.setAlert({open: true, text: "Login failed", severity: "error"})
    }  
}

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <TextField fullWidth label="Username" value={user.username} onChange={changeUsername} />
        <FormControl fullWidth>
          <InputLabel>Password</InputLabel>
          <Input type={user.show ? 'text' : 'password'} value={user.password} onChange={changePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setUser({...user, show: true})} onMouseDown={() => setUser({...user, show: false})}>
                  {user.show ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </CardContent>
      <CardActions>
          <Button disabled={user.username === '' || user.password === ''} size="small" color="primary" onClick={connect}>
            Login
          </Button>
      </CardActions>
    </Card>
  )
}