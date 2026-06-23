/* TYPES */
import { DateRange } from "react-day-picker";

export type TournamentAddFormType = {
  /* STEP 1 */
  image: File;
  name: string;
  description: string;
  sport: string;
  tags: string[];
  rules?: File;
  registrationInterval: DateRange;
  gameInterval: DateRange;

  /* STEP 2 */
  type: "round-robin" | "single-elimination";

  /* STEP 3 -> ROUND-ROBIN */
  teamsQuantityRoundRobin?: number;
  laps?: boolean;

  /* STEP 3 -> DIRECT-ELIMINATION */
  teamsQuantityDirectElimination?: number;
  thirdPlaceMatch?: boolean;
  bestOfX?: string;

  /* STEP 4 */
  sex: string;
  ageGap: { number1: number; number2: number };
  templateValidation: string;
  eligibility: string;

  /* STEP 5 */
  sexVR: { visible: boolean; required: boolean };
  birthdayVR: { visible: boolean; required: boolean };
  emailVR: { visible: boolean; required: boolean };
  telphoneVR: { visible: boolean; required: boolean };
  jerseyVR: { visible: boolean; required: boolean };
};
