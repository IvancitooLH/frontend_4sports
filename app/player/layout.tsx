"use client";

/* COMPONENTS */
import { Sidebar } from "@/content/shared/ui/sidebar/Sidebar";
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";

/* DATA */
import { playerSidebarLinks } from "@/content/shared/ui/sidebar/data/playerSidebarLinks";

/* LIBS */
import { motion } from "framer-motion";

/* STORES */
import { useSidebarStore } from "@/content/shared/ui/sidebar/stores/SidebarStore";

export default function PlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { expanded } = useSidebarStore();

  return (
    <motion.div
      className="flex min-h-dvh overflow-y-hidden overflow-x-hidden"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Sidebar links={playerSidebarLinks} />
      {/* <Modal /> */}
      <div
        className={`flex flex-col h-dvh w-full transition-all duration-300 ${
          expanded
            ? "lg:left-64 lg:w-[calc(100%-16rem)]"
            : "lg:left-16 lg:w-[calc(100%-4rem)] z-40"
        }`}
      >
        <RouteTitle links={playerSidebarLinks} />
        <main className={`overflow-y-auto flex-1`}>{children}</main>
      </div>
    </motion.div>
  );
}
