/* DATA */
import { navbarLinks } from "@/content/shared/ui/navbar/data/navbarLinks";

/* HOOKS */
import Link from "next/link";

/* ICONS */
import { FourSportsLogo } from "@/content/shared/icons/FourSportsLogo";

export function Navbar() {
  return (
    <header className="absolute top-0 z-50 border-b border-line bg-surface backdrop-blur-md transition-all duration-300 px-4 py-2 flex justify-between items-center w-full">
      <div
        className={`pointer-events-none w-24 `}
      >
        <FourSportsLogo />
      </div>

      <nav className="flex gap-4">
        {navbarLinks.map((link, index) => (
          <Link href={link.href} key={index} className="text-sm font-semibold">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex gap-4">
        <Link href={"/login"}>Ingresar</Link>
        <Link href={"/register"}>Registrarse</Link>
      </div>
    </header>
  );
}
