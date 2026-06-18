/* CONTENT */
import { OrganizerOrganizationsContent } from "@/content/dashboard/organizer/organizations/page/OrganizerOrganizationsContent";
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";

export default function OrganizerOrganizationsPage() {
  return (
    <>
      <RouteTitle
        links={[{ label: "Organizaciones", href: "/organizer/organizations" }]}
      />
      <div className="overflow-y-auto flex-1">
        <OrganizerOrganizationsContent />
      </div>
    </>
  );
}
