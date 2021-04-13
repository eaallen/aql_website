import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';

export const MaterialContext = React.createContext()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#ffea00',
    },
  },
});

export default function Material(props) {
    return <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
}