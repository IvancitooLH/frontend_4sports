/* COMPONENTS */
import { Navbar } from "@/content/shared/ui/navbar/Navbar";
import { ThemeToggle } from "@/content/shared/theme/ThemeToogle";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh overflow-y-hidden overflow-x-hidden">
      {/* <Sidebar userOutside={userInfo} />
      <Announcement />
      <Modal /> */}
      {/* <div
        className={`flex flex-col h-dvh w-full transition-all duration-300 ${
          expanded
            ? "lg:left-64 lg:w-[calc(100%-16rem)]"
            : "lg:left-16 lg:w-[calc(100%-4rem)] z-40"
        }`}
      >
        <RouteTitle />
        <main className={`overflow-y-auto flex-1`}>{children}</main>
      </div> */}
      <div className={`flex flex-col h-dvh w-full transition-all duration-300`}>
        <main className={`overflow-y-auto flex-1`}>
          <Navbar />
          {children}
          <ThemeToggle />
        </main>
      </div>
    </div>
  );
}
