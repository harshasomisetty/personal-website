'use client';
import { PLATFORMS, Platform } from '@/components/Socials';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    window.location.href = PLATFORMS[Platform.Instagram].linkText;
  });

  return <>Redirecting</>;
}
