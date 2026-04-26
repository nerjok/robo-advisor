import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ResultsHeader from "~/components/results-header/results-header";
import ReturnCard from "~/components/return-card/return-card";
import RiskDisclosure from "~/components/risk-disclosure";
import type { TableSettings } from "~/components/table/model";
import Table from "~/components/table/table";
import TablePagination from "~/components/table/table-pagination";
import { mapInvestmentAssetsToTable } from "~/components/table/table-settings";
import { AssetClass } from "~/models/asset-class-model";
import type { UserPreferences } from "~/models/investment-results";
import { RiskLevel } from "~/models/risk.level";
import { HttpService } from "~/services/http-service";
import { useAppSelector } from "~/store/hooks";
import { selectedValues } from "~/store/selectors/investment-state.selectors";

export default function Proposals() {
  const investmentValues = useAppSelector(selectedValues);
  const { t, i18n } = useTranslation();

  const mockedData = {
    assetClasses: AssetClass.ETFs,
    perYearInvestment: 100,
    riskLevel: RiskLevel.Low,
    selectedRegions: { global: true, us: false },
    years: 3,
  };
  // { "assetClasses": AssetClass.ETFs, "perYearInvestment": 500, "riskLevel": RiskLevel.Low, "selectedRegions": { "global": true, "us": false }, "years": "3y" }
  // {"perYearInvestment":200,"years":5,"riskLevel":"medium","selectedRegions":{"global":true,"us":false},"assetClasses":"ETF"}
  const [result, setResult] = useState<TableSettings>();

  const callWith: UserPreferences = investmentValues ?? mockedData;
  useEffect(() => {
    HttpService.fetchProposals(callWith).then((proposals) => {
      const tableSettings = mapInvestmentAssetsToTable(proposals);
      console.log("Fetched proposals:", proposals);
      setResult(tableSettings);
    });
  }, []);

  return (
    <>
      <main className="flex-1 py-8 px-6 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <ResultsHeader
            title={t("personalized_strategy")}
            description={t("results_header")}
          />

          {/* Portfolio  settings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <ReturnCard
              icon="payments"
              iconClass="bg-primary/10 rounded-lg text-primary"
              title={t("total_investment_value")}
            >
              {/* <ReturnCard.ValueContent
                value="$50,000.00"
                additionalValue="Available for trading"
              /> */}
              <div>
                <div>
                  <b>{t("per_month")}</b> {callWith.perYearInvestment}
                </div>
                <div>
                  <b>{t("period")}</b> {callWith.years}
                </div>
              </div>
            </ReturnCard>

            <ReturnCard
              icon="speed"
              iconClass="bg-amber-500/10 rounded-lg text-amber-500"
              title={t("overall_risk_profile")}
            >
              <ReturnCard.RiskProfile risk={callWith.riskLevel} />
            </ReturnCard>

            <ReturnCard
              icon="monitoring"
              iconClass="bg-emerald-500/10 rounded-lg text-emerald-500"
              title={t("total_investment_value")}
            >
              <ReturnCard.ValueContent
                value="8.4%"
                additionalValue={t("projected_annual_return")}
              />
            </ReturnCard>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold">{t("recommended_assets")}</h3>
              <div className="flex gap-2">
                {/* <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-slate-500">
                    filter_list
                  </span>
                </button> */}
                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-slate-500">
                    more_vert
                  </span>
                </button>
              </div>
            </div>
            {/* Table grid */}
            <div className="overflow-x-auto">
              {result ? <Table tableSettings={result} /> : ""}
              {/* <hr />
              <hr />
              <Table tableSettings={tableSettings}/> */}
              <TablePagination />
            </div>
          </div>

          <RiskDisclosure />
        </div>
      </main>
    </>
  );
}
