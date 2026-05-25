import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {

  title:
    "Shivam Gupta | Business Head | Real Estate Leadership",

  description:
    "Shivam Gupta is a Business Head specializing in real estate operations, acquisitions, luxury transactions, strategic expansion, and execution-driven business growth across Mumbai.",

  keywords: [
    "Shivam Gupta",
    "Business Head",
    "Real Estate",
    "Luxury Real Estate",
    "Operations Leadership",
    "Strategic Expansion",
    "Acquisitions",
    "Mumbai Real Estate",
    "Business Leadership",
  ],

  authors: [
    {
      name: "Shivam Gupta",
    },
  ],

  creator: "Shivam Gupta",

  openGraph: {

    title:
      "Shivam Gupta | Business Head",

    description:
      "Business leader specializing in acquisitions, luxury real estate, operations, and execution-focused growth.",

    url:
      "https://shivam-portfolio-pied.vercel.app/",

    siteName:
      "Shivam Gupta Portfolio",

    locale: "en_IN",

    type: "website",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>
        {children}
      </body>

    </html>

  );
}