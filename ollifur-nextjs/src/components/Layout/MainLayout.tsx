'use client';

import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Corner from '@/components/Home/Corner';

interface MainLayoutProps {
  children: ReactNode;
  isHomePage?: boolean;
}

export default function MainLayout({
  children,
  isHomePage = false,
}: MainLayoutProps) {
  return (
    <>
      <CssBaseline />
      <div className="mainWrap">
        <Header home={isHomePage} />
        <main className="containerWrap">{children}</main>
        <Footer />
        <div className="corner-wrapper">
          <Corner />
        </div>
      </div>

      {/* Add CSS for responsive corner visibility */}
      <style jsx>{`
        .corner-wrapper {
          display: none;
        }

        @media (min-width: 960px) {
          .corner-wrapper {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
