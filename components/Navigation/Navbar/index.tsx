"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import NavLink from "../NavLink";
import { ThemeToggle } from "@/components/ToggleTheme";
import {
  IconClose,
  IconGitHub,
  IconHamburger,
  IconTerminal,
} from "@/components/Icons";

const NAV_ITEMS = [
  { path: "blog", name: "Blog" },
  { path: "about", name: "Sobre mi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="z-50 sticky top-0">
      <nav className="duration-300 backdrop-filter backdrop-blur-3xl backdrop-saturate-200 transition-shadow items-center w-full flex flex-col xs:flex-row justify-between bg-white/80 dark:bg-black/75 z-50 dark:shadow-nav-dark shadow-nav">
        <div className="container-section h-16 w-full gap-0 sm:gap-3 flex items-center justify-between">
          <div className="3xl:flex-1 flex flex-row gap-2">
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "active:scale-95 transition-transform flex xs:hidden rounded-full items-center justify-center hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link",

                isOpen ? "text-link dark:text-link-dark" : ""
              )}
            >
              {isOpen ? <IconClose /> : <IconHamburger />}
            </button>
            <div className="3xl:flex-1 flex items-center">
              <Link
                href="/"
                aria-label="Ir al inicio"
                className="flex text-gray-800 dark:text-gray-500"
              >
                <IconTerminal />
                <span className="font-mono dark:text-gray-200 hover:text-slate-500 dark:hover:text-slate-500">
                  dev-JA
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="hidden xs:flex space-x-8 mr-6">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.path}
                  className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
                >
                  <NavLink path={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <Link
              href="https://github.com/JeremiasArriondo"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Abrir perfil de GitHub"
              className="flex items-center justify-center w-8 h-8 hover:text-slate-500"
            >
              <IconGitHub />
            </Link>
          </div>
        </div>
        {isOpen && (
          <div
            className="absolute px-6 py-4 top-16 flex flex-col xs:hidden 
          bg-customGray-base dark:bg-customGray-dark w-full
          rounded-b-2xl shadow-lg dark:shadow-gray-900"
          >
            <ul>
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.path}
                  className="text-secondary hover:text-primary whitespace-nowrap py-2 text-lg font-medium transition-all duration-300"
                >
                  <NavLink path={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
