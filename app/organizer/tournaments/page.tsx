/* CONTENT */
import { OrganizerTournamentsContent } from "@/content/dashboard/organizer/tournaments/page/OrganizerTournamentsContent";
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";

export default function OrganizerTournamentsPage() {
  return (
    <>
      <RouteTitle
        links={[{ label: "Torneos", href: "/organizer/tournaments" }]}
      />
      <div className="overflow-y-auto flex-1">
        <OrganizerTournamentsContent />
      </div>
    </>
  );
}
