import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: {
      default: '#F8F8F6',
      paper: '#F8F8F6',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#7A7A7A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '5rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      lineHeight: 1.1,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 300,
      letterSpacing: '0.08em',
      lineHeight: 1.8,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.9,
      letterSpacing: '0.02em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.8,
      letterSpacing: '0.02em',
    },
    overline: {
      fontSize: '0.7rem',
      letterSpacing: '0.22em',
      lineHeight: 2,
    },
  },
  spacing: 8,
});

export default theme;
