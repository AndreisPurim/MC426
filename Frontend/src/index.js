import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import './Source/index.css';

import Landing from './Pages/Landing/Landing.js';
import Login from './Pages/Login/Login.js';
import Profile from './Pages/Profile/Profile.js';
import Navbar from './Components/Navbar.js';

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
  const [lightMode, setLightMode] = React.useState(useMediaQuery('(prefers-color-scheme: dark)')?'dark':'light');
  const [control, setControl] = React.useState({view: 'landing', user: null});
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
      default: return <Landing {...sendControl}/>
    }
  }
  const sendControl = {control, setControl, setView}
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar {...sendControl} theme={theme} changeLightMode={() => setLightMode(lightMode === 'light'? 'dark': 'light')}/>
      {returnView()}
    </ThemeProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Control />);
