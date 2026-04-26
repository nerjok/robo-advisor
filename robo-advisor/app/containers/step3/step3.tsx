import type { Step2Props } from "../steps.model";
import { Step } from "~/models/steps";
import Checkbox from "~/components/checkbox/checkbox";
import { regionsOptions } from "~/models/regions";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  selectedAssetClass,
  selectedRegions,
} from "~/store/selectors/investment-state.selectors";
import RadioButton from "~/components/radio-button/radio-button";
import { distributionOptions } from "~/models/distribution.model";
import InputWrapper from "~/components/input-wrapper/input-wrapper";
import { AssetClass, assetClasses } from "~/models/asset-class-model";
import RadioGroup from "~/components/radio-group/radio-group";
import {
  setSelectedAssetClass,
  setSelectedRegions,
} from "~/store/reducers/investment-state.reducers";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Step3 = (props: Step2Props) => {
  const { t, i18n } = useTranslation();
  const initialRegion = useAppSelector(selectedRegions);
  const initialAssetClass = useAppSelector(selectedAssetClass);
  const dispatch = useAppDispatch();

  const [region, setRegion] = useState(initialRegion);
  const [assetClass, setAssetClass] = useState(initialAssetClass);

  const complete = () => {
    dispatch(setSelectedRegions(region));
    dispatch(setSelectedAssetClass(assetClass));
    props.onComplete(Step.Review);
  };

  const back = () => props.onComplete(Step.Risk);

  const onAssetChange = (e: AssetClass) => {
    console.log("Selected asset class:", e);
    setAssetClass(e);
  };

  const onRegionChange = (e: Record<string, boolean>) => {
    console.log("Selected regions:", e);
    setRegion(e);
  };

  return (
    <>
      <main className="px-4 lg:px-40 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight mt-4">
              
              {t('investment_preferences')}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed">
              {t('tailor_portfolio')}
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <InputWrapper icon="layers" title={t('asset_type')}>
                <RadioGroup
                  options={assetClasses}
                  selected={assetClass}
                  onChange={onAssetChange}
                />
              </InputWrapper>
            </div>

            <div className="flex flex-col gap-4">
              <InputWrapper icon="public" title={t('preferred_regions')}>
                <Checkbox
                  options={regionsOptions}
                  selected={region}
                  onChange={onRegionChange}
                />
              </InputWrapper>
            </div>

            <div className="flex flex-col gap-4">
              <InputWrapper icon="rebase_edit" title={t('distribution_type')}>
                <RadioButton
                  options={distributionOptions}
                  selected="accumulating"
                  onChange={() => {}}
                />
              </InputWrapper>
            </div>
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-200 dark:border-slate-800">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                onClick={back}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                {t('previous_step')}
              </button>
              <button
                className="flex items-center gap-2 px-10 py-3 rounded-xl bg-primary text-white font-bold hover:opacity-90 shadow-lg shadow-primary/20 transition-all"
                onClick={complete}
              >
                {t('continue')}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Step3;
