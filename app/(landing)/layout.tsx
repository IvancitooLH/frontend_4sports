/* COMPONENTS */
import { Navbar } from "@/content/shared/ui/navbar/Navbar";
import { ThemeToggle } from "@/content/shared/theme/ThemeToogle";
import { Footer } from "@/content/shared/ui/footer/Footer";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-dvh">
      <Navbar />
      {children}
      <Footer />
      <ThemeToggle />
    </main>
  );
}
