import type { RadioButtonOptions } from "~/components/radio-button/model";

export const distributionOptions: RadioButtonOptions[] = [
  {
    label: "accumulating",
    name: "dist_type",
    value: "accumulating",
    additionalInfo: "accumulating_info",
  },
  {
    label: "distributing",
    name: "dist_type",
    value: "distributing",
    disabled: true, // Disable this option for now as we don't have the logic to handle it yet
    additionalInfo: "distributing_info",
  },
];
