import { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import Provider from "@/components/provider";
import ScrollUpButton from "@/components/scroll-up-button";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Inicio - Jeremias Arriondo",
  description: "Bienvenid@ a mi web personal",
  keywords: ["Web", "Frontend", "Backend", "Portfolio"],
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
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
