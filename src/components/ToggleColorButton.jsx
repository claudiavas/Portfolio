// ToggleColorButton.js
import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../context/ColorModeContext';
import CustomTheme from '../styles/theme';
import { useTheme } from '@emotion/react';

const ToggleColorButton = () => {
  
  const theme = useTheme(CustomTheme);
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  console.log('ToggleColorButton mode: ', mode);
  
  return (
    <IconButton onClick={toggleColorMode}
      sx={{ 
        color: theme.palette.text.primary,
        display: 'block', textTransform: 'none',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          color: theme.palette.primary.main,
          transform: 'scale(1.2)',
          backgroundColor: 'transparent'},
        '&:click': {
          // color: theme.palette.primary.main,
          // transform: 'scale(1.2)',
          backgroundColor: 'transparent',
        }
        }}>
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ToggleColorButton;