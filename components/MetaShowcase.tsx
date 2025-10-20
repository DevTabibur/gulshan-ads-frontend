"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"

export const MetaShowcase = () => {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".meta-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 150)
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

  const metaFeatures = [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      ),
      title: "Advanced Security",
      description:
        "Premium verified accounts with multi-layer protection, creative pre-approval, and 24/7 monitoring to prevent ad blocks and account suspensions.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      ),
      title: "Meta Certified Experts",
      description:
        "Our team of Meta Blueprint certified specialists provides instant support, campaign optimization, and strategic guidance for maximum ROI.",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      title: "Smart Automation",
      description:
        "AI-powered audience targeting, automatic bid optimization, and intelligent budget allocation across Facebook and Instagram campaigns.",
    },
  ]

  const metaBenefits = [
    {
      text: "Tax-optimized billing",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Multi-currency support",
      icon: "🌍",
      color: "from-cyan-500 to-blue-500",
    },
    {
      text: "Premium account access",
      icon: "⭐",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-32 right-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
            </svg>
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">Meta:</span>
            <br />
            <span className="text-gray-700 dark:text-gray-300">Your Gateway to Social Success</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Leverage the power of Facebook and Instagram advertising with AdHand's premium Meta solutions. Reach
            billions of users with precision targeting and expert campaign management.
          </p>
        </div>

        {/* Benefits Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {metaBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${benefit.color} text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <span className="mr-2">{benefit.icon}</span>
              {benefit.text}
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metaFeatures.map((feature, index) => (
            <div
              key={index}
              className="meta-card opacity-0 transform translate-y-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-200 dark:border-gray-700"
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

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Meta Platform Performance</h3>
            <p className="text-green-100 text-lg">Real results from our Meta advertising campaigns</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2.8B+</div>
              <div className="text-green-100">Monthly Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-green-100">Mobile Usage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.2x</div>
              <div className="text-green-100">Average ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-green-100">Campaign Success Rate</div>
            </div>
          </div>
        </div>

        {/* Visual Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Advanced Targeting Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Demographic & Interest Targeting</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Behavioral & Purchase Intent</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Custom & Lookalike Audiences</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-300">Geographic & Device Targeting</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Campaign Dashboard</h4>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Reach</span>
                  <span className="font-semibold text-gray-900 dark:text-white">1.2M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Impressions</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3.4M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-sm text-green-600 dark:text-green-400">ROAS</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">4.2x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mr-4">
            Launch Meta Campaign
          </button>
          <button className="border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}