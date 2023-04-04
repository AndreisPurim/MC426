import React from 'react';

import Button from '@mui/material/Button';

export default function Login({control, setControl, setView}){
  return (
    <div>
      <h1>
        Login
      </h1>
      <Button onClick={()=>{setView('profile')}} variant="contained">Profile</Button>
    </div>
  )
}