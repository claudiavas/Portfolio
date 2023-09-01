import '@/styles/globals.css'
import Head from 'next/head'
import { Container } from '@mui/material'

export default function App({ Component, pageProps }) {
 return (
  <>
  <Head>
    <title>Claudia Vásquez</title>
    <meta name="portfolio" content="Portfolio Claudia Vasquez Full Stack Developer" />
    <meta author="Claudia Vasquez" />
    <meta name="keywords" content="portfolio, full stack developer, nextjs, react, javascript, frontend developer, backend developer" />
    <link rel="icon" href="/favicon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>

  </Head>
  <Container maxwidth="sm">
    <Component {...pageProps} />  
  </Container>
 </>
 )
}
