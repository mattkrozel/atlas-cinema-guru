import "@/app/global.css";
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
      <body className={`antialiased  bg-[#00003c] text-white`}>
          <Header />
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
