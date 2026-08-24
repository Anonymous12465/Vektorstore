import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ToastProvider } from "@/components/ToastProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VektorStore - Premium Fashion",
  description: "VektorStore - Premium fashion for the modern individual. Quality meets style.",
  openGraph: {
    title: "VektorStore - Premium Fashion",
    description: "VektorStore - Premium fashion for the modern individual. Quality meets style.",
    url: "https://vektorstore.com",
    siteName: "VektorStore",
    images: [
      {
        url: "/images/banner1.png",
        width: 1200,
        height: 630,
        alt: "VektorStore Premium Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VektorStore - Premium Fashion",
    description: "VektorStore - Premium fashion for the modern individual. Quality meets style.",
    images: ["/images/banner1.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <ToastProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}
