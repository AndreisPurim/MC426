import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LoginCard from './LoginCard.js';
import SignupCard from './SignupCard.js';


export default function Login(props){
  const [card, setCard] = React.useState(0);
  const change = (event, newValue) => {
    setCard(newValue)
  }
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Tabs value={card} onChange={change} indicatorColor="primary" textColor="primary">
            <Tab label="Login"/>
            <Tab label="Signup"/>
          </Tabs>
        </Grid>
        <Grid item xs={3} style={{width: '100%'}}>
          {!card?<LoginCard {...props}/>:<SignupCard {...props}/>}
        </Grid>
      </Grid>
    </Container>
  )
}