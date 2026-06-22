/* COMPONENTS */
import { OrganizerMembersContent } from "@/content/dashboard/organizer/organizations/content/members/page/OrganizerMembersContent";

export default async function OrganizerMembersPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <OrganizerMembersContent slug={id} />;
}
