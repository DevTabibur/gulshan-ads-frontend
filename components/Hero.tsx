"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "../hooks/useLanguage"
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export const Hero = () => {
  const { t, isRTL } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-teal-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 ${isRTL ? "lg:order-2" : ""}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                  {t("hero.title")}
                </span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {t("hero.subtitle")}
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {t("hero.cta")}
              </button>

              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                {/* Facebook Button */}
                <div className="flex items-center space-x-2 bg-[#eaf2fe] dark:bg-[#1e293b] px-4 py-2 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="w-8 h-8 bg-[#1877f2] dark:bg-[#2563eb] rounded flex items-center justify-center">
                    <FaFacebookF className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#1e293b] dark:text-gray-200">Facebook</span>
                </div>

                {/* TikTok Button */}
                <div className="flex items-center space-x-2 bg-[#f3f4f6] dark:bg-[#111827] px-4 py-2 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="w-8 h-8 bg-[#111827] dark:bg-[#f3f4f6] rounded flex items-center justify-center">
                    <FaTiktok className="text-white dark:text-[#111827]" />
                  </div>
                  <span className="text-sm font-medium text-[#1e293b] dark:text-gray-200">TikTok</span>
                </div>

                {/* Google Button */}
                <div className="flex items-center space-x-2 bg-[#ffeaea] dark:bg-[#7f1d1d] px-4 py-2 rounded-lg shadow-md transition-all hover:shadow-lg">
                  <div className="w-8 h-8 bg-[#ea4335] dark:bg-[#ef4444] rounded flex items-center justify-center">
                    <FaGoogle className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#1e293b] dark:text-gray-200">Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className={`relative ${isRTL ? "lg:order-1" : ""}`}>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Analytics
                </div>
              </div>

              {/* Dashboard content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Campaign Performance</h3>
                  <div className="text-2xl font-bold text-green-600">+24%</div>
                </div>

                <div className="h-32 bg-gradient-to-r from-green-100 to-cyan-100 dark:from-green-900 dark:to-cyan-900 rounded-lg flex items-end justify-around p-4">
                  <div className="w-8 bg-green-500 rounded-t" style={{ height: "60%" }}></div>
                  <div className="w-8 bg-cyan-500 rounded-t" style={{ height: "80%" }}></div>
                  <div className="w-8 bg-teal-500 rounded-t" style={{ height: "40%" }}></div>
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: "90%" }}></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Reach</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">1.2M</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 dark:text-gray-400">Conversions</div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">3.4K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
