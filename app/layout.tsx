import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { ProposalBanner } from "@/components/ProposalBanner";
import { WhatsAppBar } from "@/components/WhatsAppBar";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Restaurante Lubnan — cocina libanesa en Paseo Colón, San José",
  description:
    "Propuesta de sitio oficial para Lubnan. Cocina libanesa en Paseo Colón, San José.",
  robots: { index: false, follow: false },
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
