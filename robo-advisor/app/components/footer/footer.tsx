import React, { Component } from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 px-6 md:px-20 mt-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-primary mb-6">
              <div className="size-6">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                FinPath
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('public_utility')}
            </p>
          </div>
          {/* <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a className="hover:text-primary" href="#">
                  Advisor Tool
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Portfolio Simulator
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a className="hover:text-primary" href="#">
                  Methodology
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a className="hover:text-primary" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">
            © 2024 FinPath. Built with transparency.
          </p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary" href="#">
              <span className="material-symbols-outlined text-xl">
                language
              </span>
            </a>
            <a className="text-slate-400 hover:text-primary" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
