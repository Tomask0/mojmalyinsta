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
import { useRouter } from 'next/navigation';
import { useSession, signOut } from "next-auth/react";
import Avatar from '@mui/material/Avatar';
import { Switch } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [darkMode, setDarkMode] = React.useState(false); // Local state for dark mode toggle
  const router = useRouter();
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode on or off
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
        sx={{ width: '100%' }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Pridať" icon={<AddCircleIcon />} />
        {!session && <BottomNavigationAction label="Registrácia" icon={<AppRegistrationIcon />} />}
        {!session && <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />}
        {session && (
          <BottomNavigationAction label={session?.user?.name} icon={<Avatar alt={session?.user?.name || ""} src={session?.user?.image || ""} />} />
        )}
        {session && <BottomNavigationAction label="Odhlásenie" icon={<LogoutIcon />} onClick={() => signOut()} />}
      </BottomNavigation>

      <Switch checked={darkMode} onChange={toggleDarkMode} /> {/* Switch for dark mode toggle */}
    </Box>
  );
}
