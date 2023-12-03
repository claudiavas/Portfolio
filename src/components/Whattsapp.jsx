import React from 'react';
import { Typography, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Whattsapp ({theme}) {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', pb: '0.3rem' }}>
        <WhatsAppIcon sx={{ marginRight: '0.5rem' }} />
        <Typography
          component="a"
          href="https://wa.me/34644469610"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.secondary, fontSize: '0.875rem', fontWeight: 500, textDecoration: 'none' }}
        >
          +34 644 469 610
        </Typography>
      </Box>
  );
};
