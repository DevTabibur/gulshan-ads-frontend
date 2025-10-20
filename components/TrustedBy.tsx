"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"

export const TrustedBy = () => {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const logos = entry.target.querySelectorAll(".logo-item")
            logos.forEach((logo, index) => {
              setTimeout(() => {
                logo.classList.add("animate-fade-in-up")
              }, index * 100)
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

  const trustedCompanies = [
    {
      name: "TechFlow",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TF</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">TechFlow</span>
        </div>
      ),
    },
    {
      name: "DataSync",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">DS</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">DataSync</span>
        </div>
      ),
    },
    {
      name: "CloudVault",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CV</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">CloudVault</span>
        </div>
      ),
    },
    {
      name: "NexusAI",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">NexusAI</span>
        </div>
      ),
    },
    {
      name: "PixelCraft",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PC</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">PixelCraft</span>
        </div>
      ),
    },
    {
      name: "StreamLine",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SL</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">StreamLine</span>
        </div>
      ),
    },
    {
      name: "InnovateLab",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IL</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">InnovateLab</span>
        </div>
      ),
    },
    {
      name: "QuantumEdge",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">QE</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">QuantumEdge</span>
        </div>
      ),
    },
    {
      name: "FusionTech",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FT</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">FusionTech</span>
        </div>
      ),
    },
    {
      name: "VelocityPro",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VP</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">VelocityPro</span>
        </div>
      ),
    },
    {
      name: "CoreSystems",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-slate-500 to-gray-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CS</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">CoreSystems</span>
        </div>
      ),
    },
    {
      name: "NextGenHub",
      logo: (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">NG</span>
          </div>
          <span className="font-bold text-gray-700 dark:text-gray-300">NextGenHub</span>
        </div>
      ),
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t("trusted")}

          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of businesses that trust Biggapon BD to grow their presence across social media platforms
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {trustedCompanies.map((company, index) => (
            <div
              key={company.name}
              className="logo-item opacity-0 transform translate-y-4 transition-all duration-500 hover:scale-110 cursor-pointer group"
            >
              <div className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 border border-gray-100 dark:border-gray-700">
                {company.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">2M+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Ads Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Support</div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white italic max-w-4xl mx-auto">
            "Biggapon BD transformed our social media advertising strategy. We've seen a 300% increase in engagement across
            all platforms."
          </blockquote>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">KH</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">Khaled Hasan</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">CEO, Biggapon BD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
