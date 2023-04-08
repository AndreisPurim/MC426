import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/system';
import Select from '@mui/material/Select';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';


export default function TitleToolbar(props) {
    const [openHelp, setOpenHelp] = React.useState(false);
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const openMenu=(event)=>{setMenuAnchor(event.currentTarget)}
    const closeMenu=()=>{setMenuAnchor(null)}
    const goProfile=()=>{props.setControl({...props.control, view:'profile', formID: null, tempData: {}})}
    const logout=()=>{props.setControl({view: 'landing', formID: null, tempData: {}, user: null})}
    function loginButton(){
        if(!props.control.user)
            return <Button variant="outlined" onClick={()=>props.setView('login')}>Login</Button>
        else
            return (
                <React.Fragment>
                    <Button variant="outlined" startIcon={<AccountCircleIcon />} onClick={openMenu}>{props.control.user.username}</Button>
                    <Menu open={Boolean(menuAnchor)} onClose={closeMenu} anchorEl={menuAnchor} anchorOrigin={{vertical: 'top', horizontal: 'right'}} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                        <MenuItem onClick={goProfile}>Profile</MenuItem>
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                </React.Fragment>
            )
    }
    function formButton(){
        if(props.control.user)
            return <Button variant="outlined" onClick={()=>props.setView('profile')}>Forms</Button>
    }
    return(
        <Toolbar sx={{borderBottom: '1px solid', borderColor:'theme.palette.divider'}}>
            <Dialog open={openHelp} onClose={() => {setOpenHelp(false)}}>
                <DialogTitle>{"About"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus quam dapibus massa viverra, sed convallis dolor bibendum. Morbi ornare eros vel orci porttitor, sit amet molestie nisl varius. Curabitur velit dolor, egestas quis ex eu, commodo mattis eros. In tortor magna, vulputate maximus convallis sit amet, suscipit in mauris. Praesent tempor eleifend enim ut convallis. Nam vehicula est vitae turpis fringilla vestibulum a lacinia sem. Fusce varius vulputate metus, malesuada sollicitudin arcu pulvinar id. Nam eleifend ornare erat, eu lacinia nibh iaculis ac. Donec sollicitudin risus in orci lacinia accumsan. Proin vulputate dictum viverra.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={6} container  direction="row" justifyContent="flex-start" alignItems="center">
                    <Button size="small" onClick={() => {setOpenHelp(true)}}>Ajuda</Button>
                </Grid>
                <Grid item xs={2} container direction="row" justifyContent="center" alignItems="center" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Typography component="h2" variant="h5" color="inherit" align="center" noWrap >
                        MC426
                    </Typography>
                </Grid>
                <Grid item xs={6} container  direction="row" justifyContent="flex-end" alignItems="center">
                    <IconButton onClick={props.changeLightMode}>
                        {props.theme==='light'?<Brightness2Icon />:<WbSunnyIcon />}
                    </IconButton>
                    <IconButton href="" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </IconButton>
                    <Select size="small" value="pt">
                        <MenuItem value="pt">PT</MenuItem>
                    </Select>
                    {formButton()}
                    {' '}
                    {loginButton()}
                </Grid>
            </Grid>
        </Toolbar>
    )
}