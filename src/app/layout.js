import { Geist, Geist_Mono, IBM_Plex_Serif, Outfit } from "next/font/google";
import "./globals.css";
import {Header, Footer} from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const plexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"], // or other subsets
});

export const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  subsets: ["latin"], // or other subsets
});

export const metadata = {
  title: "Mass Tort Express",
  description:
    "Your Trusted Partner for Professional Consulting and IT Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plexSerif.variable} ${outfit.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
