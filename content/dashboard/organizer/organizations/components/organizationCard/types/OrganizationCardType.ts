/* TYPES */
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type OrganizationCardType = {
  isSelected: boolean;
  image: StaticImport;
  name: string;
  description: string;
};
