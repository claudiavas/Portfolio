import { useContext } from 'react';
import { createTheme } from '@mui/material/styles';
import { ColorModeContext } from '../context/ColorModeContext';

export default function CustomTheme () {
  // const { mode } = useContext(ColorModeContext);
  // console.log("mode en CustomTheme", mode);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8F00FF',
      },
      secondary: {
        main: '#00FDEE',
      },
      typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        h1: {
          fontWeight: 100,
          fontSize: '0.5rem',
          lineHeight: 1.167,
          letterSpacing: '-0.01562em',
        },
        h2: {
          fontWeight: 400,
          fontSize: '1.25rem',
          lineHeight: 1.2,
          letterSpacing: '-0.00833em',
        },
      },
      // background: {
      //   default: mode === 'light' ? '#fff' : '#000',
      // },
      // text: {
      //   primary: mode === 'light' ? '#42446E' : '#fff',
      //   secondary: mode === 'light' ? '#666666' : '#fff',
      // },
      // mode: mode || 'light',
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          TouchRippleProps: {
            center: true,
            style: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            },
          },
        },
      },
    },
  });

  console.log("theme en CustomTheme", theme);

  return theme;
}
