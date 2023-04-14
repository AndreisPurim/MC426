import React from 'react';
import ReactDOM from 'react-dom/client';

import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar';
import './Source/index.css';

import Landing from './Pages/Landing/Landing.js';
import Login from './Pages/Login/Login.js';
import Profile from './Pages/Profile/Profile.js';
import ReadQRCode from './Pages/Profile/ReadQRCode.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';

import { dbExample } from './Source/example.js';

const getComplementaryColor = (color = '') => {
  const colorPart = color.slice(1);
  const ind = parseInt(colorPart, 16);
  let iter = ((1 << 4 * colorPart.length) - 1 - ind).toString(16);
  while (iter.length < colorPart.length) {
     iter = '0' + iter;
  };
  return '#' + iter;
};

const color = '#6096B4';

function Control(){
  const [alert, setAlert] = React.useState({open: false, text: "", severity: "success"});
  const [lightMode, setLightMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)')?'dark':'light');
  const [control, setControl] = React.useState({view: 'landing', formID: null, tempData: {}, user: null});
  const [example, setExample] = React.useState(dbExample());
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: color },
          secondary: { main: getComplementaryColor(color) },
          mode: lightMode,
        },
        typography: {
          fontFamily: 'sans-serif'
        }
      }),
    [color, lightMode],
  );
  function setView(newView){
    setControl({...control, view: newView})
  }
  function returnView(){
    switch(control.view){
      case 'login':   return <Login {...sendControl}/>
      case 'profile':    return <Profile {...sendControl}/>
      case 'readqr':    return <ReadQRCode {...sendControl}/>
      default: return <Landing {...sendControl}/>
    }
  }
  const closeAlert = () => {
    setAlert({...alert, open: false});
  }
  const sendControl = {control, setControl, setView, example, setExample, setAlert}
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Navbar {...sendControl} theme={theme} changeLightMode={() => setLightMode(lightMode === 'light'? 'dark': 'light')}/>
        {returnView()}
        <Snackbar open={alert.open} autoHideDuration={1000} onClose={closeAlert}>
          <Alert elevation={6} variant="filled" severity={alert.severity}>
            {alert.text}
          </Alert>
        </Snackbar>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Control />);
