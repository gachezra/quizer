import './globals.css';
import Providers from './Providers';
import BottomNavbar from '@/components/BottomNavbar';

export const metadata = {
  title: 'Quiz Champion - Interactive Quiz App',
  description: 'Test your knowledge with our interactive quiz app featuring timed challenges and rewards.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen py-8">
          <Providers>
            {children}
          </Providers>
        </main>
        <BottomNavbar/>
      </body>
    </html>
  );
}