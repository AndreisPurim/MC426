import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import QRreader from '../../Components/QRreader.js';

export default function ReadQRCode(props){
    const [data,setData] = React.useState(null);
    const onNewScanResult = (decodedText, decodedResult) => {
        //let qrdata = yaml.load(result.getText());
        setData(decodedText);
    };
  const retry=()=>{setData(null)};
  const back=()=>{props.setView('user')};
  return (
    <Grid container xs={12} spacing={1} direction="column" justifyContent="center" alignItems="center" style={{marginTop: '2rem' }}>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" onClick={back} startIcon={<ChevronLeftIcon />}>
          Return
        </Button>
      </Grid> 
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Grid xs={12} container direction="column" justifyContent="center" alignItems="center" style={{paddingBottom:'1rem'}}>
            <Grid item xs={12}>
                <QRreader
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="overline" display="block">
                {data?'Detected':'Not Detected'}. {data?<Link component="button" variant="overline" onClick={retry}>Retry?</Link>:null}
              </Typography>
            </Grid>
            {!data?null:
              <React.Fragment>
                {data}
              </React.Fragment>
            }
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}