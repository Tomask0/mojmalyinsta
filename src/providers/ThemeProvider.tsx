// src/providers/ThemeProvider.tsx
import * as React from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
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
  status: {
    danger: orange[100],
  },
});

// Export the custom ThemeProvider
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
}
