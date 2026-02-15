import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Navigation } from "@/components/organisms/Navigation/Navigation";
import { Footer } from "@/components/organisms/Footer/Footer";
import { SmoothScroll } from "@/components/organisms/SmoothScroll/SmoothScroll";
import { siteContent } from "@/content/siteContent";
import "../styles/globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

const { metadata: siteMetadata } = siteContent;

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.og.title,
    description: siteMetadata.og.description,
    url: siteMetadata.og.url,
    siteName: siteMetadata.title.split('|')[0].trim(),
    images: [
      {
        url: siteMetadata.og.image,
        width: 1200,
        height: 630,
        alt: `${siteMetadata.title.split('|')[0].trim()} Visual Identity`,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.og.title,
    description: siteMetadata.og.description,
    images: [siteMetadata.og.image],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
      >
        <SmoothScroll>
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
