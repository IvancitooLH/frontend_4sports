"use client";

/* COMPONENTS */
import { TournamentAddStep1 } from "./components/tournamentAddStep1/TournamentAddStep1";
import { DinamicButton } from "@/content/shared/form/dinamicButton/DinamicButton";
import { useAnnouncement } from "@/content/shared/ui/annoucement/stores/announcementStore";

/* HOOKS */
import { useMemo, useState } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";

/* ICONS */
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

/* LIBS */
import { AnimatePresence, motion } from "framer-motion";

/* NAVIGATION */
import { useRouter } from "next/navigation";

/* TYPES */
import { TournamentAddFormType } from "./types/tournamentAddFormType";
import { SectionContainer } from "@/content/shared/ui/sectionContainer/SectionContainer";

type Step = {
  title: string;
  description?: string;
  fields: (keyof TournamentAddFormType)[];
  component: React.ReactNode;
};

export function OrganizerTournamentAddContent() {
  const router = useRouter();

  const { setAnnouncement } = useAnnouncement();

  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [finish, setFinish] = useState(false);

  const methods = useForm<TournamentAddFormType>({
    mode: "onTouched",
    shouldUnregister: false,
    defaultValues: {
      name: "",
      description: "",
      sport: "",
      tags: [],
      registrationInterval: undefined,
      gameInterval: undefined,
    },
  });

  const { trigger, handleSubmit, resetField } = methods;

  const type = useWatch({
    control: methods.control,
    name: "type",
  });

  const steps: Step[] = useMemo(() => {
    const commonSteps: Step[] = [
      {
        title: "Paso 1 de 6",
        description: "Información básica",
        fields: [
          "name",
          "description",
          "sport",
          "tags",
          "registrationInterval",
          "gameInterval",
        ],
        component: <TournamentAddStep1 />,
      },
      {
        title: "Paso 2 de 6",
        description: "Formato de competición",
        fields: ["type"],
        component: <></>,
      },
    ];

    const roundRobinSteps: Step[] = [
      {
        title: "Paso 3 de 6",
        description: "Todos contra todos",
        fields: ["teamsQuantityRoundRobin", "laps"],
        component: <></>,
      },
    ];

    const singleEliminationSteps: Step[] = [
      {
        title: "Paso 3 de 6",
        description: "Eliminación directa",
        fields: [
          "teamsQuantityDirectElimination",
          "thirdPlaceMatch",
          "bestOfX",
        ],
        component: <></>,
      },
    ];

    const finalSteps: Step[] = [
      {
        title: "Paso 4 de 6",
        description: "Reglas de elegibilidad",
        fields: ["sex", "ageGap", "templateValidation", "eligibility"],
        component: <></>,
      },
      {
        title: "Paso 5 de 6",
        description: "Campos de jugadores",
        fields: ["sexVR", "birthdayVR", "emailVR", "telphoneVR", "jerseyVR"],
        component: <></>,
      },
      {
        title: "Paso 6 de 6",
        description: "Modo borrador",
        fields: [],
        component: <></>,
      },
    ];

    if (type === "round-robin") {
      resetField("teamsQuantityDirectElimination");
      resetField("thirdPlaceMatch");
      resetField("bestOfX");
    }

    if (type === "single-elimination") {
      resetField("teamsQuantityRoundRobin");
      resetField("laps");
    }

    return [
      ...commonSteps,
      ...(type === "round-robin" ? roundRobinSteps : singleEliminationSteps),
      ...finalSteps,
    ];
  }, [type, resetField]);

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;

  const nextStep = async () => {
    const isValid = await trigger(currentStep.fields);

    if (!isValid) return;

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step === 0) return;

    setStep((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<TournamentAddFormType> = async (data) => {
    setSaving(true);

    const cleanData = { ...data };

    if (cleanData.type === "round-robin") {
      delete cleanData.teamsQuantityDirectElimination;
      delete cleanData.thirdPlaceMatch;
      delete cleanData.bestOfX;
    }

    if (cleanData.type === "single-elimination") {
      delete cleanData.teamsQuantityRoundRobin;
      delete cleanData.laps;
    }

    setTimeout(() => {
      console.log(cleanData);
      setAnnouncement({
        isActivated: true,
        announceType: "ok",
        message: "Torneo guardado correctamente",
      });
      setSaving(false);
      setFinish(true);

      setTimeout(() => {
        router.push("/organizer/tournaments/");
      }, 1000);
    }, 2000);
  };

  return (
    <FormProvider {...methods}>
      <SectionContainer>
        <motion.div
          className="w-full h-dvh flex flex-col"
          animate={{
            opacity: finish ? 0 : 1,
            transition: {
              duration: 0.7,
              ease: "easeInOut",
            },
          }}
        >
          <div className="w-full h-fit z-10 py-6 border-b border-line">
            <h1 className="text-center font-bebas text-ink text-5xl mb-2">
              Agregar <span className="text-primary">torneo</span>
            </h1>

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-center mb-2 shrink-0 text-ink">
              {currentStep.title}
            </h2>

            {/* DESCRIPTION */}
            <h3 className="text-lg text-center mb-2 shrink-0 text-muted">
              {currentStep.description}
            </h3>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-6 w-full h-fit mt-4 shrink-0">
              <DinamicButton
                action={prevStep}
                disabled={step === 0}
                disabledSpinner={false}
                label=""
                spinFromText={false}
                icon={<ChevronLeft className="size-4" />}
                twClassName="w-fit h-fit p-2 rounded-full"
                type={step === 0 ? "disabled" : "filled"}
              />

              {/* DOTS */}
              <div className="flex items-center justify-center gap-3">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setStep(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      index === step ? "bg-primary scale-150" : "bg-faint"
                    }`}
                  />
                ))}
              </div>

              {!isLastStep ? (
                <DinamicButton
                  action={nextStep}
                  disabled={false}
                  disabledSpinner={false}
                  label=""
                  spinFromText={false}
                  icon={<ChevronRight className="size-4" />}
                  twClassName="w-fit h-fit p-2 rounded-full"
                  type="filled"
                />
              ) : (
                <DinamicButton
                  action={handleSubmit(onSubmit)}
                  disabled={saving}
                  disabledSpinner={true}
                  label=""
                  spinFromText={false}
                  icon={<Check className="size-4" />}
                  twClassName="w-fit h-fit p-2 rounded-full"
                  type={saving ? "disabled" : "filled"}
                />
              )}
            </div>
          </div>

          {/* ANIMATED CONTENT */}
          <div className="overflow-y-auto overflow-x-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -40,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="w-1/2 m-auto min-h-fit flex items-center"
              >
                {currentStep.component}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </SectionContainer>
    </FormProvider>
  );
}
