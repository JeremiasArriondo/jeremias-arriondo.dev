"use client";

import { useTheme } from "next-themes";
import { IconDark } from "./Icons/IconDark";
import { IconLight } from "./Icons/IconLight";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="flex dark:hidden">
        <button
          type="button"
          aria-label="Use Dark Mode"
          onClick={() => setTheme("dark")}
          className="hover:bg-gray-200 flex p-1 w-9 h-9 rounded-md items-center justify-center"
        >
          <IconDark />
        </button>
      </div>
      <div className="hidden dark:flex">
        <button
          type="button"
          aria-label="Use Light Mode"
          onClick={() => setTheme("light")}
          className="hover:bg-gray-800 flex p-1 w-9 h-9 rounded-md items-center justify-center"
        >
          <IconLight />
        </button>
      </div>
    </>
  );
}
