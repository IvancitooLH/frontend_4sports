/* COMPONENTS */
import { RouteTitle } from "@/content/shared/ui/routeTitle/RouteTitle";

export function OrganizerTournamentsManageContent({ slug }: { slug: string }) {
  const name = "Torneo Verano II";

  return (
    <>
      <RouteTitle
        links={[
          { label: "Torneos", href: "/organizer/tournaments" },
          { label: name, href: `/organizer/tournaments/${slug}` },
        ]}
      />
      <div className="overflow-y-auto flex-1">
        {/* <OrganizerTournamentsContent /> */}
      </div>
    </>
  );
}
