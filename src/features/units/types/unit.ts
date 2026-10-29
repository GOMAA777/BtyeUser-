export type { UnitType, UnitImage, AddUnitInput } from "../schemas/add-unit-schema";

export interface UnitAmenity {
  id: string;
  name: string;
  iconPath: string;
}

export interface UnitTypeOption {
  id: "studio" | "private_apartment" | "single_room" | "duplex_other";
  title: string;
  subtitle: string;
  iconPath: string;
}
