"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"

export const TelegramShowcase = () => {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".telegram-animate")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
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

  const telegramBenefits = [
    {
      icon: "🎯",
      text: "Precision targeting with 900M+ active users",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "💬",
      text: "Direct customer engagement & instant feedback",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "📈",
      text: "Higher conversion rates than traditional ads",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isRTL ? "lg:order-2" : ""}`}>
            {/* Telegram Icon */}
            <div className="telegram-animate opacity-0 transform translate-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
            </div>

            {/* Header */}
            <div className="telegram-animate opacity-0 transform translate-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Telegram:
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300">Untapped Advertising Goldmine</span>
              </h2>
            </div>

            {/* Description */}
            <div className="telegram-animate opacity-0 transform translate-y-4">
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Reach highly engaged audiences through Telegram's unique advertising formats. Drive traffic to your
                channels, boost website visits, and connect directly with customers in their preferred messaging app.
              </p>
            </div>

            {/* Benefits */}
            <div className="telegram-animate opacity-0 transform translate-y-4 space-y-4">
              {telegramBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center text-white text-lg shadow-lg`}
                  >
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="telegram-animate opacity-0 transform translate-y-4 bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Agency-Friendly Pricing</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Minimum budget: $200 per campaign</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Flexible commission: 15% - 25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">White-label dashboard available</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="telegram-animate opacity-0 transform translate-y-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Launch Telegram Ads
              </button>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className={`relative ${isRTL ? "lg:order-1" : ""}`}>
            <div className="telegram-animate opacity-0 transform translate-y-4">
              {/* Phone Frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Biggapon BD Agency</span>
                    </div>
                    <div className="text-xs text-gray-500">12:34 PM</div>
                  </div>

                  {/* Chat Header */}
                  <div className="bg-cyan-500 px-6 py-4 flex items-center space-x-3">
                    <button className="text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">Marketing Tips</h3>
                      <p className="text-cyan-100 text-sm">1.2K subscribers</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
                    {/* Message 1 */}
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AH</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">Biggapon BD</span>
                        <span className="text-xs text-gray-500">2:30 PM</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        🚀 New case study: How we increased ROI by 340% using cross-platform targeting strategies
                      </p>
                      <div className="mt-3 flex items-center space-x-4 text-xs text-gray-500">
                        <span>👍 124</span>
                        <span>💬 23</span>
                        <span>👁 1.2K</span>
                      </div>
                    </div>

                    {/* Message 2 */}
                    <div className="bg-white dark:bg-gray-700 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">AH</span>
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-white text-sm">Biggapon BD</span>
                        <span className="text-xs text-gray-500">2:45 PM</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        💡 Pro tip: Telegram ads have 3x higher engagement rates compared to traditional display ads
                      </p>
                      <button className="mt-3 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-xs font-medium hover:from-green-600 hover:to-cyan-600 transition-colors">
                        Learn More →
                      </button>
                    </div>

                    {/* Sponsored Ad */}
                    <div className="bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-2xl p-4 border border-green-200 dark:border-green-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">Sponsored</span>
                        <span className="text-xs text-gray-500">Ad</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        Scale Your Agency with Biggapon BD
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">
                        White-label solutions for marketing agencies. Manage all platforms in one dashboard.
                      </p>
                      <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-2 rounded-lg text-xs font-medium">
                        Get Started Free
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-cyan-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="telegram-animate opacity-0 transform translate-y-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4">The Future of Messaging Advertising</h3>
            <p className="text-cyan-100 text-lg max-w-3xl mx-auto leading-relaxed">
              Telegram advertising is revolutionizing how agencies connect with audiences. With native ad formats,
              precise targeting, and unmatched engagement rates, it's the platform your competitors haven't discovered
              yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
