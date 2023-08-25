import { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import Provider from "@/components/provider";
import ScrollUpButton from "@/components/scroll-up-button";
import "@/styles/globals.css";
import { ReactNode, Suspense } from "react";

export const metadata: Metadata = {
  title: { template: "%s | Jeremias Arriondo", default: "Jeremias Arriondo" },
  description: "Full-stack developer. Mi blog y mas.",
  keywords: [
    "jeremias arriondo, full-stack developer, web developer, next.js, blog",
  ],
  authors: [
    {
      name: "Jeremias Arriondo",
      url: "https://www.linkedin.com/in/jeremias-arriondo/",
    },
  ],
  creator: "Jeremias Arriondo",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jeremias Arriondo",
    description: "Mi web personal",
    siteName: "Jeremias Arriondo's website",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Jeremias Arriondo",
    card: "summary_large_image",
    creator: "@Jere_Arriondo",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={inter.className}>
      <body>
        <Provider>
          <div className="dark:bg-black container-main">
            <Navbar />
            {children}
            <Footer />
            <div className="fixed bottom-12 right-10">
              <ScrollUpButton />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
