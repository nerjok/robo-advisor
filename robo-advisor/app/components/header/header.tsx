import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary">
        <div className="size-8">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
          </svg>
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">
          <Link to="/">FinPath</Link>
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-9">
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="/#our-mission"
          >
            {t('mission_link')}
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="/#our-technology"
          >
            {t('technology_link')}
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="/#our-security"
          >
            
            {t('security_link')}
          </a>
          <a
            className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors"
            href="/routes/results"
          >
            {t('resources_link')}
          </a>
        </nav>
        {/* <button className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all">
          <span className="truncate">Launch Tool</span>
        </button> */}

        <Link
          to="/routes/invest-steps"
          className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all"
        >
          {t('launch_tool')}
        </Link>
      </div>
    </header>
  );
}
