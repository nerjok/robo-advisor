import React from "react";
import type { Step2Props } from "../steps.model";
import { Step } from "~/models/steps";
import { selectedValues } from "~/store/selectors/investment-state.selectors";
import { useAppSelector } from "~/store/hooks";
import InfoCard from "~/components/info-card/info-card";
import CardHeader from "~/components/card-header/card-header";
import Warning from "~/components/warning/warning";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Step4 = (props: Step2Props) => {
  const { t, i18n } = useTranslation();
  const investmentValues = useAppSelector(selectedValues);
  const navigate = useNavigate();

  const complete = () => {
    console.log("Completing Step 4 with values:", investmentValues);
    setTimeout(() => {
      // props.onComplete(Step.AmountsAndDuration);
      navigate("/routes/results");
    }, 3000);
  };
  const back = () => props.onComplete(Step.AssetClass);
  return (
    <>
      <main className="flex-1 flex justify-center py-8 px-4 sm:px-10 lg:px-20">
        <div className="layout-content-container flex flex-col max-w-4xl flex-1">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="text-4xl font-black tracking-tight">
              {t("final_details")}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              {t("tailor_investment_pref")}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight">
              {t("reinvest_tax")}
            </h2>

            <div className="rounded-xl border border-primary/10 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <div className="flex flex-col gap-6">
                <CardHeader
                  icon="assignment_turned_in"
                  title={t("selections_summary")}
                  description={t("review_details")}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <InfoCard
                    title={t("investment_amount")}
                    value={investmentValues.perYearInvestment}
                  />

                  <InfoCard
                    title={t("time_horizon")}
                    value={`${investmentValues.years} years`}
                  />
                  <InfoCard
                    title={t('region')}
                    value={Object.entries(investmentValues.selectedRegions)
                      .filter(([, isSelected]) => isSelected)
                      .map(([region]) => region)
                      .join(", ")}
                  />

                  <InfoCard
                    title={t("risk_tolerance")}
                    value={investmentValues.riskLevel}
                  />
                  <InfoCard
                    title={t("asset_type")}
                    value={
                      Array.isArray(investmentValues.assetClasses)
                        ? investmentValues.assetClasses.join(", ")
                        : investmentValues.assetClasses
                    }
                    cardClass="sm:col-span-2"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/10 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <CardHeader
                icon="restart_alt"
                title={t("reinvestment_preferences")}
                description={t("auto_reinvest")}
              />
            </div>

            <div className="rounded-xl border border-primary/10 bg-white dark:bg-slate-900 p-6 shadow-sm">
              <CardHeader
                icon="gavel"
                title={t("tax_considerations")}
                description={t("tax_considerations_desc")}
              />
            </div>
            <Warning icon="info" message={t("our_advisors")} />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
              <button
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                onClick={back}
              >
                <span className="material-symbols-outlined text-sm">
                  arrow_back
                </span>
                {t('previous_step')}
              </button>
              <button
                className="w-full sm:w-auto px-12 py-3 rounded-lg font-bold text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                onClick={complete}
              >
                
                {t('complete')}
                <span className="material-symbols-outlined text-sm">
                  check_circle
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Step4;
