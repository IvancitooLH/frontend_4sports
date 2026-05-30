"use client";

/* COMPONENTS */
import { ThemeToggle } from "@/content/shared/theme/ThemeToogle";
import Link from "next/link";
import Image from "next/image";

/* ICONS */
import { House } from "lucide-react";
import { FourSportsIcon } from "@/content/shared/icons/fourSports/FourSportsIcon";

/* IMAGES */
import cancha from "@/content/auth/images/cancha.png";

/* NAVIGATION */
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isInLoginRegister = pathname === "/login" || pathname === "/register";

  return (
    <main className="flex min-h-dvh overflow-y-hidden overflow-x-hidden">
      {isInLoginRegister && (
        <Link
          className="absolute left-6 top-6 text-body z-50 p-2 rounded-full border border-line bg-surface"
          href={"/"}
        >
          <House className="size-4" />
        </Link>
      )}

      <div className="max-h-dvh h-dvh w-full overflow-y-auto overflow-x-hidden flex">
        <div className="relative w-full h-full md:block hidden">
          <Image
            src={cancha}
            alt="Cancha de fútbol"
            quality={70}
            preload
            className="object-cover object-left w-full h-full"
          />
        </div>

        <div
          className={`h-full w-full flex px-10 transition-all duration-1000 bg-blue-600 ${isInLoginRegister ? "lg:w-1/3 lg:max-w-1/3 lg:min-w-1/3 md:w-1/2 md:max-w-1/2 md:min-w-1/2 items-center" : pathname === "/onboarding" ? "md:max-w-3/4 md:min-w-3/4 md:w-3/4 lg:w-1/2 lg:max-w-1/2 lg:min-w-1/2 py-10 md:py-0 md:items-center" : "py-10 md:py-0"}`}
        >
          <div className="w-full min-h-0 h-full flex flex-col bg-red-600">
            <div className="w-24 m-auto mb-4">
              <FourSportsIcon />
            </div>

            {children}
          </div>
        </div>
      </div>

      <ThemeToggle />
    </main>
  );
}
