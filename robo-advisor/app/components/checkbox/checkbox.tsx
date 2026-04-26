import React, { useState } from "react";
import type { CheckboxOptions } from "./model";

export default function Checkbox({
  options,
  selected = {},
  onChange,
}: {
  options: CheckboxOptions[];
  selected?: Record<string, boolean>;
  onChange?: (selected: Record<string, boolean>) => void;
}) {
  const [selectedRegions, setSelectedRegions] = useState<Record<string, boolean>>(() => {
    // Initialize with all options set to their selected value or false
    const initial: Record<string, boolean> = {};
    options.forEach((option) => {
      initial[option.name] = selected[option.name] ?? false;
    });
    return initial;
  });

  React.useEffect(() => {
    // Sync prop changes to state
    setSelectedRegions((prev) => ({
      ...prev,
      ...selected,
    }));
  }, [selected]);

  const onRegionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedRegions((prev) => ({ ...prev, [value]: checked }));

    onChange && onChange({ ...selectedRegions, [value]: checked });
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {options.map((region) => (
          <label
            key={region.name}
            className="relative flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 border-slate-200 dark:border-slate-800 cursor-pointer hover:border-primary/50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5"
            role="checkbox"
            aria-checked={selectedRegions[region.name]}
            aria-label={region.label}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                const input = e.currentTarget.querySelector(
                  'input[type="checkbox"]',
                ) as HTMLInputElement;
                if (input) {
                  input.checked = !input.checked;
                  onRegionChange({ target: input } as any);
                }
              }
            }}
          >
            <input
              className="hidden"
              name="region"
              type="checkbox"
              value={region.name}
              checked={selectedRegions[region.name]}
              onChange={onRegionChange}
              tabIndex={-1}
              aria-hidden="true"
            />
            <span className="text-sm font-bold">{region.label}</span>
          </label>
        ))}
      </div>
    </>
  );
}
