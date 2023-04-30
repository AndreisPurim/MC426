import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { QrReader } from 'react-qr-reader';

export default function ReadQRCode(props: { setView: (arg0: string) => void; }){
    const [data,setData] = React.useState(null);
    const onNewScanResult = (decodedText: React.SetStateAction<null>, decodedResult: any) => {
        //let qrdata = yaml.load(result.getText());
        setData(decodedText);
    };
  const retry=()=>{setData(null)};
  const back=()=>{props.setView('user')};
  return (
    <Grid container xs={12} spacing={1} style={{textAlign:'center'}}>
      <Grid item xs={12} style={{margin:"auto"}}>
        <Button style={{margin:"auto"}} variant="outlined" color="primary" onClick={back} startIcon={<ChevronLeftIcon />}>
          Return
        </Button>
      </Grid>
      <Grid item xs={10} style={{margin:"auto"}}>
        <Paper elevation={12}>
          <Grid container xs={12} direction="column" justifyContent="center" alignItems="stretch">
            <Typography variant="overline" display="block">
              {data?'Detected':'Not Detected'}. {data?<Link component="button" variant="overline" onClick={retry}>Retry?</Link>:null}
            </Typography>
            <QrReader
              constraints={{facingMode: 'user'}}
              onResult={(result:any, error:any) => {
                if(result) {
                  setData(result.text);
                }
              }}
              containerStyle={{width:'50%', margin:'auto'}}
            />
            <Grid item xs={12}>
              <Typography variant="overline" display="block">
                {data?data:null}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}