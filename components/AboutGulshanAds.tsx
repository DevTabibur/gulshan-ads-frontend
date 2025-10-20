"use client"
import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"

export const AboutGulshanAds = () => {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".about-animate")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
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

  const stats = [
    {
      number: "7+",
      label: "Years of Multi-Platform Expertise",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "5000+",
      label: "Global Clients Served",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "150+",
      label: "Agency Partners Worldwide",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
    },
    {
      number: "25+",
      label: "Certified Platform Specialists",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "from-blue-500 to-indigo-500",
    },
  ]

  const targetAudiences = [
    {
      title: "Marketing Agencies",
      description:
        "Scale your client campaigns with our white-label solutions. Access premium ad accounts, expert consultation, and transparent reporting that enhances your agency's reputation.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
      ),
      benefits: ["White-label dashboard", "24/7 expert support", "Competitive commissions", "Advanced reporting"],
    },
    {
      title: "Direct Advertisers",
      description:
        "Launch high-impact campaigns across Meta, TikTok, and Telegram without the complexity. Get expert guidance, premium account access, and transparent pricing.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      ),
      benefits: ["No setup fees", "Expert consultation", "Multi-platform access", "Flexible payment terms"],
    },
    {
      title: "Performance Marketers",
      description:
        "Manage all your campaigns from one unified dashboard. Access advanced targeting tools, real-time analytics, and optimization features that maximize your ROI.",
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
      ),
      benefits: ["Unified dashboard", "Advanced analytics", "A/B testing tools", "Performance optimization"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-gray-200/30 dark:text-gray-700/30 select-none">
          AdHand
        </h1>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="about-animate opacity-0 transform translate-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                About BiggaponBD
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses and agencies with cutting-edge multi-platform advertising solutions. We bridge the
              gap between complex ad platforms and successful campaigns.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about-animate opacity-0 transform translate-y-4 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* We Work With Section */}
        <div className="text-center mb-16">
          <div className="about-animate opacity-0 transform translate-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">We Work With</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our platform serves diverse clients, from growing agencies to enterprise advertisers, each with unique
              needs and goals.
            </p>
          </div>
        </div>

        {/* Target Audiences */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {targetAudiences.map((audience, index) => (
            <div
              key={index}
              className="about-animate opacity-0 transform translate-y-4 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                {audience.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{audience.description}</p>
              <div className="space-y-2">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="about-animate opacity-0 transform translate-y-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl text-green-100 leading-relaxed mb-8">
              To democratize access to premium advertising platforms and expert knowledge, enabling businesses of all
              sizes to compete effectively in the digital marketplace. We believe great advertising should be
              accessible, transparent, and results-driven.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Transparency</div>
                <div className="text-green-100 text-sm">Clear pricing, honest reporting, no hidden fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Expertise</div>
                <div className="text-green-100 text-sm">Certified specialists with proven track records</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Innovation</div>
                <div className="text-green-100 text-sm">Cutting-edge tools and emerging platform access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}