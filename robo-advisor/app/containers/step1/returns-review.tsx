import { useMemo } from "react";
import LinearChart from "~/components/linear-chart/linear-chart";
import { calculatePlans, calculateYieldPerYear } from "./utils";
import PlanItem from "./components/plan-item";
import { useTranslation } from "react-i18next";

function ReturnsReview(props: { amount: number; duration: string }) {
  const { t, i18n } = useTranslation();
  const totalInvestment = useMemo(() => {
    const amt = Number(props.amount) || 0;
    const yrs = props.duration === "10y" ? 10 : parseInt(props.duration, 10);
    return amt * 12 * yrs;
  }, [props.amount, props.duration]);

  const growthRates = useMemo(() => {
    const perYearInvestment = Number(props.amount) * 12;
    const years = props.duration === "10y" ? 10 : parseInt(props.duration, 10);

    const chartData = calculateYieldPerYear(perYearInvestment, years);

    return chartData;
  }, [props.amount, props.duration]);

  const investmentPlans = useMemo(() => {
    return calculatePlans(growthRates, totalInvestment);
  }, [growthRates, totalInvestment]);

  return (
    <div className="lg:flex flex-col gap-6 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
      {/* <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">Estimated Returns</h3>
      </div> */}

      <div>
        <LinearChart chartData={growthRates} />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
              {t('total_invested')}
            </p>
            <p className="text-lg font-black text-primary">
              €{totalInvestment}
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">
              Total Invested
            </p>
            <p className="text-lg font-black text-primary">€{totalInvestment}</p>
          </div>
        </div> */}

        <h4 className="text-with-lines font-bold uppercase text-slate-500">
          {t('plans')}
        </h4>

        {/* {investmentPlans.map((plan) => (
          <PlanItem
            key={plan.plan}
            planName={plan.plan}
            totalInvestment={plan.total}
            growthRate={parseFloat(plan.rate)}
          />
        ))} */}

        <div className="grid grid-cols-2 gap-4">
          {investmentPlans.map((plan) => (
            <PlanItem
              key={plan.plan}
              planName={t(plan.plan)}
              totalInvestment={plan.total}
              growthRate={parseFloat(plan.rate)}
            />
          ))}
        </div>
      </div>

      {/* Comment */}
      <div className="p-4 bg-primary/5 rounded-xl flex gap-3 items-start border border-primary/10">
        <span className="material-symbols-outlined text-primary">
          auto_awesome
        </span>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic">
          "{t('based_on_risk_profile')}"
        </p>
      </div>
    </div>
  );
}

export default ReturnsReview;
