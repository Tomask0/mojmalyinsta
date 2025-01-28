"use client";

import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { purple, green } from '@mui/material/colors';

// Define light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252',
    },
  },
});

// Create a context for the theme
const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({
  isDark: false,
  toggleTheme: () => {},
});

// Custom hook to use the ThemeContext
export const useThemeContext = () => useContext(ThemeContext);

// ThemeProvider Component
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
