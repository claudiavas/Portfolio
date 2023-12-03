import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  console.log("mode en ColorModeContext", mode);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    console.log("mode en ColorModeContext", mode);
  };

  // useEffect(() => {
  //   const localMode = localStorage.getItem('colorMode');
  //   setMode(localMode);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('colorMode', mode);
  // }, [mode]);

  // useEffect(() => {
  //   // Aplicar el cambio de tema después de que el estado se haya actualizado
  //   const theme = createTheme({
  //     palette: {
  //       mode: mode === undefined ? 'light' : mode,
  //       // Otras configuraciones de tema según sea necesario
  //     },
  //   });

  //   // Aplicar el tema
  //   document.documentElement.style.setProperty('--primary-main', theme.palette.primary.main);
  //   document.documentElement.style.setProperty('--mode', theme.palette.mode);
  // }, [mode]);
  



  //   useEffect(() => {
  //     console.log("theme en ColorModeContext", theme);
  //   }, [theme]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};