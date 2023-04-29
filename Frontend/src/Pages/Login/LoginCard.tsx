import axios from 'axios';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginCard(props: any) {
  const [user, setUser] = React.useState({
    show: false,
    username: '',
    password: '',
  })
  const changeUsername = (event: { target: { value: any; }; }) => {
    setUser({ ...user, username: event.target.value });
  };
  const changePassword = (event: { target: { value: any; }; }) => {
    setUser({ ...user, password: event.target.value });
  };
  const connect = () => {
    if(user.username=='noback'){
      props.setControl({ ...props.control, user: props.example.users['andreis'], view: 'profile' })
      props.setAlert({ open: true, text: "Connected", severity: "success" })
      return
    }
    axios({
        method: 'get',
        url: 'http://localhost:8000/users',
    })
    .then(function (response){
      const userInfo = response.data.filter(function (e:any){return e.nome === user.username})[0]
      if(userInfo && userInfo.senha == user.password){
        props.setAlert({ open: true, text: "Connected", severity: "success" })
        // Uses Andreis' profile as a mock example of the profile page.
        props.setControl({ ...props.control, user: props.example.users['andreis'], view: 'profile' })
      }
      else if(userInfo){
        props.setAlert({ open: true, text: "Wrong Password", severity: "error" })
      }
      else{
        props.setAlert({ open: true, text: "User not found", severity: "error" })
      }
    })
    .catch(function (error){
      props.setAlert({ open: true, text: "Login failed ("+error.name+")", severity: "error" })
    });
  }

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Login
        </Typography>
        <TextField fullWidth variant="outlined" sx={{pb:'1rem'}} label="Username" value={user.username} onChange={changeUsername} />
        <FormControl fullWidth variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput label="Password" type={user.show ? 'text' : 'password'} value={user.password} onChange={changePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => setUser({ ...user, show: true })} onMouseDown={() => setUser({ ...user, show: false })}>
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