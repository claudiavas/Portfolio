import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CustomTheme } from '../styles/theme';
import { useTheme } from '@emotion/react';

export default function Hero() {

  const theme = useTheme(CustomTheme);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexShrink: 0,
        flexWrap: "wrap",
        mt: "8rem",
        mb: "8rem",
        pl: "1rem",
        pr: "1rem",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <Typography variant="h4" component="span" sx={{color: theme.palette.text.secondary, fontWeight: 700}}>Hi </Typography>
          <Typography variant="h4" component="span" sx={{color: theme.palette.text.secondary, fontWeight: 700}}>🖐</Typography>
          <Typography variant="h4" component="span" sx={{color: theme.palette.text.secondary, fontWeight: 700}}>,</Typography>
        </Box>
        <Typography variant="h4" component="span" sx={{color: theme.palette.text.secondary, fontWeight: 700}}>My name is </Typography>
        <Typography variant="h4" component="span" sx={{color: theme.palette.text.secondary, fontWeight: 700}}>Claudia Vásquez.</Typography>
        <Typography variant="h4" component="span" sx={{color: theme.palette.text.secondary, fontWeight: 700}}>I build digital experiences.</Typography>
      </Box>
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={249}
        height={249}
        priority={true}
        style={{
          borderRadius: "50%",
          background: "linear-gradient(to right, #8000FF, #00FDEE)",
          width: "200px",
          height: "200px",
          padding: "9px",
        }}
      />
    </Box>
  );
}




// .text_hero1 {

// }

// .text_hero2 {
//     background: var(--gradient - heading, linear - gradient(90deg,#00FDEE - 2.06 %, #8F00FF 100 %));
//     background - clip: text;
//     -webkit - background - clip: text;
//     -webkit - text - fill - color: transparent;
//     font - family: "Poppins", sans - serif;
//     font - size: 2.5rem;
//     font - style: normal;
//     font - weight: 700;
//     line - height: 120 %;

// }



// @keyframes wavingAnimation {
//     0 %, 100 % {
//         transform: rotate(0deg);
//     }
//     50 % {
//         transform: rotate(30deg);
//     }
// }
  
// .waving {
//     animation: wavingAnimation 0.3s 7;
//     display: inline - block;
// }