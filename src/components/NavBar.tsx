"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from 'next/navigation'; // For Next.js routing
import { useSession, signOut } from "next-auth/react"
import Avatar from '@mui/material/Avatar';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Initialize the Next.js router
  const { data: session } = useSession();

  const handleNavigation = (newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push('/'); 
        break;
      case 1:
        router.push('/pridat'); 
        break;
      case 2:
        router.push('/auth/registracia'); 
        break;
      case 3:
        router.push('/auth/prihlasenie'); 
        break;
      case 4:
        router.push('/profil'); 
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        height: '', // Full viewport height
        display: 'flex',
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
        sx={{ width: 500 }} // Adjust width if needed
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Pridať" icon={<AddCircleIcon />} />
        {!session && <BottomNavigationAction label="Registrácia" icon={<AppRegistrationIcon />} />}
        {!session && <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />}
        {session && (
          <BottomNavigationAction label={session?.user?.name} icon={<Avatar alt={session?.user?.name  || ""} src={session?.user?.image  || ""} />} />
        )}
        {session && <BottomNavigationAction label="Odhlásenie" icon={<LogoutIcon />} onClick={() => signOut()} />}
      </BottomNavigation>
    </Box>
  );
}
