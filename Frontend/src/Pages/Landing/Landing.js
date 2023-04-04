import React from 'react';

import Button from '@mui/material/Button';

export default function Landing({control, setControl, setView}){
  return (
    <div>
      <h1>
        Landing
      </h1>
      <Button onClick={()=>{setView('login')}} variant="contained">Login</Button>
    </div>
  )
}