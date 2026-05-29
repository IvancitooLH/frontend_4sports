"use client";

/* HOOKS */
import { useFormContext } from "react-hook-form";

/* TYPES */
import { OnboardingForm } from "@/content/auth/onboarding/types/OnboardingForm";

export function OnboardingGeneralFormStep1() {
  const {
    control,
    formState: { errors },
  } = useFormContext<OnboardingForm>();

  return <div>
    
  </div>;
}
