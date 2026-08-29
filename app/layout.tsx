import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { ProposalBanner } from "@/components/ProposalBanner";
import { WhatsAppBar } from "@/components/WhatsAppBar";
import { content } from "@/lib/content";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const siteUrl = "https://lubnan-bay.vercel.app";
const description =
  "Restaurante Lubnan — cocina libanesa en Paseo Colón, San José. Lo mejor de la comida libanesa tradicional a tu mesa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Restaurante Lubnan — cocina libanesa en Paseo Colón, San José",
  description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Lubnan",
    title: "Restaurante Lubnan — cocina libanesa en Paseo Colón, San José",
    description,
    locale: "es_CR",
    images: [
      {
        url: content.heroImage,
        width: 1200,
        height: 630,
        alt: "Interior de Restaurante Lubnan en Paseo Colón",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurante Lubnan — cocina libanesa en Paseo Colón",
    description,
    images: [content.heroImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${rubik.variable} font-sans antialiased`}>
        <ProposalBanner />
        {children}
        <WhatsAppBar />
      </body>
    </html>
  );
}
