'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const section = searchParams.get('scrollTo');

    if (section) {
      const el = document.getElementById(section);
      if (el) {
        const offset = el.offsetTop - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });

        // 🔥 URL TEMİZLEME
        setTimeout(() => {
          router.replace('/', { scroll: false });
        }, 400);
      }
    }
  }, [searchParams, router]);

  return null;
}
