import "@/app/global.css";
import { inter } from "@/app/fonts";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
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
          <Header />
        <div className={'flex flex-row'}>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
