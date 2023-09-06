"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { RecoilRoot } from "recoil";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <RecoilRoot>{children}</RecoilRoot>
    </NextThemesProvider>
  );
}
