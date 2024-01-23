import Footer from '@/components/comp/Footer';
import Navbar from '@/components/comp/Navbar';
import Providers from '@/components/comp/Providers';
import { cn, constructMetadata } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <main className='relative flex flex-col min-h-screen'>
          <Providers>
            {/* @ts-ignore */}
            <Navbar />
            <div className='flex-grow flex-1'>{children}</div>
            <Footer />
          </Providers>
        </main>

        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
