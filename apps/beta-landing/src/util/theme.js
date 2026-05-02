import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#ffd400',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        online: {
            main: 'green'
        },
        textPrimary: {
            main: 'white'
        },
    },
});

export default {
    muiTheme: muiTheme
}
