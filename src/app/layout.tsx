import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Navigation } from "@/components/organisms/Navigation/Navigation";
import { Footer } from "@/components/organisms/Footer/Footer";
import { SmoothScroll } from "@/components/organisms/SmoothScroll/SmoothScroll";
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

export const metadata: Metadata = {
  title: "Aba Oriens | Poética Orgánica & Creative Engineering",
  description: "Aba Oriens es un autor contemporáneo cuya obra combina fisiología, mística y crítica cultural. Perfil de Luis Murillo Baltodano, Senior Creative Engineer especializado en gráficos por computadora y arte generativo.",
  keywords: ["Aba Oriens", "Luis Murillo Baltodano", "Poesía contemporánea", "Literatura experimental", "Creative Engineer", "Creative Coding", "WebGL", "Three.js", "Generative Art", "Costa Rica", "Escritura performativa"],
  openGraph: {
    title: "Aba Oriens | Poética Orgánica & Creative Engineering",
    description: "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano. Fusión de literatura experimental y tecnología creativa.",
    url: "https://oriens.aiban.news",
    siteName: "Aba Oriens",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "Aba Oriens Visual Identity",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aba Oriens | Poética Orgánica & Creative Engineering",
    description: "Explora la obra de Aba Oriens y el portafolio técnico de Luis Murillo Baltodano.",
    images: ["/1.jpeg"],
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
    <html lang="en">
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
