import "@/app/global.css";
import { Metadata } from "next";
import { SessionProvider } from 'next-auth/react';
import Header from "@/components/header";
import NavBar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`antialiased bg-navy text-white flex flex-col`}>
          <Header />
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
