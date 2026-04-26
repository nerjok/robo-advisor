import { useEffect, useState, type ChangeEvent } from "react";
import type { Step2Props } from "../steps.model";

import ReturnsReview from "./returns-review";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { setPerYearInvestment, setYears } from "~/store/reducers/investment-state.reducers";
import { Step } from "~/models/steps";
import { selectPerYearInvestment, selectYears } from "~/store/selectors/investment-state.selectors";
import { useTranslation } from "react-i18next";

const Step1 = (props: Step2Props) => {
  const perYearInvestment = useAppSelector(selectPerYearInvestment);
  const years = useAppSelector(selectYears);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    amount: 0,
    duration: "3y",
  });

  const completeSection = () => {
    props.onComplete(Step.Risk);
  };

  useEffect(() => {
    setForm({
      amount: perYearInvestment,
      duration: years,
    });
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Call saveState with the new value
    saveState(name, value);
  };

  const saveState = (name: string, value: string) => {
    console.log("Saving state:", name, value);
    if (name === "amount") {
      dispatch(setPerYearInvestment(Number(value)));
    } else if (name === "duration") {
      dispatch(setYears(value === "10y" ? 10 : parseInt(value, 10)));
    }
  };

  return (
    <>
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              {t('how_much_to_invest')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('tell_investment_goals')}
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {t('investment_per_month')}
              </label>
              <div className="relative flex items-center group">
                <div className="absolute left-4 text-slate-400 group-focus-within:text-primary transition-colors">
                  <span className="material-symbols-outlined">
                    {/* attach_money */}
                    euro
                  </span>
                </div>
                <input
                  className="w-full h-16 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xl font-semibold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  placeholder="5,000"
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                {t('investment_duration')}
              </label>
              <div className="flex h-14 w-full items-center justify-center rounded-xl bg-slate-200/50 dark:bg-slate-800 p-1.5">
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 font-bold transition-all">
                  <span className="truncate">{t('one_year')}</span>
                  <input
                    className="hidden"
                    name="duration"
                    type="radio"
                    value="1y"
                    checked={form.duration === "1y"}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 font-bold transition-all">
                  <span className="truncate">{t('3y')}</span>
                  <input
                    className="hidden"
                    name="duration"
                    type="radio"
                    value="3y"
                    checked={form.duration === "3y"}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 font-bold transition-all">
                  <span className="truncate">{t('5y')}</span>
                  <input
                    className="hidden"
                    name="duration"
                    type="radio"
                    value="5y"
                    checked={form.duration === "5y"}
                    onChange={handleChange}
                  />
                </label>
                <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 font-bold transition-all">
                  <span className="truncate">{t('10+y')}</span>
                  <input
                    className="hidden"
                    name="duration"
                    type="radio"
                    value="10y"
                    checked={form.duration === "10y"}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <button
              onClick={completeSection}
              className="w-full h-14 mt-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              {t('continue_to_risk')}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Returns card */}
        <ReturnsReview amount={Number(form.amount)} duration={form.duration} />
      </div>
    </>
  );
};

export default Step1;
