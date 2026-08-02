import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IMZ Multimedia",
  description: "Ekosistem Robot AI Masa Depan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
