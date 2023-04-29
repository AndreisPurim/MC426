import React from 'react';


import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


export default function Login(props: JSX.IntrinsicAttributes & { example: { users: { [x: string]: any; }; }; setControl: (arg0: any) => void; control: any; setAlert: (arg0: { open: boolean; text: string; severity: string; }) => void; }) {
  const [card, setCard] = React.useState(0);
  const change = (event: any, newValue: React.SetStateAction<number>) => {
    setCard(newValue)
  }
  return (
    <Grid container direction="row" justifyContent="center" sx={{ pt: '3rem' }}>
      <Divider style={{ width: '100%', marginTop: '0.5rem' }} />
      <Grid item color="text.secondary">
        Check our code at <Link href="https://github.com/AndreisPurim/MC426">Github</Link>
      </Grid>
    </Grid>
  )
}