"use client";

/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import { OrganizationPlan } from "../components/plan/OrganizationPlan";
import { OrganizationPaymentHistory } from "../components/paymentHistory/OrganizationPaymentHistory";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";

/* ICONS */
import { ArrowLeft } from "lucide-react";

/* NAVIGATION */
import { useRouter } from "next/navigation";

export function OrganizerPaymentHistoryContent({ slug }: { slug: string }) {
  const router = useRouter();
  const name = "Sede Deportes";

  return (
    <>
      <RouteTitle
        links={[
          { label: "Organizaciones", href: "/organizer/organizations" },
          {
            label: name,
            href: `/organizer/organizations/payment-history/${slug}`,
          },
        ]}
      />
      <div className="overflow-y-auto flex-1">
        <SectionContainer>
          <div className="p-6 min-h-full gap-6 flex flex-col">
            <DinamicButton
              action={() => router.push("/organizer/organizations")}
              type="unfilled"
              label="Regresar"
              twClassName="w-fit py-1 text-sm"
              icon={
                <ArrowLeft className="size-4 min-h-4 min-w-4 text-primary" />
              }
            />

            <div className="flex gap-6 flex-1">
              <OrganizationPlan />
              <OrganizationPaymentHistory />
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
