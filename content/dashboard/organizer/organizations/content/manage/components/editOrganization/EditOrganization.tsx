/* COMPONENTS */
import { EditOrganizationInfoForm } from "./components/editOrganizationInfoForm/EditOrganizationInfoForm";
import { EditOrganizationPhotoForm } from "./components/editOrganizationPhotoForm/EditOrganizationPhotoForm";

export function EditOrganization() {
  return (
    <div className="w-1/3 min-w-1/3 h-full p-6 rounded-2xl border border-line">
      <p className="text-xl font-extralight mb-6">Tu organización</p>

      <EditOrganizationPhotoForm />
      <EditOrganizationInfoForm />
    </div>
  );
}
