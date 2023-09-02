"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function NavLink({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = path.split("?")[0] === segment;

  return (
    <Link
      href={`/${path}`}
      className={`text-base group hover:text-violetPrimary/60 ${
        isActive && "text-violetPrimary/80"
      }`}
    >
      {children}
    </Link>
  );
}
