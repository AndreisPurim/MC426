import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import React from 'react';
import Paper from '@mui/material/Paper';

export default function Download(props: any){
    return(
        <Grid container direction="column" justifyContent="center" alignItems="center" xs={12} spacing={2}>
            <Grid item>
            <ButtonGroup size="large" color="primary">
                <Button>QRCode</Button>
            </ButtonGroup>
            </Grid>
            <Grid item>
                Editing!
            </Grid>
        </Grid>
    )
}