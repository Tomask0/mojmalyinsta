// src/providers/ThemeProvider.tsx
import * as React from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider, styled } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },
// }));

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

// Export the custom ThemeProvider
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
