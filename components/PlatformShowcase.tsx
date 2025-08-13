"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"

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

  const platformFeatures = [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
      title: "Multi-Platform Targeting",
      description:
        "Run synchronized campaigns across Meta, TikTok, and Telegram with unified audience targeting and budget optimization.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
            />
          </svg>
        </div>
      ),
      title: "AI-Powered Optimization",
      description:
        "Our intelligent algorithms automatically optimize your ad spend across platforms to maximize ROI and reach your target audience effectively.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Lightning Fast Setup",
      description:
        "Launch your campaigns in under 5 minutes with our streamlined interface. Pay securely with card or invoice - no hidden fees.",
    },
  ]

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

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
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
            <br />
            <span className="text-gray-700 dark:text-gray-300">for Maximum Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Reach your audience across Meta, TikTok, and Telegram with our unified advertising platform. Advanced
            targeting meets simplified management for unprecedented results.
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
            {platformFeatures.map((feature, index) => (
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
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-green-400 rounded-full"></div>
                <div className="absolute top-12 right-12 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-8 left-4 w-6 h-6 border-2 border-teal-400 rounded-full"></div>
                <div className="absolute bottom-16 left-12 w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="text-2xl font-bold text-green-400 mb-2">3x Better ROI</div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  Our clients see 3x better return on ad spend compared to single-platform campaigns
                </p>

                {/* Platform icons */}
                <div className="flex space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">f</span>
                  </div>
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TT</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                </div>

                {/* Avatar placeholder */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AH</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Gulshan Ads Expert</div>
                    <div className="text-xs text-gray-400">Campaign Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">250%</div>
            <div className="text-gray-600 dark:text-gray-400">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">5M+</div>
            <div className="text-gray-600 dark:text-gray-400">People Reached Monthly</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">48h</div>
            <div className="text-gray-600 dark:text-gray-400">Average Setup Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-600 dark:text-gray-400">Platform Uptime</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mr-4">
            Start Your Campaign
          </button>
          <button className="border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
