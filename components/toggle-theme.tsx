"use client";

import { useTheme } from "next-themes";
import useMounted from "@/hooks/use-mounted";
import { IconDark } from "./Icons/IconDark";
import { IconLight } from "./Icons/IconLight";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <>
      {mounted && (
        <>
          <div className="flex dark:hidden">
            <button
              type="button"
              aria-label="Use Dark Mode"
              onClick={() => setTheme("dark")}
              className="active:scale-95 transition-transform flex w-8 h-8 rounded-full items-center justify-center hover:text-slate-500"
            >
              <IconDark />
            </button>
          </div>
          <div className="hidden dark:flex">
            <button
              type="button"
              aria-label="Use Light Mode"
              onClick={() => setTheme("light")}
              className="active:scale-95 transition-transform flex w-8 h-8 rounded-full items-center justify-center hover:text-slate-500"
            >
              <IconLight />
            </button>
          </div>
        </>
      )}
    </>
  );
}
