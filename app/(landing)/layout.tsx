/* COMPONENTS */
import { Navbar } from "@/content/shared/ui/navbar/Navbar";
import { ThemeToggle } from "@/content/shared/theme/ThemeToogle";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-dvh">
      <Navbar />
      {children}
      <ThemeToggle />
    </main>
  );
}
