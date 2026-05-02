import React from 'react';
import './App.css';
import Home from './pages/Home';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({

    typography: {
        h1: {
            fontSize: "72px"
        },
        h3: {
            fontSize: "22px",
            color: 'rgba(16, 16, 16, 0.6)',
        },
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },

    palette: {
        primary: {
            main: "#003e74",
        },
        text : {
            primary: "#101010"
        }
    },

});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Home/>
            </ThemeProvider>
        </div>
    );
}

export default App;
