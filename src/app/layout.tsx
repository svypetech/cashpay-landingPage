import type { Metadata } from "next";
import ClientLayoutProvider from "@/src/components/providers/ClientLayoutProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "CashPay - Your Finance Partner",
  description: "Simplify Your Crypto Experience with CashPay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutProvider>{children}</ClientLayoutProvider>
      </body>
    </html>
  );
}
