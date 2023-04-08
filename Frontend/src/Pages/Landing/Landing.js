import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Hidden from '@mui/material/Hidden';
import CardActionArea from '@mui/material/CardActionArea';


export default function LangingPage(props) {
  return (
    <div>
      <main style={{textAlign: 'start'}}>
        <div>
            <br/>
          <Paper>
            <Grid container>
              <Grid item md={6}>
                <div >
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    MC426
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    We need to format this page
                  </Typography>
                  <div>
                    {props.control.user? null:
                      <Button variant="contained" color="primary" onClick={()=>props.setControl({...props.control, view: 'login'})}>
                        Login
                      </Button>
                    }
                  </div> 
                </div>
              </Grid>
            </Grid>
          </Paper>
           <br />
           <div>
           <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card>
                    <div>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          ABC
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          Slogan
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum aliquet faucibus. Donec leo libero, dignissim ut leo a, faucibus vestibulum eros. Donec consequat ullamcorper enim, euismod efficitur dui maximus a. Praesent auctor molestie tincidunt. Sed libero velit, iaculis et velit eu, ullamcorper mattis diam. Proin lorem enim, malesuada eu fringilla nec, pellentesque et lectus. Morbi lorem elit, accumsan nec sem quis, pharetra vestibulum justo. Nunc quis turpis sagittis, accumsan risus euismod, ultricies est. Duis lacinia dignissim massa eget consectetur. Phasellus et dolor convallis tortor mollis elementum. Fusce nec elit eget erat scelerisque facilisis non et ipsum
                        </Typography>
                       
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card>
                    <div>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          BCD
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          Frase
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum aliquet faucibus. Donec leo libero, dignissim ut leo a, faucibus vestibulum eros. Donec consequat ullamcorper enim, euismod efficitur dui maximus a. Praesent auctor molestie tincidunt. Sed libero velit, iaculis et velit eu, ullamcorper mattis diam. Proin lorem enim, malesuada eu fringilla nec, pellentesque et lectus. Morbi lorem elit, accumsan nec sem quis, pharetra vestibulum justo. Nunc quis turpis sagittis, accumsan risus euismod, ultricies est. Duis lacinia dignissim massa eget consectetur. Phasellus et dolor convallis tortor mollis elementum. Fusce nec elit eget erat scelerisque facilisis non et ipsum
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
           </div>
        </div>
      </main>      
    </div>
  );
}
