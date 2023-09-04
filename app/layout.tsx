import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import Provider from "@/components/provider";
import ScrollUpButton from "@/components/scroll-up-button";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: { template: "%s | Jeremias Arriondo", default: "Jeremias Arriondo" },
  description: "Desarrollador full-stack, escritor de posteos y más",
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
    icon: "/_static/favicons/favicon.ico",
  },
  openGraph: {
    title: "Jeremias Arriondo",
    description: "Desarrollador full-stack, escritor de posteos y más",
    siteName: "Jeremias Arriondo",
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
    creator: "@jere_arriondo",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const fontHeading = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(inter.className, fontHeading.variable)}>
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
