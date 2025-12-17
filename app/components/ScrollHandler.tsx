'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('scrollTo');
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        const y = el.offsetTop - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  return null;
}
