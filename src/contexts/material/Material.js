import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

export const MaterialContext = React.createContext()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4682b4',
    },
    secondary: {
      main: '#90caf9',
    },
  },
});

export default function Material(props) {
    return <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
}