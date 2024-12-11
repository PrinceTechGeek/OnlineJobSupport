import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#333',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#333',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#333',
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#333',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#333',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#666',
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#666',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#555',
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.5,
      color: '#555',
    },
  },
  palette: {
    primary: {
      main: '#085985',
    },
    secondary: {
      main: '#d32f2f',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
    customColors: {
      sky700: '#0469A1', // text-sky-700 equivalent
      sky800: '#085985', // text-sky-800 equivalent
      orange700: '#f57c00', // text-orange-700 equivalent
      orange800: '#e65100', // text-orange-800 equivalent
      black: '#000', // black color
      white: '#fff', // white color
    },
  },
});

export default theme;
