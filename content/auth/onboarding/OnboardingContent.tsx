"use client";

import { useMemo, useState } from "react";

import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";

import { AnimatePresence, motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Role = "player" | "organizer";

type FormValues = {
  /* COMMON */
  name: string;
  role: Role;

  /* PLAYER */
  position?: string;
  team?: string;

  /* ORGANIZER */
  organizationName?: string;
  organizationType?: string;
};

type Step = {
  title: string;
  description?: string
  fields: (keyof FormValues)[];
  component: React.ReactNode;
};

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export function OnboardingContent() {
  const [step, setStep] = useState(0);

  const methods = useForm<FormValues>({
    mode: "onTouched",
    shouldUnregister: false,
    defaultValues: {
      name: "",
      role: "player",

      position: "",
      team: "",

      organizationName: "",
      organizationType: "",
    },
  });

  const { trigger, handleSubmit, resetField } = methods;

  const role = useWatch({
    control: methods.control,
    name: "role",
  });

  /* ---------------------------------------------------------------------- */
  /*                               DYNAMIC STEPS                            */
  /* ---------------------------------------------------------------------- */

  const steps: Step[] = useMemo(() => {
    const commonSteps: Step[] = [
      {
        title: "Información básica",
        fields: ["name"],
        component: <BasicInfoStep />,
      },

      {
        title: "Selecciona tu rol",
        description: "¿Para que deseas utilizar 4Sports?",
        fields: ["role"],
        component: <RoleSelectionStep />,
      },
    ];

    const playerSteps: Step[] = [
      {
        title: "Perfil de jugador",
        fields: ["position", "team"],
        component: <PlayerStep />,
      },
    ];

    const organizerSteps: Step[] = [
      {
        title: "Perfil de organizador",
        fields: ["organizationName", "organizationType"],
        component: <OrganizerStep />,
      },
    ];

    if (role === "player") {
      resetField("organizationName");
      resetField("organizationType");
    }

    if (role === "organizer") {
      resetField("position");
      resetField("team");
    }

    return [
      ...commonSteps,
      ...(role === "player" ? playerSteps : organizerSteps),
    ];
  }, [role, resetField]);

  const currentStep = steps[step];

  const isLastStep = step === steps.length - 1;

  /* ---------------------------------------------------------------------- */
  /*                               NAVIGATION                               */
  /* ---------------------------------------------------------------------- */

  const nextStep = async () => {
    const isValid = await trigger(currentStep.fields);

    if (!isValid) return;

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step === 0) return;

    setStep((prev) => prev - 1);
  };

  /* ---------------------------------------------------------------------- */
  /*                                 SUBMIT                                 */
  /* ---------------------------------------------------------------------- */

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const cleanData = { ...data };

    if (cleanData.role === "player") {
      delete cleanData.organizationName;
      delete cleanData.organizationType;
    }

    if (cleanData.role === "organizer") {
      delete cleanData.position;
      delete cleanData.team;
    }

    console.log(cleanData);

    alert(JSON.stringify(cleanData, null, 2));
  };

  /* ---------------------------------------------------------------------- */
  /*                                  JSX                                   */
  /* ---------------------------------------------------------------------- */

  return (
    <FormProvider {...methods}>
      <div className="w-full max-w-lg mx-auto rounded-3xl border border-neutral-200 p-8 flex flex-col gap-8">
        {/* HEADER */}
        <div className="flex flex-col gap-5">
          {/* DOTS */}
          <div className="flex items-center justify-center gap-3">
            {steps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setStep(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === step ? "bg-black scale-125" : "bg-neutral-300"
                }`}
              />
            ))}
          </div>

          {/* TITLE */}
          <div className="text-center">
            <h2 className="text-2xl font-bold">{currentStep.title}</h2>
            <h3 className="text-lg text-muted">{currentStep.description}</h3>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          {/* ANIMATED CONTENT */}
          <div className="min-h-55 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${role}-${step}`}
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
              >
                {currentStep.component}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 0}
              className="px-4 py-2 rounded-xl border border-neutral-300 disabled:opacity-40"
            >
              Atrás
            </button>

            {!isLastStep ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 rounded-xl bg-black text-white"
              >
                Siguiente
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-green-600 text-white"
              >
                Confirmar
              </button>
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

/* -------------------------------------------------------------------------- */
/*                             COMMON STEP 1                                  */
/* -------------------------------------------------------------------------- */

function BasicInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Nombre</label>

      <input
        type="text"
        placeholder="Tu nombre"
        className="border border-neutral-300 rounded-xl px-4 py-3 outline-none"
        {...register("name", {
          required: "El nombre es obligatorio",
        })}
      />

      {errors.name && (
        <span className="text-sm text-red-500">{errors.name.message}</span>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             COMMON STEP 2                                  */
/* -------------------------------------------------------------------------- */

function RoleSelectionStep() {
  const { watch, setValue } = useFormContext<FormValues>();

  const role = watch("role");

  return (
    <div className="grid grid-cols-2 gap-4">
      <RoleCard
        active={role === "player"}
        title="Jugador"
        onClick={() => {
          setValue("role", "player");
        }}
      />

      <RoleCard
        active={role === "organizer"}
        title="Organizador"
        onClick={() => {
          setValue("role", "organizer");
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PLAYER STEP                                  */
/* -------------------------------------------------------------------------- */

function PlayerStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label>Posición</label>

        <input
          type="text"
          placeholder="Forward"
          className="border border-neutral-300 rounded-xl px-4 py-3 outline-none"
          {...register("position", {
            required: "La posición es obligatoria",
          })}
        />

        {errors.position && (
          <span className="text-sm text-red-500">
            {errors.position.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Equipo</label>

        <input
          type="text"
          placeholder="FC Example"
          className="border border-neutral-300 rounded-xl px-4 py-3 outline-none"
          {...register("team", {
            required: "El equipo es obligatorio",
          })}
        />

        {errors.team && (
          <span className="text-sm text-red-500">{errors.team.message}</span>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                             ORGANIZER STEP                                 */
/* -------------------------------------------------------------------------- */

function OrganizerStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label>Nombre organización</label>

        <input
          type="text"
          placeholder="Liga MX"
          className="border border-neutral-300 rounded-xl px-4 py-3 outline-none"
          {...register("organizationName", {
            required: "El nombre es obligatorio",
          })}
        />

        {errors.organizationName && (
          <span className="text-sm text-red-500">
            {errors.organizationName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label>Tipo organización</label>

        <input
          type="text"
          placeholder="Torneo"
          className="border border-neutral-300 rounded-xl px-4 py-3 outline-none"
          {...register("organizationType", {
            required: "El tipo es obligatorio",
          })}
        />

        {errors.organizationType && (
          <span className="text-sm text-red-500">
            {errors.organizationType.message}
          </span>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                ROLE CARD                                   */
/* -------------------------------------------------------------------------- */

type RoleCardProps = {
  title: string;
  active: boolean;
  onClick: () => void;
};

function RoleCard({ title, active, onClick }: RoleCardProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`h-40 rounded-2xl border-2 transition-all ${
        active ? "border-black bg-black text-white" : "border-neutral-300"
      }`}
    >
      <span className="text-lg font-semibold">{title}</span>
    </motion.button>
  );
}
