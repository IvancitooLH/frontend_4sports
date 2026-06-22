/* COMPONENTS */
import { OrganizerPaymentHistoryContent } from "@/content/dashboard/organizer/organizations/content/paymentHistory/page/OrganizerPaymentHistoryContent";

export default async function OrganizerPaymentHistoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <OrganizerPaymentHistoryContent slug={id} />;
}
