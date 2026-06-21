"use client";

/* COMPONENTS */
import { DinamicInputText } from "@/content/shared/form/dinamicInputText/DinamicInputText";
import { DinamicTextArea } from "@/content/shared/form/dinamicTextArea/DinamicTextArea";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";

/* HOOKS */
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

/* ICONS */
import { Save } from "lucide-react";

/* STORES */
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* TYPES */
import { EditOrganizationFormType } from "./types/editOrganizationFormType";
import { EditOrganizationPhotoForm } from "../editOrganizationPhotoForm/EditOrganizationPhotoForm";

export function EditOrganizationInfoForm() {
  const { setAnnouncement } = useAnnouncement();
  const [saving, setSaving] = useState(false);

  const methods = useForm<EditOrganizationFormType>({
    defaultValues: {
      orgName: "",
      orgDescription: "",
    },
  });

  const onSubmit = async (data: EditOrganizationFormType) => {
    try {
      setSaving(true);

      console.log(data);

      setTimeout(() => {
        setAnnouncement({
          isActivated: true,
          announceType: "ok",
          message: "Datos de la organización guardados correctamente",
        });
      }, 1000);
    } catch (error) {
      setSaving(false);
      console.log("Error", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-6 border border-line rounded-2xl p-6">
        <p className="text-xl font-extralight">Tu organización</p>

        <div className="flex gap-6 w-full items-center">
          <EditOrganizationPhotoForm />

          <div className="flex flex-col w-full h-fit">
            {/* NOMBRE */}
            <DinamicInputText<EditOrganizationFormType>
              name="orgName"
              label="Nombre"
              type="text"
              placeholder="Ingresa el nombre de la organización"
              rules={{}}
            />

            {/* DESCRIPCIÓN */}
            <DinamicTextArea<EditOrganizationFormType>
              name="orgDescription"
              placeholder="Ingrese la descripción de la organización"
              label="Descripción"
              twHeight="h-20"
              twMarginBottom="mb-0"
              rules={{}}
            />
          </div>
        </div>

        {/* BOTÓN GUARDAR */}
        <DinamicButton
          action={methods.handleSubmit(onSubmit)}
          type={saving ? "disabled" : "filled"}
          label="Guardar"
          icon={<Save className="size-4 min-h-4 min-w-4" />}
          twClassName="py-1"
          disabled={saving}
          disabledSpinner={true}
          spinFromText={true}
        />
      </div>
    </FormProvider>
  );
}
