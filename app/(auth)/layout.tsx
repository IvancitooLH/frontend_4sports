"use client";

/* COMPONENTS */
import { ThemeToggle } from "@/content/shared/theme/ThemeToogle";
import Link from "next/link";

/* ICONS */
import { ArrowLeft } from "lucide-react";

/* NAVIGATION */
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInLogin = pathname === "/login";

  return (
    <div className="flex min-h-dvh overflow-y-hidden overflow-x-hidden">
      <div className={`flex flex-col h-dvh w-full transition-all duration-300`}>
        <main className={`overflow-y-auto flex-1`}>
          {isInLogin && (
            <Link
              className="absolute left-6 top-6 text-body z-50 p-2 rounded-full border border-line bg-surface"
              href={"/"}
            >
              <ArrowLeft className="size-4" />
            </Link>
          )}

          {children}

          <ThemeToggle />
        </main>
      </div>
    </div>
  );
}
