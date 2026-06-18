/* CONTENT */
import { OrganizerHomeContent } from "@/content/dashboard/organizer/home/page/OrganizerHomeContent";
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";

export default function OrganizerHomePage() {
  return (
    <>
      <RouteTitle links={[{ label: "Inicio", href: "/organizer/home" }]} />
      <div className="overflow-y-auto flex-1">
        <OrganizerHomeContent />
      </div>
    </>
  );
}
