import type { Metadata } from "next";
import "./globals.css";
import {CartProvider} from "./context/CartContext"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "OMCO Battery Service",
  description: "Buy Battery & Doorstep Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <CartProvider>
{children}
</CartProvider>
          
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}