import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  weight: ['100', '200', '300', '400', '600', '700', '900'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "QuantexMart",
  description: 'Items specially customized to keep up with your emotions',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 min-h-screen dark:bg-[#0d1117]`}>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
