"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import Link from "next/link";

// Simple Toast component
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (message) {
      timer.current = setTimeout(onClose, 2000);
    }
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [message, onClose]);

  if (!message) return null;
  return (
    <div className="fixed top-6 left-1/2 z-[9999] -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
      {message}
    </div>
  );
}

export const Header = () => {
  const { t, isRTL } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [toast, setToast] = useState<string>("");

  const navItems = [
    { key: "Advertisers", href: "advertisers" },
    { key: "Testimonials", href: "#testimonials" },
    { key: "Blog", href: "blog" },
  ];

  // Google color SVG for Google Ads
  const googleAdsIcon = (
    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
      <svg
        className="w-7 h-7"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Blue bar */}
        <path
          d="M9.5 39.5L24 10.5"
          stroke="#4285F4"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Yellow bar */}
        <path
          d="M24 10.5L38.5 39.5"
          stroke="#FBBC05"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Green circle */}
        <circle
          cx="24"
          cy="39"
          r="4"
          fill="#34A853"
          stroke="#34A853"
          strokeWidth="2"
        />
      </svg>
    </div>
  );

  const platforms = [
    {
      name: "Meta (Facebook & Instagram)",
      description: "Reach 3.8B+ users worldwide",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      ),
      href: "/meta",
      stats: "3.8B+ users",
      isComingSoon: false,
    },
    {
      name: "TikTok",
      description: "Engage with Gen Z & Millennials",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-r from-gray-900 to-black rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </div>
      ),
      href: "/tiktok",
      stats: "1B+ users",
    },
    // {
    //   name: "Telegram",
    //   description: "Direct messaging advertising",
    //   icon: (
    //     <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
    //       <svg
    //         className="w-5 h-5 text-white"
    //         fill="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    //       </svg>
    //     </div>
    //   ),
    //   href: "/telegram",
    //   isComingSoon: true,
    //   stats: "900M+ users",
    // },
    {
      name: "Google Ads",
      description: "Reach younger demographics",
      icon: (
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Blue bar */}
            <path
              d="M9.5 39.5L24 10.5L38.5 39.5"
              stroke="#4285F4"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Green circle */}
            <circle
              cx="24"
              cy="39"
              r="4"
              fill="#34A853"
              stroke="#34A853"
              strokeWidth="2"
            />
            {/* Yellow bar */}
            <path
              d="M24 10.5L38.5 39.5"
              stroke="#FBBC05"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ),
      href: "/snapchat",
      isComingSoon: true,
      stats: "750M+ users",
    },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  // Handler for platform click (desktop)
  const handlePlatformClick = (platform: any, e: React.MouseEvent) => {
    if (platform.isComingSoon) {
      e.preventDefault();
      setIsPlatformsOpen(false);
      setToast("Coming soon!");
    }
  };

  // Handler for platform click (mobile)
  const handlePlatformClickMobile = (
    platform: any,
    e: React.MouseEvent
  ) => {
    if (platform.isComingSoon) {
      e.preventDefault();
      setIsPlatformsOpen(false);
      setIsMobileMenuOpen(false);
      setToast("Coming soon!");
    } else {
      setIsPlatformsOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      {/* Toast */}
      <Toast message={toast} onClose={() => setToast("")} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                Biggapon BD
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Platforms Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}
                onMouseEnter={() => setIsPlatformsOpen(true)}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
              >
                <span>{t("nav.platforms")}</span>
                <motion.svg
                  animate={{ rotate: isPlatformsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isPlatformsOpen && (
                  <motion.div
                    variants={dropdownVariants as any}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseLeave={() => setIsPlatformsOpen(false)}
                    className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 py-4 min-w-[320px] z-50"
                  >
                    <div className="px-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                        Advertising Platforms
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Choose your preferred platform
                      </p>
                    </div>
                    <div className="py-2">
                      {platforms.map((platform, index) => (
                        <motion.a
                          key={platform.name}
                          variants={itemVariants}
                          href={platform.isComingSoon ? "#" : platform.href}
                          onClick={(e) => handlePlatformClick(platform, e)}
                          className={`flex items-center space-x-3 px-4 py-3 transition-colors duration-200 group ${platform.isComingSoon
                              ? "cursor-not-allowed opacity-60"
                              : "hover:bg-gray-50 dark:hover:bg-gray-700"
                            }`}
                          tabIndex={0}
                          aria-disabled={platform.isComingSoon ? "true" : undefined}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {platform.icon}
                          </motion.div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200">
                              {platform.name}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {platform.description}
                            </div>
                          </div>
                          <div className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                            {platform.stats}
                          </div>
                          {/* {platform.isComingSoon && (
                            <span className="ml-2 text-xs text-yellow-500 font-semibold">
                              {t?.("common.comingSoon") || "Coming soon"}
                            </span>
                          )} */}
                        </motion.a>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-green-600 hover:to-cyan-600 transition-all duration-200"
                      >
                        Start Multi-Platform Campaign
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Items */}
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
              >
                {/* {t(`nav.${item.key}`)} */}
                {item.key}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* <LanguageSwitcher /> */}

            {/* Auth buttons - Desktop */}
            {/* <div className="hidden md:flex items-center space-x-3">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium">
                {t("nav.signIn")}
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-lg"
              >
                {t("nav.signUp")}
              </motion.button>
            </div> */}

            <div className="hidden md:flex items-center space-x-3">
              <Link href="/sign-in" passHref>
                <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium">
                  {t("nav.signIn")}
                </button>
              </Link>

              <Link href="/sign-up" passHref>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-lg"
                >
                  {t("nav.signUp")}
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <motion.svg
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="flex flex-col space-y-4">
                {/* Mobile Platforms */}
                <div>
                  <button
                    onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                  >
                    <span>{t("nav.platforms")}</span>
                    <motion.svg
                      animate={{ rotate: isPlatformsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {isPlatformsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 ml-4 space-y-2"
                      >
                        {platforms.map((platform) => (
                          <a
                            key={platform.name}
                            href={platform.isComingSoon ? "#" : platform.href}
                            onClick={(e) => handlePlatformClickMobile(platform, e)}
                            className={`flex items-center space-x-3 py-2 text-gray-600 bg-black dark:bg-white dark:text-gray-300 transition-colors duration-200 ${platform.isComingSoon
                                ? "cursor-not-allowed opacity-60"
                                : "hover:text-gray-900 dark:hover:text-white"
                              }`}
                            tabIndex={0}
                            aria-disabled={platform.isComingSoon ? "true" : undefined}
                          >
                            <div className="scale-75">{platform.icon}</div>
                            <span className="text-sm">{platform.name}</span>
                            {platform.isComingSoon && (
                              <span className="ml-2 text-xs text-yellow-500 font-semibold">
                                {t?.("common.comingSoon") || "Coming soon"}
                              </span>
                            )}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Mobile Nav Items */}
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}

                {/* Mobile Auth buttons */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium text-left">
                    {t("nav.signIn")}
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-200 text-center"
                  >
                    {t("nav.signUp")}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
