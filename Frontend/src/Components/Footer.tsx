import React from 'react';


import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';


export default function Login(){
  return (
    <Grid container direction="row" justifyContent="center" sx={{ pt: '3rem' }}>
      <Divider style={{ width: '100%', marginTop: '0.5rem' }} />
      <Grid item color="text.secondary">
        Check our code at <Link href="https://github.com/AndreisPurim/MC426">Github</Link>
      </Grid>
    </Grid>
  )
}