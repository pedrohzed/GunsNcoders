import type { Metadata } from "next";
import { Lexend, Poppins } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Guns n' Coders - Apoie nossa jornada",
  description: "Equipe de robótica Guns n' Coders - Medalha de Ouro OBT. Ajude-nos a chegar em São José dos Campos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${lexend.variable} ${poppins.variable} font-sans bg-[#0a0a0a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
