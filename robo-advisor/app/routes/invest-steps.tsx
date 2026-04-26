import React, { act, use, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ProgressSection from "~/components/progress-section/progress-section";
import Step1 from "~/containers/step1/step1";
import Step2 from "~/containers/step2/step2";
import Step3 from "~/containers/step3/step3";
import Step4 from "~/containers/step4/step4";
import { Step } from "~/models/steps";

export default function InvestSteps() {
  const [active, setActive] = useState<Step>(Step.AmountsAndDuration);
    const { t, i18n } = useTranslation();

  const activeStepNumber = useMemo(() => {
    return active + 1;
  }, [active]);

  const completeSection = (nextStep: Step): void => {
    console.log("Section completed!", nextStep);
    setActive((prev) => nextStep);
  };

  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 lg:px-40">
        <div className="w-full">
          <ProgressSection
            sectionName={t('goals_section')}
            step={activeStepNumber}
            totalSteps={4}
          />
        </div>
        {
          {
            [Step.AmountsAndDuration]: <Step1 onComplete={completeSection} />,
            [Step.Risk]: <Step2 onComplete={completeSection} />,
            [Step.AssetClass]: <Step3 onComplete={completeSection} />,
            [Step.Review]: <Step4 onComplete={completeSection} />,
          }[active]
        }
      </main>
    </>
  );
}
