// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Color } from '@mui/material';

declare module '@mui/material' {
  interface Color {
    650: string;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    element: string;
    elementHover: string;
  }
}
