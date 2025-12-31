import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import './globals.css';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragati Peharkar - Full Stack Developer",
  keywords: [
    "Pragati Peharkar",
    "Full Stack Developer",
    "Software Engineer",
    "Java Developer",
    "Frontend Developer",
    "React Developer",
    "Freelancer",
  ],
  authors: [{ name: "Pragati Peharkar" }],
  creator: "Pragati Peharkar",
  publisher: "Pragati Peharkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://google.com",
    title: "Pragati Peharkar - Full Stack Developer",
    siteName: "Pragati Peharkar Devfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragati Peharkar - Full Stack Developer",
   
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://google.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
