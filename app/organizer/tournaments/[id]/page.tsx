/* COMPONENTS */
import { OrganizerTournamentsManageContent } from "@/content/dashboard/organizer/tournaments/content/manage/page/OrganizerTournamentsManageContent";

export default async function OrganizerTournamentsManagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <OrganizerTournamentsManageContent slug={id} />;
}
