import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      sky700: string;
      sky800: string;
      orange700: string;
      orange800: string;
      black: string;
      white: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      sky700: string;
      sky800: string;
      orange700: string;
      orange800: string;
      black: string;
      white: string;
    };
  }
}
