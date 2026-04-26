import { useState } from "react";
import type { Step2Props } from "../steps.model";
import { Step } from "~/models/steps";
import RiskCard from "~/components/risk-card/risk-card";
import { RiskLevel } from "~/models/risk.level";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { selectedRiskLevel } from "~/store/selectors/investment-state.selectors";
import { setRiskLevel } from "~/store/reducers/investment-state.reducers";
import { useTranslation } from "react-i18next";

const Step2 = (props: Step2Props) => {
  const { t, i18n } = useTranslation();
  const riskLevel = useAppSelector(selectedRiskLevel);
  const dispatch = useAppDispatch();

  const [selectedRisk, setSelectedRisk] = useState<RiskLevel>(riskLevel);
  const selectRisk = (risk: RiskLevel) => {
    setSelectedRisk(risk);
  };

  const complete = () => {
    dispatch(setRiskLevel(selectedRisk));
    props.onComplete(Step.AssetClass);
  };

  const back = () => props.onComplete(Step.AmountsAndDuration);

  return (
    <>
      <main className="flex flex-1 justify-center py-8 md:py-12 px-4 md:px-0">
        <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <RiskCard
              title={t("low_risk")}
              name="risk"
              value={RiskLevel.Low}
              selected={selectedRisk === RiskLevel.Low}
              onChange={selectRisk}
              contentText={t("low_risk_descr")}
              imageClassName="from-green-400 to-emerald-600"
            >
              <span className="material-symbols-outlined text-green-500">
                shield
              </span>
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">
                {t("low_risk")}
              </h3>
            </RiskCard>

            <RiskCard
              title={t("medium_risk")}
              value={RiskLevel.Medium}
              selected={selectedRisk === RiskLevel.Medium}
              onChange={selectRisk}
              name="risk"
              contentText={t("medium_risk_descr")}
              imageClassName="from-primary to-blue-700"
            >
              <span className="material-symbols-outlined text-primary">
                balance
              </span>
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">
                {t("medium_risk")}
              </h3>
            </RiskCard>

            <RiskCard
              title="High Risk"
              value={RiskLevel.High}
              selected={selectedRisk === RiskLevel.High}
              onChange={selectRisk}
              name="risk"
              contentText={t("high_risk_descr")}
              imageClassName="from-orange-400 to-red-600"
            >
              <span className="material-symbols-outlined text-orange-500">
                trending_up
              </span>
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight">
                {t("high_risk")}
              </h3>
            </RiskCard>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900/50 p-6 rounded-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-primary">
                  analytics
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100">
                  {t("unsure_which_risk")}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t("view_risk_by_side")}
                </p>
              </div>
            </div>
            {/* <button className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
              Compare Profiles
            </button> */}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-slate-200 dark:border-slate-800">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              onClick={back}
            >
              <span className="material-symbols-outlined text-sm">
                arrow_back
              </span>
              <span>{t('back')}</span>
            </button>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <p className="hidden md:block text-slate-500 text-sm">
                {t("you_can_change_later")}
              </p>
              <button
                className="w-full sm:w-auto px-12 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                onClick={complete}
              >
                {t('continue')}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Step2;
