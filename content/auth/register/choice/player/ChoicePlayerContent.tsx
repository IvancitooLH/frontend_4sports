"use client";

/* COMPONENTS */
import { TitleWithDescription } from "@/content/shared/ui/titleWithDescription/TitleWithDescription";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import { DinamicCombobox } from "@/content/shared/form/dinamicComboBox/DinamicCombobox";
import { DinamicInputNumber } from "@/content/shared/form/dinamicInputNumber/DinamicInputNumber";
import { DinamicInputFile } from "@/content/shared/form/dinamicInputFile/DinamicInputFile";
import { DinamicInputText } from "@/content/shared/form/dinamicInputText/DinamicInputText";
import { DinamicCheckboxBoolean } from "@/content/shared/form/dinamicCheckboxBoolean/DinamicCheckboxBoolean";

/* DATA */
import { phoneCountries } from "@/content/shared/utils/phoneCountries";

/* HOOKS */
import { useEffect, useMemo, useState } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* STORES */
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* TYPES */
import { ChoicePlayerForm } from "@/content/auth/register/choice/player/types/choicePlayerForm";

/* UTILS */
import { Country, State, City } from "country-state-city";

export function ChoicePlayerContent() {
  const router = useRouter();

  const { setAnnouncement } = useAnnouncement();
  const [saving, setSaving] = useState(false);

  const methods = useForm<ChoicePlayerForm>({
    defaultValues: {
      pais: "",
      estado: "",
      ciudad: "",
      lada: "",
      telefono: "",
      buscando: false,
    },
  });

  const { setValue } = methods;

  const ladas = phoneCountries.map((p) => p.label);

  const selectedCountry = useWatch({
    control: methods.control,
    name: "pais",
  });
  const selectedState = useWatch({
    control: methods.control,
    name: "estado",
  });

  // Obtener países
  const countries = useMemo(() => {
    return Country.getAllCountries();
  }, []);

  // Obtener estados según país
  const states = useMemo(() => {
    /* if (!selectedCountry) return [];

    console.log("Se seleccionó un nuevo país")
    console.log(State.getStatesOfCountry(selectedCountry))
    console.log(selectedCountry);

    return State.getStatesOfCountry(selectedCountry); */

    if (!selectedCountry) return [];

    const country = Country.getAllCountries().find(
      (c) => c.name === selectedCountry,
    );

    if (!country) return [];

    return State.getStatesOfCountry(country.isoCode);
  }, [selectedCountry]);

  // Obtener ciudades según estado
  const cities = useMemo(() => {
    if (!selectedCountry || !selectedState) return [];

    //return City.getCitiesOfState(selectedCountry, selectedState);

    // Buscar país
    const country = Country.getAllCountries().find(
      (c) => c.name === selectedCountry,
    );

    if (!country) return [];

    // Buscar estado
    const state = State.getStatesOfCountry(country.isoCode).find(
      (s) => s.name === selectedState,
    );

    if (!state) return [];

    // Obtener ciudades
    return City.getCitiesOfState(country.isoCode, state.isoCode);
  }, [selectedCountry, selectedState]);

  const onSubmit = async (data: ChoicePlayerForm) => {
    try {
      setSaving(true);

      console.log(data);
      setAnnouncement({
        isActivated: true,
        announceType: "ok",
        message: "Sesión iniciada correctamente",
      });
      router.push("/player/home");

      setSaving(false);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const countries1 = countries.map((c) => c.name);

  // Reiniciar estado y ciudad cuando cambia país
  useEffect(() => {
    setValue("estado", "");
    setValue("ciudad", "");
  }, [selectedCountry, setValue]);

  // Reiniciar ciudad cuando cambia estado
  useEffect(() => {
    setValue("ciudad", "");
  }, [selectedState, setValue]);

  return (
    <div className="h-dvh w-full flex items-center flex-col gap-4 overflow-y-auto pt-24">
      <TitleWithDescription
        title="¡Seré un jugador!"
        description="Completa el siguiente formulario para terminar tu registro"
      />

      <div className="w-full lg:w-2/4 h-fit mt-6">
        <FormProvider {...methods}>
          {/* FOTO DE PERFIL */}
          <DinamicInputFile<ChoicePlayerForm>
            name="foto"
            variant="avatar"
            rules={{
              /* required: "La foto es obligatoria", */
              validate: (file) => {
                if (!(file instanceof File)) return true;

                if (file.size > 5_000_000) {
                  return "El archivo debe pesar menos de 5MB";
                }

                return true;
              },
            }}
          />

          {/* USERNAME */}
          <DinamicInputText<ChoicePlayerForm>
            name="username"
            label="Username"
            type="text"
            placeholder="Nombre cool"
            rules={{}}
          />

          <div className="grid grid-cols-2 gap-4 w-full h-fit">
            {/* NOMBRES */}
            <DinamicInputText<ChoicePlayerForm>
              name="nombres"
              label="Nombres"
              type="text"
              placeholder="Ingresa tus nombres"
              rules={{}}
            />

            {/* APELLIDOS */}
            <DinamicInputText<ChoicePlayerForm>
              name="apellidos"
              label="Apellidos"
              type="text"
              placeholder="Ingresa tus apellidos"
              rules={{}}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 w-full h-fit">
            {/* LADAS */}
            <DinamicCombobox<ChoicePlayerForm>
              name="lada"
              items={ladas}
              label="Lada"
              placeholder="Seleccionar lada"
              rules={{}}
            />

            {/* TELÉFONO */}
            <DinamicInputNumber<ChoicePlayerForm>
              name="telefono"
              placeholder="0000000000"
              label="Teléfono"
              min={1}
              max={99}
              rules={{}}
            />
          </div>

          <div className="grid grid-cols-3 gap-4 w-full h-fit">
            {/* PAÍS */}
            <DinamicCombobox<ChoicePlayerForm>
              name="pais"
              items={countries1}
              label="País"
              placeholder="Seleccionar país"
              rules={{}}
            />

            {/* ESTADO */}
            <DinamicCombobox<ChoicePlayerForm>
              name="estado"
              items={states.map((s) => s.name)}
              label="Estado"
              placeholder="Seleccionar estado"
              rules={{}}
            />

            {/* CIUDAD */}
            <DinamicCombobox<ChoicePlayerForm>
              name="ciudad"
              items={cities.map((c) => c.name)}
              label="Ciudad"
              placeholder="Seleccionar ciudad"
              rules={{}}
            />
          </div>

          {/* POSICIÓN FAVORITA */}
          <DinamicInputText<ChoicePlayerForm>
            name="posicion"
            label="Posición preferida (opcional)"
            type="text"
            placeholder="Ingresa tu posición preferida"
            rules={{}}
          />

          <div className="w-full h-fit flex justify-center">
            <DinamicCheckboxBoolean<ChoicePlayerForm>
              name="buscando"
              label="Estoy buscando equipo"
            />
          </div>

          <DinamicButton
            action={methods.handleSubmit(onSubmit)}
            twClassName="w-1/2 h-fit py-2 px-4 rounded-xl mb-24 m-auto"
            disabled={saving}
            type={saving ? "disabled" : "filled"}
            label="Registrarse"
          />
        </FormProvider>
      </div>
    </div>
  );
}
