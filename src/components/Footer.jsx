import React from 'react'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import CustomTheme from '../styles/theme'
import { useTheme } from '@emotion/react';
import { Whattsapp } from './Whattsapp';
import { Email } from './Email';

export default function Footer () {

  const theme = useTheme(CustomTheme);

  return (

    <Box sx={{ position: 'fixed', zindex: '999', bottom: '0', right: '0', left: '0', backgroundColor: '#fff', mx: '2rem', pb: '1rem'}}>
      <Divider sx={{my:'1rem'}}/>
      <Stack direction="row" justifyContent='space-around'>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Typography variant="body1" component="p" sx={{ color: theme.palette.text.secondary, fontSize: '1rem', letterSpacing: '0.1em', fontWeight: 700 }}>Claudia Vásquez </Typography>
          <Typography variant="body1" component="p" sx={{ color: theme.palette.text.secondary, fontSize: '1rem', fontWeight: 500 }}>Full Stack Developer</Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Whattsapp/>
          <Email/>
        </Box>
        <Box direction="row" justifyContent='center'>
          <Typography variant="body1" component="p" sx={{pb: "0.3rem", color: theme.palette.text.secondary, fontSize: '0.875rem', fontWeight: 700 }}>Follow Me</Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "flex-start"
            }}>
              <Button
                sx={{
                  p: 0,
                  m: 0,
                  lineHeight: 1.4,
                  color: theme.palette.text.primary,
                  display: 'block', textTransform: 'none',
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Linkedin
              </Button>
              <Button
                sx={{
                  p: 0,
                  m: 0,
                  lineHeight: 1.4,
                  color: theme.palette.text.primary,
                  display: 'block', textTransform: 'none',
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Github
              </Button>
          </Box>
        </Box>

      </Stack>


    </Box>
  )
}
