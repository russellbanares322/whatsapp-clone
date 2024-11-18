import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContentWrapper from "@/components/content-wrapper";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "WhatsApp Clone",
  description: "Web application that mimics WhatsApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ContentWrapper>{children}</ContentWrapper>
      </body>
    </html>
  );
}
