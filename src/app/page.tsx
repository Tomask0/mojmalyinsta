// src/pages/index.tsx
'use client';

import { useSession } from "next-auth/react";
//import { useRouter } from 'next/navigation';
import AuthedView from '@/sections/authedView';
import NonAuthedView from '@/sections/nonAuthedView';


export default function HomePage() {
  const { data: session, status } = useSession();
  //const router = useRouter();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <AuthedView/>
    );
  } else {
    return (
      <NonAuthedView/>
    );
  }
}
