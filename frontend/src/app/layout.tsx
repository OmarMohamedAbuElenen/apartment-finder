import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import AppHeader from '@/app/components/appBar'

import {
  Container,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apartment Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Suspense fallback={<Container> <CircularProgress /></Container>}>
          <AppHeader />
          {children}
      </Suspense>
      </body>
    </html>
  );
}
