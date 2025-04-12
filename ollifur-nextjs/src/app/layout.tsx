import { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Ollifur',
    default: 'Ollifur - Cherish the ones you love',
  },
  description: 'Cherish the ones you love.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
