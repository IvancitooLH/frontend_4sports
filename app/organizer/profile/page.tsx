/* CONTENT */
import { OrganizerProfileContent } from "@/content/dashboard/organizer/profile/page/OrganizerProfileContent";
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";

export default function OrganizerProfilePage() {
  return (
    <>
      <RouteTitle links={[{ label: "Perfil", href: "/organizer/profile" }]} />
      <div className="overflow-y-auto flex-1">
        <OrganizerProfileContent />
      </div>
    </>
  );
}
