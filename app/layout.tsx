import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "HBP Properties | Trusted Real Estate in Mohali & Tri-City",
  description: "Buy, sell, rent and invest in Tri-City real estate with HBP Properties. Trusted experts in Mohali, Chandigarh, and Panchkula.",
  keywords: ["Real Estate Mohali", "Property in Chandigarh", "HBP Properties", "Tri-city Real Estate", "Buy Sell Rent Invest"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${playfair.variable} real-estate-bg bg-white text-dark antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
