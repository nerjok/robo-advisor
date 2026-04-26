import React, { useState } from "react";
import type { RadioButtonOptions } from "./model";

function RadioGroup<T extends string>({
  options,
  selected,
  onChange,
}: {
  options: RadioButtonOptions<T>[];
  selected: T | null;
  onChange: (e: T) => void;
}) {
  const [selectedAsset, setSelectedAsset] = useState<T | null>(
    selected || null,
  );

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAsset(e.target.value as T);
    onChange(e.target.value as T);
  };

  React.useEffect(() => {
    if (selected) {
      setSelectedAsset(selected);
    }
  }, [selected]);
  return (
    <>
      <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm has-[:checked]:text-primary text-slate-500 dark:text-slate-400 text-sm font-bold transition-all"
            role="radio"
            aria-checked={selectedAsset === option.value}
            aria-label={option.label}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const input = e.currentTarget.querySelector(
                  'input[type="radio"]',
                ) as HTMLInputElement;
                if (input) {
                  input.click();
                }
              }
            }}
          >
            <span className="truncate">{option.label}</span>
            <input
              className="invisible w-0"
              name="asset_type"
              type="radio"
              value={option.value}
              checked={selectedAsset === option.value}
              onChange={onSelect}
              tabIndex={-1}
              aria-hidden="true"
            />
          </label>
        ))}
      </div>
    </>
  );
}

export default RadioGroup;
