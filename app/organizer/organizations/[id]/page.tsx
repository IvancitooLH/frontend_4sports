/* COMPONENTS */
import { OrganizerManageOrganizationContent } from "@/content/dashboard/organizer/organizations/content/manage/page/OrganizerManageOrganizationContent";

export default async function OrganizerEditOrganizationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <OrganizerManageOrganizationContent slug={id} />;
}
