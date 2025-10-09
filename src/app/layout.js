
import Navbar from "@/components/Navbar";
import "./globals.css";
import SocialBar from "@/components/SocialBar";
import { Footer } from "@/components/Footer";
import useLenis from "./hooks/useLenis";

export const metadata = {
  title: "E-Cell NIT-B",
  description: "E-Cell NIT Bhopal Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar/>
        <SocialBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
