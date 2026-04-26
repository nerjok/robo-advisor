import React, { useState } from "react";
import type { RadioButtonOptions } from "./model";
import { useTranslation } from "react-i18next";

interface RadioButtonProps {
  options: RadioButtonOptions[];
  selected: string;
  onChange?: (value: string) => void;
}

export default function RadioButton({
  options,
  selected,
  onChange,
}: RadioButtonProps) {
  //   const [selectedOption, setSelectedOption] = useState<string>(selected);
  const { t, i18n } = useTranslation();

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Selected Radio class:", e.target.value);
    // setSelectedOption(e.target.value);
    onChange?.(e.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex flex-col p-5 rounded-xl border-2 border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm font-bold">{t(option.label)}</span>
              <input
                className="text-primary focus:ring-primary h-5 w-5"
                name={option.name}
                type="radio"
                value={option.value}
                checked={selected === option.value}
                disabled={option.disabled}
                onChange={onSelect}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t(option.additionalInfo ?? '')}
            </p>
          </label>
        ))}
      </div>
    </>
  );
}
