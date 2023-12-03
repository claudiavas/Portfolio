import React from 'react';
import { Typography, Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Email ({theme}) {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pb: '0.3rem' }}>
        <MailOutlineIcon sx={{ marginRight: '0.5rem' }} />
        <Typography
          component="a"
          href="mailto:claudia.vasquez.as@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}
        >
          claudia.vasquez.as@gmail.com
        </Typography>
      </Box>
  );
};