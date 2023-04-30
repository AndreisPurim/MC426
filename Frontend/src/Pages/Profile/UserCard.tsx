import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from 'react';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';


import CreateIcon from '@mui/icons-material/Create';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';


export default function UserCard(props: { control: { user: { favorites: { length: string; }; created: { length: string; }; avatar: string | undefined; username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; admin: any; joined: string; last_seen: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; chips: any[]; }; }; }){
  function getChipIcon(chip: { type: any; }){
    switch(chip.type){
      case 'work': return <WorkOutlineIcon /> 
      case 'study': return <SchoolIcon /> 
      case 'favorites': return <FavoriteBorderIcon /> 
      case 'created': return <CreateIcon /> 
      default: return <HelpOutlineIcon /> 
    }
  }
  function getChipLabel(chip: { type: any; label: any; }){
    switch(chip.type){
      case 'favorites': return props.control.user.favorites.length + ' Favorites'
      case 'created': return props.control.user.created.length + ' Created'
      default: return chip.label
    }
  }
  function getChipColor(chip: { type: string; }){
    if(chip.type==='created')
      return 'secondary'
    return 'primary'
  }
  return (
    <Grid item xs={7} style={{width: '100%'}}>
      <Paper elevation={3} style={{padding:'1rem'}}>
        <Grid container direction="column" justifyContent="flex-start" alignItems="stretch">
          <Grid xs={12} spacing={2} item container direction="row" justifyContent="flex-start" alignItems="stretch">
            <Grid item xs={2}>
              <Avatar variant="rounded" alt="Avatar" src={props.control.user.avatar} style={{width:'100%',height:'100%'}}/>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4">
                {props.control.user.username}
              </Typography>
              <Typography variant="subtitle1">
                {props.control.user.description}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="overline" component="h1">
                {props.control.user.admin?'Admin':'User'}
              </Typography>
              <Typography variant="caption" component="h1">
                Signed up in {props.control.user.joined.substring(0,4)}
              </Typography>
              <Typography variant="caption" component="h1">
                Last access {new Date().toISOString().slice(0, 10)===props.control.user.last_seen?'today':props.control.user.last_seen}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{paddingTop:'1rem'}}>
            {props.control.user.chips.map((chip) => (
               <Chip key={chip.label} icon={getChipIcon(chip)} variant="outlined" label={getChipLabel(chip)} color={getChipColor(chip)}/>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}