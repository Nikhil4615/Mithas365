"use client";

import { usePathname } from "next/navigation";

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <main className={isHomePage ? "" : "pt-20"}>
      {children}
    </main>
  );
} 