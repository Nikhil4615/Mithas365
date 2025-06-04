import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import MainWrapper from '@/components/layout/MainWrapper';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mithas 365 | Sweet Shop & Restaurant',
  description: 'Authentic Indian sweets, meals, and snacks with a perfect blend of tradition and taste.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}