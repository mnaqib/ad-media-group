import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";
import { afcand } from "./_constants";

export const metadata: Metadata = {
  title: "AD group",
  description:
    "AD group offers flexible savings schemes for homes, gold, and vehicles. Start saving today and turn your dreams into reality with AD GROUP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={afcand.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
