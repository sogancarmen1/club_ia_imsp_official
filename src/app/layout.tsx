import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/bootstrap.scss";
import "@/styles/allBootstrap.scss";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
