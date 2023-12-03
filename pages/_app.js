import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Cambia este color según tus preferencias
    },
    secondary: {
      main: '#ff4081', // Cambia este color según tus preferencias
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Claudia Vásquez</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Portfolio Claudia Vasquez Full Stack Developer"/>
        <meta name="author" content="Claudia Vasquez"/>
        <meta name="keywords" content="portfolio, full stack developer, nextjs developer, react developer, frontend developer"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Container maxWidth="sm">
            <Header/>
            <Component {...pageProps} />
            {/* <Footer/> */}
          </Container>
      </ThemeProvider>
    </>
  );
}