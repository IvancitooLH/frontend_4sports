/* TYPES */
import { Role } from "@/content/auth/onboarding/types/Role";

export type OnboardingForm = {
  /* Común */
  name: string;
  role: Role;

  /* Jugador */
  position?: string;
  team?: string;

  /* Organizador */
  organizationName?: string;
  organizationType?: string;
};
