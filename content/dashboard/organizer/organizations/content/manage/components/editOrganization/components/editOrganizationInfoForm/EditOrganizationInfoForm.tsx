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
      <div className="flex md:flex-row flex-col md:gap-6 gap-2 items-center mb-2">
        <div className="flex flex-col w-full h-fit">
          {/* NOMBRE */}
          <DinamicInputText<EditOrganizationFormType>
            name="orgName"
            label="Nombre de organización"
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
        disabled={saving}
        disabledSpinner={true}
        spinFromText={true}
      />
    </FormProvider>
  );
}
