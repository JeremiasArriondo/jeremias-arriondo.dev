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
      className={`group hover:text-violetPrimary ${
        isActive && "text-violetPrimary"
      }`}
    >
      {children}
    </Link>
  );
}
