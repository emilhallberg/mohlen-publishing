import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohlén Publishing",
  description:
    "Ester Mohlén, född 22 juli 2006 i landskapet Hälsingland, nu hon ger ut sin debutroman i samband med hennes nystartade bolag Mohlén Publishing. En dröm som äntligen blir till verklighet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
