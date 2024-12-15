import type { Metadata } from "next";
import { Roboto, Open_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css';
import ImportBsJS from "./importBsJS"
import ImportAOS from './importAOS';
import "./globals.css";
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: "Imagine Group",
  description: "Imagine Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-100">
      <body className={`${roboto.variable} ${openSans.variable} d-flex flex-column`}>
        <Header />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
      <ImportBsJS />
      <ImportAOS />
    </html>
  );
}
