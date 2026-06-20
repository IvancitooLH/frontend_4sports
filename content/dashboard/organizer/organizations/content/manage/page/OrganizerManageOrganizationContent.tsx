/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";
import { EditOrganization } from "../components/editOrganization/EditOrganization";
import { OrganizationPlan } from "../components/plan/OrganizationPlan";
import { OrganizationPaymentHistory } from "../components/paymentHistory/OrganizationPaymentHistory";

export function OrganizerManageOrganizationContent({ slug }: { slug: string }) {
  const name = "Sede Deportes";

  return (
    <>
      <RouteTitle
        links={[
          { label: "Organizaciones", href: "/organizer/organizations" },
          { label: name, href: `/organizer/organizations/${slug}` },
        ]}
      />
      <div className="overflow-y-auto flex-1">
        <SectionContainer>
          <div className="p-6 flex gap-6 h-full">
            <EditOrganization />

            <div className="flex flex-col gap-6 w-full">
              <OrganizationPlan />
              <OrganizationPaymentHistory />
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
