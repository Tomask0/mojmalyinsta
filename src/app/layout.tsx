// src/app/layout.tsx
"use client";

import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import ThemeProvider from "../providers/ThemeProvider";
import { Box } from "@mui/material";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>          
          <ThemeProvider>
            <Box style={{ minHeight: '95vh', display: 'flex', flexDirection: 'column' }}>
              <Box style={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Navbar /> 
            </Box>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
