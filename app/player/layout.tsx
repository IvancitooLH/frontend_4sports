"use client";

/* COMPONENTS */
import { ThemeToggle } from "@/content/shared/theme/ThemeToogle";
import Link from "next/link";

/* ICONS */
import { LogOut } from "lucide-react";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh overflow-y-hidden overflow-x-hidden">
      <div className={`flex flex-col h-dvh w-full transition-all duration-300`}>
        <main className={`overflow-y-auto flex-1`}>
          <Link
            className="absolute left-6 top-6 text-body flex gap-4 items-center"
            href={"/login"}
          >
            <LogOut className="size-4" />
            <p>Cerrar sesión</p>
          </Link>

          {children}

          <ThemeToggle />
        </main>
      </div>
    </div>
  );
}
