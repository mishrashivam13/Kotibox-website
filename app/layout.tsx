import type { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google';

// Font configuration
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto', 
});

// Metadata
export const metadata: Metadata = {
  title: 'Kotibox - Global Technologies',
  description: 'Google Certified AI Agency',
}

// Single RootLayout (Sahi tareeka)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      {/* font-sans class yahan body par lagao */}
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}