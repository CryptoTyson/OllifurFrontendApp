'use client';

import { ReactNode, useState, useEffect } from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getThemeOptions } from '@/lib/theme'; // Corrected import

interface ThemeRegistryProps {
  children: ReactNode;
}

const getInitialMode = () => {
  if (typeof window !== 'undefined') {
    const savedMode = localStorage.getItem('oironTheme');
    if (savedMode) {
      return savedMode;
    }
  }
  return 'light';
};

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const [mode, setMode] = useState<'light' | 'dark'>(
    getInitialMode() as 'light' | 'dark',
  );

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('oironTheme', newMode);
    }
  };

  const theme = createTheme(getThemeOptions(mode));

  const cache = createCache({
    key: 'mui',
    prepend: true,
  });

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  // Make theme mode toggle available globally
  useEffect(() => {
    (window as any).toggleTheme = toggleColorMode;
  }, [toggleColorMode]); // Added dependency

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
