import type { Metadata } from "next";
import { Roboto, Open_Sans } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css';
import ImportBsJS from "./importBsJS"
import ImportAOS from './importAOS';
import "./globals.css";

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
    <html lang="en">
      <body className={`${roboto.variable} ${openSans.variable}`}>
        {children}
      </body>
      <ImportBsJS />
      <ImportAOS />
    </html>
  );
}
