"use client";

import Link from "next/link";
import { useLanguage } from "../hooks/useLanguage";
import JoiningMail from "./JoiningTheMail";

export const Footer = () => {
  const { t, isRTL } = useLanguage();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Responsive 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              Biggapon BD
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Promote your business across Meta, TikTok, and Telegram with our
              unified advertising platform.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons: Facebook, Instagram, X (Twitter), LinkedIn */}
              <a
                href="#"
                className="bg-gray-200 dark:bg-[#232836] rounded shadow flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-[#2d3342]"
                aria-label="Facebook"
              >
                {/* Facebook */}
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.197 21V12.845H6.5V9.845h2.697V7.845c0-2.485 1.492-3.845 3.777-3.845 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.242 0-1.631.771-1.631 1.562v1.626h2.773l-.444 3H12.32V21" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-[#232836] rounded shadow flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-[#2d3342]"
                aria-label="Instagram"
              >
                {/* Instagram */}
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-[#232836] rounded shadow flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-[#2d3342]"
                aria-label="X"
              >
                {/* X (Twitter) */}
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
                  <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-200 dark:bg-[#232836] rounded shadow flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-[#2d3342]"
                aria-label="LinkedIn"
              >
                {/* LinkedIn */}
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.3"/>
                  <path d="M7 9v8M7 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 4v4m0-4v-1a2 2 0 0 1 4 0v1m0 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 hidden md:block">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} Biggapon BD. All rights reserved.
                </p>
                
              </div>
            </div>
          </div>

          {/* Company section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {footerSections[0].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[0].links.map((link: any) => {
                let href: string | undefined;
                let label: string;
                if (typeof link === "string") {
                  href = link;
                  label = link;
                } else if (typeof link === "object" && link !== null) {
                  href = link.href || link.hrefs || "#";
                  label = link.label || link.text || link.title || href;
                } else {
                  href = "#";
                  label = "Link";
                }
                return (
                  <li key={label + href}>
                    <Link
                      href={href as any}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              {footerSections[1].title}
            </h3>
            <ul className="space-y-3">
              {footerSections[1].links.map((link: any) => {
                let href: string | undefined;
                let label: string;
                if (typeof link === "string") {
                  href = link;
                  label = link;
                } else if (typeof link === "object" && link !== null) {
                  href = link.href || link.hrefs || "#";
                  label = link.label || link.text || link.title || href;
                } else {
                  href = "#";
                  label = "Link";
                }
                return (
                  <li key={label + href}>
                    <Link
                      href={href as any}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          
          <JoiningMail />
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 md:hidden block">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Biggapon BD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
