"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"

// Default icons for fallback
const defaultIcons = [
  // Multi-Platform Targeting
  (
    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  ),
  // AI-Powered Optimization
  (
    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
        />
      </svg>
    </div>
  ),
  // Lightning Fast Setup
  (
    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  ),
]

// The main PlatformShowcase component
export const PlatformShowcase = () => {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Platform badges
  const platformBadges = [
    {
      text: "Minimum budget - $100",
      icon: "💰",
      color: "from-amber-500 to-orange-500",
    },
    {
      text: "Zero commission fees",
      icon: "✅",
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Global currency support",
      icon: "🌍",
      color: "from-cyan-500 to-blue-500",
    },
  ]


  const cards = [
    {
      icon: defaultIcons[0],
      title: "Multi-Platform Targeting",
      description: "Reach your audience across Meta, TikTok, and Telegram with our unified advertising platform.",
    },
    {
      icon: defaultIcons[1],
      title: "AI-Powered Optimization",
      description: "Advanced targeting meets simplified management for unprecedented results.",
    },
    {
      icon: defaultIcons[2],
      title: "Lightning Fast Setup",
      description: "Get started in minutes and launch campaigns faster than ever before.",
    },
  ]

  // If cards from multiPlatform are missing icon, use defaultIcons
  const platformFeatures = cards.map((card: any, idx: number) => ({
    icon: card.icon || defaultIcons[idx % defaultIcons.length],
    title: card.title || `Feature ${idx + 1}`,
    description: card.description || "",
  }))




  const stats =  [
    {
      value: "250%",
      label: "Average ROI Increase",
      color: "text-green-600 dark:text-green-400",
    },
    {
      value: "5M+",
      label: "People Reached Monthly",
      color: "text-cyan-600 dark:text-cyan-400",
    },
    {
      value: "48h",
      label: "Average Setup Time",
      color: "text-teal-600 dark:text-teal-400",
    },
    {
      value: "99.9%",
      label: "Platform Uptime",
      color: "text-blue-600 dark:text-blue-400",
    },
  ]

  // CTA section (can be customized via multiPlatform.cta if provided)
  const cta = {
    primary: {
      label: "Start Your Campaign",
      onClick: () => { },
    },
    secondary: {
      label: "Learn More",
      onClick: () => { },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Multi-Platform Advertising
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Reach your audience across Meta, TikTok, and Telegram with our unified advertising platform. Advanced targeting meets simplified management for unprecedented results.
          </p>
        </div>

        {/* Platform Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {platformBadges.map((badge, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${badge.color} text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <span className="mr-2">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Feature Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformFeatures.map((feature: any, index: any) => (
              <div
                key={index}
                className="feature-card opacity-0 transform translate-y-8 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 group hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Promotional Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-200 dark:to-gray-400 rounded-2xl p-8 text-gray-500 relative overflow-hidden shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-green-400 rounded-full"></div>
                <div className="absolute top-12 right-12 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-8 left-4 w-6 h-6 border-2 border-teal-400 rounded-full"></div>
                <div className="absolute bottom-16 left-12 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="text-2xl font-bold text-green-400 dark:text-green-500 mb-2">
                  3x Better ROI
                </div>
                <p className="text-gray-300 dark:text-gray-700 mb-6 text-sm leading-relaxed font-semibold">

                  Our clients see 3x better return on ad spend compared to single-platform campaigns
                </p>

                {/* Platform icons */}
                <div className="flex space-x-3 mb-6">
                  {/* Facebook */}
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.197 21V12.845H6.5V9.845h2.697V7.845c0-2.485 1.492-3.845 3.777-3.845 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.242 0-1.631.771-1.631 1.562v1.626h2.773l-.444 3H12.32V21" />
                    </svg>
                  </div>
                  {/* TikTok */}
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  {/* Google */}
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none">
                      {/* Blue bar */}
                      <path
                        d="M9.5 39.5L24 10.5L38.5 39.5"
                        stroke="#4285F4"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Green circle */}
                      <circle
                        cx="24"
                        cy="39"
                        r="3"
                        fill="#34A853"
                        stroke="#34A853"
                        strokeWidth="1.5"
                      />
                      {/* Yellow bar */}
                      <path
                        d="M24 10.5L38.5 39.5"
                        stroke="#FBBC05"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Avatar placeholder */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      GH
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-900">
                      Biggapon BD Expert
                    </div>
                    <div className="text-sm font-semibold">
                      Biggapon BD Expert
                    </div>
                    <div className="text-xs text-gray-400">
                      Campaign Specialist
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat: any, idx: any) => (
            <div className="text-center" key={idx}>
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mr-4"
            onClick={cta.primary.onClick}
          >
            {cta.primary.label}
          </button>
          <button
            className="border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
            onClick={cta.secondary.onClick}
          >
            {cta.secondary.label}
          </button>
        </div>
      </div>
    </section>
  )
}
