/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";
import { OrganizerAddOrganizationContent } from "@/content/dashboard/organizer/organizations/content/add/OrganizerAddOrganizationContent";

export default function OrganizerAddOrganizationPage() {
  return (
    <>
      <RouteTitle
        links={[
          { label: "Organizaciones", href: "/organizer/organizations" },
          { label: "Agregar", href: "/organizer/organizations/add" },
        ]}
      />

      <div className="overflow-y-auto flex-1">
        <OrganizerAddOrganizationContent />
      </div>
    </>
  );
}
