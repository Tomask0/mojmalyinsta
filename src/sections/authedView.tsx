// src/app/components/NavBar.tsx
'use client';

import { useSession } from "next-auth/react";
import Typography from '@mui/material/Typography';

export const metadata = { title: "HomeView | vlak"};


export default function AuthedView() {
    const { data: session } = useSession();

  return (
    <Typography variant="h4">Vitaj, {session?.user?.name}!</Typography>
    
  );
}


