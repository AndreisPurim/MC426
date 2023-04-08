import Button from '@mui/material/Button';
import CropFreeIcon from '@mui/icons-material/CropFree';
import Grid from '@mui/material/Grid';
import React from 'react';

import UserCard from './UserCard.js';

export default function Profile(props){
  const goCreate=()=>{
    props.setControl({...props.control, tempData: {}, formID: null, view:'creator'})
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2} style={{marginTop: '2rem', }}>
      <UserCard {...props}/>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" startIcon={<CropFreeIcon />} onClick={()=>props.setView('readqr')}>
          Read QRCode
        </Button>
      </Grid>
      {!props.control.user.admin? null:
        <Grid item={true} xs={12}>
          <Button onClick={goCreate} variant="contained" size="large" color="secondary">
            Create Forms
          </Button>
        </Grid>
      }
    </Grid>
  )
}