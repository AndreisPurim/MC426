import React from "react";
import ReactDOM from "react-dom/client";

import Alert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Snackbar from "@mui/material/Snackbar";
import "./Source/index.css";

import Landing from "./Pages/Landing/Landing";
import Authentication from "./Pages/Authentication/Authentication.tsx";
import Profile from "./Pages/Profile/Profile";
import ReadQRCode from "./Pages/Profile/ReadQRCode";
import Creator from "./Pages/Creator/Creator";
import Form from "./Pages/Form/Form";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import {dbExample} from "./Source/example.ts";
import {Theme} from "@emotion/react";

const getComplementaryColor = (color = "") => {
    const colorPart = color.slice(1);
    const ind = parseInt(colorPart, 16);
    let iter = ((1 << (4 * colorPart.length)) - 1 - ind).toString(16);
    while (iter.length < colorPart.length) {
        iter = "0" + iter;
    }
    return "#" + iter;
};

const color = "#6096B4";

function Control() {
    const [alert, setAlert] = React.useState({
        open: false,
        text: "",
        severity: "success",
    } as any);
    const [lightMode, setLightMode] = React.useState(
        (useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light") as "dark" | "light"
    );
    const [control, setControl] = React.useState({
        view: "landing",
        formID: null,
        tempData: {},
        user: null,
    });
    const [example, setExample] = React.useState(dbExample());
    const theme: Theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {main: color},
                    secondary: {main: getComplementaryColor(color)},
                    mode: lightMode,
                },
                typography: {
                    fontFamily: "sans-serif",
                },
            }),
        [color, lightMode]
    );
    function setView(newView: any) {
        setControl({...control, view: newView});
    }
    function returnView() {
        switch (control.view) {
            case "login":
                return <Authentication auth="login" {...sendControl} />;
            case "signup":
                return <Authentication auth="signup" {...sendControl} />;
            case "profile":
                return <Profile {...sendControl} />;
            case "readqr":
                return <ReadQRCode {...sendControl} />;
            case "form":
                return <Form {...sendControl} />;
            case "creator":
                return <Creator {...sendControl} />;
            default:
                return <Landing {...sendControl} />;
        }
    }
    const closeAlert = () => {
        setAlert({...alert, open: false});
    };
    const sendControl: any = {
        control,
        setControl,
        setView,
        example,
        setExample,
        setAlert,
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Navbar {...sendControl} theme={theme} changeLightMode={() => setLightMode(lightMode === "light" ? "dark" : "light")} />
                {returnView()}
                <Snackbar open={alert.open} autoHideDuration={1000} onClose={closeAlert}>
                    <Alert elevation={6} variant="filled" severity={alert.severity}>
                        {alert.text}
                    </Alert>
                </Snackbar>
                <Footer />
            </Container>
        </ThemeProvider>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<Control />);
