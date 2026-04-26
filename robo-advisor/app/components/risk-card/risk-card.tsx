import React from "react";
import { useTranslation } from "react-i18next";
import type { RiskLevel } from "~/models/risk.level";

const Unselected = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mt-auto pt-4 flex items-center gap-2 text-primary font-semibold text-sm">
      <span>{t('select_profile')}</span>
      <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </div>
  );
};
const Selected = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mt-auto pt-4 flex items-center justify-between text-primary font-bold">
      <span className="text-sm">{t('selected_profile')}</span>
      <span className="material-symbols-outlined">check_circle</span>
    </div>
  );
};

export default function RiskCard({
  title,
  contentText,
  selected,
  children,
  name,
  value,
  imageClassName,
  onChange,
}: {
  title: React.ReactNode;
  contentText: string;
  selected: boolean;
  children: React.ReactNode;
  name?: string;
  value?: RiskLevel;
  imageClassName?: string;
  onChange?: (e: RiskLevel) => void;
}) {
  const { t, i18n } = useTranslation();
  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("onSelections", e.target.value);

    onChange && onChange(e.target.value as RiskLevel);
  };
  return (
    <label
      className="cursor-pointer block"
      tabIndex={0}
      role="radio"
      aria-checked={selected}
      aria-label={typeof title === "string" ? title : "Risk profile option"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange2({ target: { value: value } } as any);
        }
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onChange2}
        tabIndex={-1}
        className="sr-only"
        aria-label={typeof title === "string" ? title : "Risk profile option"}
      />
      <div
        className={`group flex flex-col gap-5 p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
          selected
            ? "border-primary bg-primary/5 dark:bg-primary/10 shadow-lg shadow-primary/10"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary dark:hover:border-primary focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary"
        }`}
      >
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
          <div
            className={`w-full h-full bg-gradient-to-br opacity-80 ${imageClassName}`}
            data-alt="Moderate blue oscillating wave pattern"
          ></div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">{children}</div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          {contentText}
        </p>

        {selected ? <Selected /> : <Unselected />}
      </div>
    </label>
  );
}

const SampleTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="title">{children}</div>
);
const SampleBody = ({ children }: { children: React.ReactNode }) => (
  <div className="body">{children}</div>
);

RiskCard.Title = SampleTitle;
RiskCard.Body = SampleBody;
