import type { Metadata } from "next";
import "./globals.css";
import ContentWrapper from "@/components/content-wrapper";
import { Roboto } from "next/font/google";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SignUpForm from "@/components/sign-up-form";
import Providers from "./providers";

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
  const Authenticated = SignedIn;
  const UnAuthenticated = SignedOut;

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <Authenticated>
            <ContentWrapper>{children}</ContentWrapper>
          </Authenticated>
          <UnAuthenticated>
            <SignUpForm />
          </UnAuthenticated>
        </Providers>
      </body>
    </html>
  );
}
