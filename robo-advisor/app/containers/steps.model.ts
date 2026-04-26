import type { Step } from "~/models/steps";

export interface Step2Props {
  onComplete: (step: Step) => void;
}