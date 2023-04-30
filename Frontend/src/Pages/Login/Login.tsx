import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LoginCard from './LoginCard.tsx';
import SignupCard from './SignupCard.tsx';


export default function Login(props: JSX.IntrinsicAttributes & { example: { users: { [x: string]: any; }; }; setExample: (arg0: any) => void; setControl: (arg0: any) => void; control: any; setAlert: (arg0: { open: boolean; text: string; severity: string; }) => void; }) {
  const [card, setCard] = React.useState(0);
  const change = (event: any, newValue: React.SetStateAction<number>) => {
    setCard(newValue)
  }
  return (
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item>
          <Tabs value={card} onChange={change} indicatorColor="primary" textColor="primary">
            <Tab label="Login" />
            <Tab label="Signup" />
          </Tabs>
        </Grid>
        <Grid item xs={3} style={{ width: '100%' }}>
          {!card ? <LoginCard {...props} /> : <SignupCard {...props} />}
        </Grid>
      </Grid>
    </Container>
  )
}