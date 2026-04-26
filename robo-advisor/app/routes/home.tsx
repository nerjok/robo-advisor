import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section>
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12">
          <div
            className="absolute inset-0 bg-cover bg-center index-page-bg-image"
            data-alt="Abstract blue financial data visualization background"
          ></div>
          <div className="relative h-full flex flex-col justify-center items-start p-10 md:p-20 text-white max-w-3xl">
            <span className="bg-primary/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              {t("new_era_finance")}
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              {t("democratizing_institutional_fin")}
            </h1>
            <p id="our-mission" className="text-lg md:text-xl font-medium text-slate-200 leading-relaxed">
              {t("finpath_descr")}
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              {t("our_mission")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              {t("at_finpath")}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              {t("finpath_transparency")}
            </p>
          </div>
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
            <div className="flex items-center gap-4 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">
                public
              </span>
              <h3 className="text-xl font-bold">{t("public_by_design")}</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  check_circle
                </span>
                <span>{t("no_registration")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  check_circle
                </span>
                <span>{t("no_biometric")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  check_circle
                </span>
                <span>{t("instant_access")}</span>
              </li>
              <li id="our-technology" className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 mt-1">
                  check_circle
                </span>
                <span>{t("zero_personal_data")}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900/50 rounded-3xl px-8 mb-16 border border-slate-200 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t("technology")}</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t("cutting_edge")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">
                psychology
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t("ai_optimization")}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {t("our_algorithm")}
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">
                trending_down
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">{t("tax_loss_harvest")}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {t("auto_opportunities")}
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-background-light dark:bg-background-dark rounded-xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">
                balance
              </span>
            </div>
            <h3 id="our-security" className="text-xl font-bold mb-3">{t("rebalancing")}</h3>
            <p className="text-slate-600 dark:text-slate-400">
              {t("constant_monitoring")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="h-48 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30"
                data-alt="Blue security pattern background"
              >
                <span className="material-symbols-outlined text-5xl text-primary">
                  encrypted
                </span>
              </div>
              <div
                className="h-48 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center"
                data-alt="Dark gray secure grid pattern"
              >
                <span className="material-symbols-outlined text-5xl text-slate-400">
                  verified_user
                </span>
              </div>
              <div
                className="h-48 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center"
                data-alt="Light gray network security pattern"
              >
                <span className="material-symbols-outlined text-5xl text-slate-400">
                  policy
                </span>
              </div>
              <div
                className="h-48 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30"
                data-alt="Blue data protection background"
              >
                <span className="material-symbols-outlined text-5xl text-primary">
                  gpp_good
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              {t("bank_security")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              {t("finpath_security")}
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <div>
                  <h4 className="font-bold">{t("transit_encryption")}</h4>
                  <p className="text-sm text-slate-500">
                    {t("transit_encryption_descr")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">shield</span>
                </div>
                <div>
                  <h4 className="font-bold">{t("anonymious_calculations")}</h4>
                  <p className="text-sm text-slate-500">
                    {t("anonymious_calculations_desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-outlined">dns</span>
                </div>
                <div>
                  <h4 className="font-bold">{t("redundant_infra")}</h4>
                  <p className="text-sm text-slate-500">
                    {t("redundant_infra_descr")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 p-10 bg-primary rounded-3xl text-center text-white">
        <h2 className="text-3xl font-bold mb-6">{t("ready_to_see")}</h2>
        <p className="text-primary-100 mb-8 max-w-xl mx-auto opacity-90 text-lg">
          {t("ready_to_see_descr")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/routes/invest-steps"
            className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all"
          >
            {t("open_advisor")}
          </Link>
          <Link
            to="/routes/results"
            className="bg-primary/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
          >
            {t("view_demo")}
          </Link>
        </div>
        <p className="mt-6 text-sm opacity-70">{t("no_sign_needed")}</p>
      </section>
    </>
  );
}
