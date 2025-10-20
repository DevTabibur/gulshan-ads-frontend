"use client";

import { motion } from "framer-motion";
import {
  Cookie,
  Settings,
  BarChart3,
  Target,
  Shield,
  Eye,
  Globe,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Layout } from "@/components/Layout";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingVariants: any = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

export default function CookiesPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("essential");

  const cookieCategories = [
    {
      id: "essential",
      title: "Essential Cookies",
      icon: Shield,
      description: "Required for basic website functionality and security",
      cookies: [
        {
          name: "Gulshan_Ads_session",
          purpose: "Maintains user session and authentication state",
          duration: "Session (expires when browser closes)",
          type: "First-party",
        },
        {
          name: "csrf_token",
          purpose: "Prevents cross-site request forgery attacks",
          duration: "24 hours",
          type: "First-party",
        },
        {
          name: "cookie_consent",
          purpose: "Stores user cookie preferences and consent",
          duration: "1 year",
          type: "First-party",
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics Cookies",
      icon: BarChart3,
      description: "Help us understand how visitors interact with our website",
      cookies: [
        {
          name: "_ga",
          purpose: "Google Analytics - distinguishes unique users",
          duration: "2 years",
          type: "Third-party (Google)",
        },
        {
          name: "_ga_*",
          purpose: "Google Analytics 4 - session and campaign data",
          duration: "2 years",
          type: "Third-party (Google)",
        },
        {
          name: "Gulshan_Ads_analytics",
          purpose: "Internal analytics for campaign performance tracking",
          duration: "1 year",
          type: "First-party",
        },
      ],
    },
    {
      id: "advertising",
      title: "Advertising Cookies",
      icon: Target,
      description:
        "Used to deliver relevant ads and measure campaign effectiveness",
      cookies: [
        {
          name: "fb_pixel",
          purpose: "Facebook Pixel for ad targeting and conversion tracking",
          duration: "90 days",
          type: "Third-party (Meta)",
        },
        {
          name: "google_ads",
          purpose: "Google Ads conversion tracking and remarketing",
          duration: "90 days",
          type: "Third-party (Google)",
        },
        {
          name: "tiktok_pixel",
          purpose: "TikTok Pixel for ad optimization and audience building",
          duration: "13 months",
          type: "Third-party (TikTok)",
        },
        {
          name: "snapchat_pixel",
          purpose: "Snapchat Pixel for campaign measurement and optimization",
          duration: "1 year",
          type: "Third-party (Snapchat)",
        },
      ],
    },
    {
      id: "functional",
      title: "Functional Cookies",
      icon: Settings,
      description: "Enable enhanced functionality and personalization",
      cookies: [
        {
          name: "theme_preference",
          purpose: "Remembers user dark/light mode preference",
          duration: "1 year",
          type: "First-party",
        },
        {
          name: "language_preference",
          purpose: "Stores user language selection",
          duration: "1 year",
          type: "First-party",
        },
        {
          name: "dashboard_settings",
          purpose: "Saves user dashboard layout and preferences",
          duration: "6 months",
          type: "First-party",
        },
      ],
    },
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website traffic analysis and user behavior insights",
      dataShared:
        "Page views, session duration, device information, geographic location",
      privacyPolicy: "https://policies.google.com/privacy",
    },
    {
      name: "Meta Pixel",
      purpose: "Facebook and Instagram ad targeting and conversion tracking",
      dataShared: "Website interactions, conversion events, custom audiences",
      privacyPolicy: "https://www.facebook.com/privacy/policy",
    },
    {
      name: "Google Ads",
      purpose: "Google advertising campaign optimization and remarketing",
      dataShared: "Conversion data, audience segments, campaign performance",
      privacyPolicy: "https://policies.google.com/privacy",
    },
    {
      name: "TikTok Pixel",
      purpose: "TikTok advertising optimization and audience insights",
      dataShared: "User interactions, conversion events, demographic data",
      privacyPolicy: "https://www.tiktok.com/legal/privacy-policy",
    },
  ];

  return (
    <>
      <Layout>
        <div className="">
          {/* Floating Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-20 left-10 text-green-200/20 dark:text-green-400/10"
            >
              <Cookie size={60} />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-40 right-20 text-cyan-200/20 dark:text-cyan-400/10"
              style={{ animationDelay: "2s" }}
            >
              <Settings size={80} />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute bottom-40 left-20 text-green-200/20 dark:text-green-400/10"
              style={{ animationDelay: "4s" }}
            >
              <BarChart3 size={70} />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Hero Section */}
            <motion.section
              variants={itemVariants}
              className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-8"
                >
                  <Cookie className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-cyan-600 to-green-600 bg-clip-text text-transparent mb-6"
                >
                  Cookie Policy
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  We use cookies and similar technologies to enhance your
                  experience, analyze website traffic, and optimize our
                  advertising services. This policy explains what cookies we
                  use, why we use them, and how you can control them.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
                >
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    Last Updated: January 2024 | Effective Date: January 1, 2024
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* What Are Cookies */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    What Are Cookies?
                  </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Understanding Cookies & Tracking
                    </h3>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <p>
                        Cookies are small text files stored on your device when
                        you visit our website. They help us provide you with a
                        better experience by remembering your preferences,
                        analyzing how you use our site, and optimizing our
                        advertising campaigns.
                      </p>
                      <p>
                        As an advertising agency, we also use pixels, web
                        beacons, and similar technologies to track campaign
                        performance across platforms like Meta, Google, TikTok,
                        and Snapchat. This helps us measure ad effectiveness and
                        optimize your campaigns for better results.
                      </p>
                      <p>
                        We distinguish between first-party cookies (set by
                          Biggapon BD) and third-party cookies (set by our advertising
                        partners) to give you full transparency about data
                        collection.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Types of Data We Collect
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Website usage and navigation patterns
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Smartphone className="w-5 h-5 text-cyan-500 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Device and browser information
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Target className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Ad interaction and conversion data
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-5 h-5 text-cyan-500 mr-3" />
                        <span className="text-gray-600 dark:text-gray-300">
                          User preferences and settings
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Cookie Categories */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/30"
            >
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Cookie Categories
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We categorize cookies based on their purpose and
                    functionality
                  </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center mb-12"
                >
                  {cookieCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`flex items-center px-6 py-3 m-2 rounded-full font-semibold transition-all ${
                        activeTab === category.id
                          ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <category.icon className="w-5 h-5 mr-2" />
                      {category.title}
                    </button>
                  ))}
                </motion.div>

                {/* Active Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  {cookieCategories.map((category) => {
                    if (category.id !== activeTab) return null;

                    return (
                      <div key={category.id}>
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                              {category.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                  Cookie Name
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                  Purpose
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                  Duration
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                                  Type
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {category.cookies.map((cookie, index) => (
                                <tr
                                  key={index}
                                  className="border-b border-gray-100 dark:border-gray-700/50"
                                >
                                  <td className="py-4 px-4 font-mono text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700/50 rounded">
                                    {cookie.name}
                                  </td>
                                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">
                                    {cookie.purpose}
                                  </td>
                                  <td className="py-4 px-4 text-gray-600 dark:text-gray-300">
                                    {cookie.duration}
                                  </td>
                                  <td className="py-4 px-4">
                                    <span
                                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        cookie.type.includes("First-party")
                                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                          : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                                      }`}
                                    >
                                      {cookie.type}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.section>

            {/* Third-Party Services */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Third-Party Services
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We work with trusted advertising partners to deliver
                    effective campaigns
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {thirdPartyServices.map((service, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {service.name}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            Purpose:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {service.purpose}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            Data Shared:
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {service.dataShared}
                          </p>
                        </div>
                        <div>
                          <a
                            href={service.privacyPolicy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm"
                          >
                            View Privacy Policy →
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Cookie Management */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/30"
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    You have full control over which cookies you accept
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Browser Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Chrome
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Settings → Privacy and security → Cookies and other
                          site data
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Firefox
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Options → Privacy & Security → Cookies and Site Data
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Safari
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Preferences → Privacy → Manage Website Data
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Opt-Out Options
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Google Ads
                        </h4>
                        <a
                          href="https://adssettings.google.com"
                          className="text-green-600 dark:text-green-400 text-sm hover:underline"
                        >
                          Manage Google Ad Settings →
                        </a>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Facebook Ads
                        </h4>
                        <a
                          href="https://www.facebook.com/ads/preferences"
                          className="text-green-600 dark:text-green-400 text-sm hover:underline"
                        >
                          Facebook Ad Preferences →
                        </a>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Industry Opt-Out
                        </h4>
                        <a
                          href="https://optout.aboutads.info"
                          className="text-green-600 dark:text-green-400 text-sm hover:underline"
                        >
                          Digital Advertising Alliance →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

           


          </motion.div>
        </div>
      </Layout>
    </>
  );
}
