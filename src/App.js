import React from 'react';
import './App.scss';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Home from "./components/Home/Home";

function App() {
    const palette = {
        palette: {
            primary: {main: '#ffffff', contrastText: '#212121'},
            secondary: {main: '#80CBC4'}
        }
    };
    const themeName = 'White Monte Carlo Little Penguin';
    const theme = createMuiTheme(palette, themeName);

    return (
        <MuiThemeProvider theme={theme}>
            <Home/>
        </MuiThemeProvider>
    );
}

export default App;
