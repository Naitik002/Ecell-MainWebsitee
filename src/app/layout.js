
import Navbar from "@/components/Navbar";
import "./globals.css";
import SocialBar from "@/components/SocialBar";
import { Footer } from "@/components/Footer";
import localFont from 'next/font/local';

const headingFont = localFont({ src: './fonts/Montserrat/Montserrat-VariableFont_wght.ttf', variable: '--font-heading' });
const bodyFont = localFont({ src: './fonts/Roboto/Roboto-VariableFont_wdth,wght.ttf', variable: '--font-body' });

export const metadata = {
  title: "E-Cell NIT-B",
  description: "E-Cell NIT Bhopal Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-black overflow-x-clip`}>
        <Navbar/>
        <SocialBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
