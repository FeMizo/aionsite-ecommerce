import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aion Commerce",
  description: "Plataforma modular de tiendas en línea.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
