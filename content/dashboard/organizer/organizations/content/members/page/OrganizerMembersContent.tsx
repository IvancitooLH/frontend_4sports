"use client";

/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import Image from "next/image";
import { OrganizationMembersTable } from "../components/membersTable/OrganizationMembersTable";

/* HOOKS */
import { useState } from "react";

/* ICONS */
import { ArrowLeft } from "lucide-react";

/* LIBS */
import { AnimatePresence, motion } from "framer-motion";

/* NAVIGATION */
import { useRouter } from "next/navigation";

export function OrganizerMembersContent({ slug }: { slug: string }) {
  const router = useRouter();
  const name = "Sede Deportes";

  return (
    <>
      <RouteTitle
        links={[
          { label: "Organizaciones", href: "/organizer/organizations" },
          {
            label: name,
            href: `/organizer/organizations/members/${slug}`,
          },
          {
            label: "Miembros",
            href: `/organizer/organizations/members/${slug}`,
          },
        ]}
      />
      <div className="overflow-y-auto flex-1">
        <SectionContainer>
          <div className="p-6 flex flex-col h-full">
            <DinamicButton
              action={() => router.push("/organizer/organizations")}
              type="unfilled"
              label="Regresar"
              twClassName="w-fit py-1 text-sm mb-6"
              icon={
                <ArrowLeft className="size-4 min-h-4 min-w-4 text-primary" />
              }
            />

            <OrganizationMembersTable />
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
