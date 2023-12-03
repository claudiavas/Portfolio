import React, { useContext } from "react";
import {CssBaseline, Container, ThemeProvider, createTheme } from "@mui/material";
// import { ColorModeContext, ColorModeProvider } from "../context/ColorModeContext";
import { CustomTheme } from "../styles/theme";

export default function App({ Component, pageProps }) {
  const initialTheme = createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      mode: 'light',
      // Otras configuraciones de tema según sea necesario
    },
  });

  const theme = CustomTheme();
  // const { theme } = useContext(ColorModeContext);

  return (
    // <ThemeProvider theme={initialTheme}>
    //   <ColorModeProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
    //   </ColorModeProvider>
    // </ThemeProvider>
  );
}