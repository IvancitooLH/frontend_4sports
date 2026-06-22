"use client";

/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import { OrganizationPlan } from "../components/plan/OrganizationPlan";
import { OrganizationPaymentHistoryTable } from "../components/paymentHistoryTable/OrganizationPaymentHistoryTable";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import { Plans } from "@/content/shared/ui/plans/Plans";

/* HOOKS */
import { useState } from "react";

/* ICONS */
import { ArrowLeft } from "lucide-react";

/* LIBS */
import { AnimatePresence, motion } from "framer-motion";

/* NAVIGATION */
import { useRouter } from "next/navigation";

export function OrganizerPaymentHistoryContent({ slug }: { slug: string }) {
  const router = useRouter();
  const name = "Sede Deportes";

  const [position, setPosition] = useState<"panel" | "plans">("panel");

  const onSelectArray: (() => void)[] = [
    () => setPosition("plans"),
    () => setPosition("plans"),
    () => setPosition("plans"),
    () => setPosition("plans"),
  ];

  return (
    <>
      <RouteTitle
        links={[
          { label: "Organizaciones", href: "/organizer/organizations" },
          {
            label: name,
            href: `/organizer/organizations/payment-history/${slug}`,
          },
          {
            label: "Historial de pagos",
            href: `/organizer/organizations/payment-history/${slug}`,
          },
        ]}
      />
      <div className="overflow-y-auto flex-1">
        <SectionContainer>
          <AnimatePresence mode="wait">
            <motion.div
              key={position ? "panel" : "plans"}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="p-6 h-full gap-6 flex flex-col relative"
            >
              {position === "panel" ? (
                <>
                  <DinamicButton
                    action={() => router.push("/organizer/organizations")}
                    type="unfilled"
                    label="Regresar"
                    twClassName="w-fit py-1 text-sm"
                    icon={
                      <ArrowLeft className="size-4 min-h-4 min-w-4 text-primary" />
                    }
                  />

                  <div className="flex gap-6 flex-1 min-h-0 flex-col md:flex-row">
                    <OrganizationPlan onSelect={() => setPosition("plans")} />
                    <OrganizationPaymentHistoryTable />
                  </div>
                </>
              ) : (
                <>
                  <DinamicButton
                    action={() => setPosition("panel")}
                    type="unfilled"
                    label="Regresar"
                    twClassName="w-fit py-1 text-sm absolute top-6 left-6"
                    icon={
                      <ArrowLeft className="size-4 min-h-4 min-w-4 text-primary" />
                    }
                  />
                  <Plans wantWait={false} onSelectArray={onSelectArray} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </SectionContainer>
      </div>
    </>
  );
}
