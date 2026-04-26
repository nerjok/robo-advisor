import type { CheckboxOptions } from "~/components/checkbox/model";

export interface Regions {
  global: boolean;
  us: boolean;
  europe?: boolean;
  emerging?: boolean;
}

export enum PreferredRegions {
  Global = "global",
  US = "us",
  Europe = "europe",
  EmergingMarkets = "emerging",
}

export const regionsOptions = [
  { label: "Global", name: PreferredRegions.Global },
  { label: "US", name: PreferredRegions.US },
  { label: "Europe", name: PreferredRegions.Europe },
  { label: "Emerging Markets", name: PreferredRegions.EmergingMarkets },
] satisfies CheckboxOptions[];
