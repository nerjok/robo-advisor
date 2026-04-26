import type { ChartData } from "recharts/types/state/chartDataSlice";

export interface YearlyData {
  year: number;
  total: number;
  contributed: number;
}

export type ChartInfo = ChartData<{
  [index: string]: number | string;
}>;

export const calculateInvestmentGrowth = (
  yearlyContribution: number,
  rate: number,
  years: number,
): YearlyData[] => {
  const data: YearlyData[] = [
    {
      year: 0,
      total: 0,
      contributed: 0,
    },
  ];

  let total = yearlyContribution > 0 ? Math.ceil(yearlyContribution / 3) : 0;
  let contributed = 0;

  for (let year = 1; year <= years; year++) {
    // grow existing money
    total = total * (1 + rate);

    // add new contribution
    total += yearlyContribution;
    contributed += yearlyContribution;

    data.push({
      year,
      total: Number(total.toFixed(2)),
      contributed,
    });
  }

  return data;
};

const totalInvestmentsPerYear = (perYearInvestment: number): number[] => {
  const investments = [0];
  for (let i = 0; i < 10; i++) {
    investments.push(perYearInvestment * (i + 1));
  }
  return investments;
};

export enum Plan {
  Conservative = "Conservative",
  Moderate = "Moderate",
  Aggressive = "Aggressive",
//   Balanced = "Balanced",
}
export const InvestmentPlans = {
  [Plan.Conservative]: 0.05,
  [Plan.Moderate]: 0.12,
  [Plan.Aggressive]: 0.20,
//   [Plan.Balanced]: 0.2,
};


// NOTE Could be calculated monthy instead yearly
export const calculateYieldPerYear = (
  perYearInvestment: number,
  years: number,
): ChartInfo => {
  const bonds = calculateInvestmentGrowth(
    perYearInvestment,
    InvestmentPlans.Conservative,
    years,
  );
  const globalIndex = calculateInvestmentGrowth(
    perYearInvestment,
    InvestmentPlans.Moderate,
    years,
  );
//   const balanced = calculateInvestmentGrowth(
//     perYearInvestment,
//     InvestmentPlans.Balanced,
//     years,
//   );
  const risky = calculateInvestmentGrowth(
    perYearInvestment,
    InvestmentPlans.Aggressive,
    years,
  );
  const invested = totalInvestmentsPerYear(perYearInvestment);

  const chartData = bonds.map((label, index) => ({
    name: index + "y",
    invested: invested[index],
    [Plan.Conservative]: bonds[index].total,
    [Plan.Moderate]: globalIndex[index].total,
    // [Plan.Balanced]: balanced[index].total,
    [Plan.Aggressive]: risky[index].total,
  }));

  return chartData;
};

export interface InvestmentPlanRates {
  rate: string;
  total: number;
  plan: Plan;
}
export const calculatePlans = (
  growthRates: ChartInfo,
  totalInvestment: number,
): InvestmentPlanRates[] => {
  const last = growthRates[growthRates.length - 1];

  const calculateReturn = (plan: Plan): InvestmentPlanRates => {;
    const atEnd = last[plan] as number;
    const growth = atEnd - totalInvestment;
    const growthRate = (growth / totalInvestment) * 100;
    return { rate: growthRate.toFixed(2), total: +atEnd.toFixed(2), plan };
  };

  const plans = Object.entries(InvestmentPlans).map(([key]) => {
    const data = calculateReturn(key as Plan);
    return data;
  });

  return plans;
};
