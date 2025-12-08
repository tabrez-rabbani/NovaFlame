import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NovaFlame Dining | Modern Fine Dining',
  description: 'Experience the future of fine dining at NovaFlame. Luxury, ambience, and exquisite culinary art.',
  openGraph: {
    title: 'NovaFlame Dining',
    description: 'Modern Fine Dining',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <body className="bg-background text-foreground selection:bg-primary/30 selection:text-white flex flex-col min-h-screen overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
