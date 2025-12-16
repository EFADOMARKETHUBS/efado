import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const APP_NAME = "EFADO Market Hubs";
const APP_DESCRIPTION = "A single, unified digital ecosystem where commerce, finance, education, employment, and more converge.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s | EFADO Market Hubs",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_NAME,
      template: "%s | EFADO Market Hubs",
    },
    description: APP_DESCRIPTION,
    url: "https://www.efado.com",
    images: [
      {
        url: "https://i.ibb.co/3k5gGZ4/efado-ccsc-diagram.png",
        width: 1200,
        height: 630,
        alt: "The EFADO Market Hubs Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_NAME,
      template: "%s | EFADO Market Hubs",
    },
    description: APP_DESCRIPTION,
    images: ["https://i.ibb.co/3k5gGZ4/efado-ccsc-diagram.png"], 
  },
};

export const viewport: Viewport = {
  themeColor: "#9400D3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
