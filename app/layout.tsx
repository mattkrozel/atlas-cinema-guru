import "@/app/global.css";
import { SessionProvider } from "next-auth/react";
import { inter } from "@/app/fonts";
import Header from "@/components/header";
import NavBar from "@/components/navBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased  bg-[#00003c] text-white flex flex-col`}>
        <SessionProvider>
          <Header />
          <div className={'flex flex-row'}>
            <NavBar />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
