"use client"

import { motion } from "framer-motion"
import {  useState } from "react"
import { Layout } from "../../components/Layout"

export default function TikTokPage() {



 
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const tiktokStats = [
    {
      percentage: "55%",
      description: "of users discover new products while browsing",
      color: "from-green-500 to-emerald-500",
    },
    {
      percentage: "47%",
      description: "of TikTok users make a purchase after watching",
      color: "from-cyan-500 to-blue-500",
    },
    {
      percentage: "65%",
      description: "Users discover new products and brands on TikTok",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Exclusive settings",
      description: "Only with us you can use ads on TikTok at exclusive rates with no spending limits.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
          />
        </svg>
      ),
      title: "Expert support",
      description: "Our team of experts will answer all questions, help with launches and work with your account.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Easy launch and Management",
      description:
        "Biggapon BD allows you to launch advertising campaigns quickly and has an easy interface for account management.",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const testimonials = [
    {
      company: "Creative Agency",
      logo: "CA",
      testimonial:
        "Working with Biggapon BD through Biggapon BD is very effective. The Biggapon BD team assists in placing ads through the platform and constantly offers new ideas on how to make ads more effective in reaching new audiences.",
      author: "Jessica Smith",
      position: "Marketing Director",
      rating: 5,
      logoColor: "from-yellow-500 to-orange-500",
    },
    {
      company: "Digital Solutions",
      logo: "DS",
      testimonial:
        "Biggapon BD's TikTok advertising platform has transformed our client campaigns. The targeting precision and creative tools have delivered exceptional results across all demographics.",
      author: "Michael Chen",
      position: "Growth Manager",
      rating: 5,
      logoColor: "from-green-500 to-emerald-500",
    },
    {
      company: "Brand Innovators",
      logo: "BI",
      testimonial:
        "The partnership with Biggapon BD for TikTok advertising has been game-changing. Their expertise in the platform and dedicated support has helped us achieve 300% better ROI.",
      author: "Sarah Johnson",
      position: "CEO",
      rating: 5,
      logoColor: "from-purple-500 to-pink-500",
    },
  ]


  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                    Access to new audiences on favorable terms
                  </span>

                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                >
                  Advertising on TikTok with a reliable account and qualified support for those who want to avoid bans and get maximum results.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-lg"
                >
                  Get started
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-900 to-black rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <span>TikTok</span>
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">1B+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - TikTok Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* TikTok Interface */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                    {/* Video Content Area */}
                    <div className="relative h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                      {/* User Avatar */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute top-20 left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold">B</span>
                      </motion.div>

                      {/* TikTok Logo */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-gray-900 to-black rounded-lg flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                        </svg>
                      </motion.div>

                      {/* Right Side Actions */}
                      <div className="absolute right-4 bottom-32 space-y-6">
                        {/* Like Button */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          </div>
                          <span className="text-white text-xs">12.5K</span>
                        </motion.div>

                        {/* Comment Button */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-xs">2.1K</span>
                        </motion.div>

                        {/* Share Button */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 1.6 }}
                          className="flex flex-col items-center"
                        >
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                              />
                            </svg>
                          </div>
                          <span className="text-white text-xs">856</span>
                        </motion.div>
                      </div>

                      {/* Bottom Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="absolute bottom-8 left-4 right-16"
                      >
                        <div className="text-white">
                          <h3 className="font-bold mb-2">@ads_agency</h3>
                          <p className="text-sm opacity-90 mb-3">
                            Boost your business with TikTok advertising! 🚀 #TikTokAds #Marketing
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                />
                              </svg>
                            </div>
                            <span className="text-xs">Learn more →</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white p-3 rounded-full shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                TikTok audience actively interacts with advertising
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Stats */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div
                  className="w-24 h-24 bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl font-bold text-white">550 %</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Reach your ideal clients with laser-focused targeting across all major platforms</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div
                  className="w-24 h-24 bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl font-bold text-white">6711 %</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Get your campaigns running in under 24 hours with our streamlined process</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div
                  className="w-24 h-24 bg-gradient-to-tr from-green-400 via-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl font-bold text-white">4511 %</span>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">Our certified specialists handle everything while you focus on your craft</p>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">2-3 times cheaper</h3>
                    <p className="text-gray-400 text-sm">
                      The cost per click on TikTok is lower than on other platforms
                    </p>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div>
                      <div className="text-white font-medium">@creative_brand</div>
                      <div className="text-gray-400 text-sm">2 hours ago</div>
                    </div>
                  </div>
                  <p className="text-white text-sm mb-4">
                    Amazing results with TikTok ads! 🎯 Our engagement rates increased by 300% in just one month.
                  </p>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span>❤️ 1.2K</span>
                    <span>💬 89</span>
                    <span>🔄 156</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Advertising Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    TikTok: video advertising with a minimum budget
                  </span>

                </h2>

                <p className="text-xl text-gray-300 leading-relaxed">
                  TikTok offers essential advertising options. Choose the format that suits your business goals.
                </p>
              </div>

              <div className="space-y-4">

                <div
                  className={
                    "bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-6 border border-green-500/30"
                  }
                >
                  <h3 className="text-white font-semibold mb-2">In-Feed Ads</h3>
                  <p className="text-gray-400 text-sm">Native ads that appear in users' For You feed with full-screen vertical video format.</p>
                </div>
                <div
                  className={
                    "bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-6 border border-green-500/30"
                  }
                >
                  <h3 className="text-white font-semibold mb-2">Brand Takeover</h3>
                  <p className="text-gray-400 text-sm">Full-screen ads that appear when users open TikTok, ensuring maximum visibility.</p>
                </div>
                <div
                  className={
                    "bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-6 border border-green-500/30"
                  }
                >
                  <h3 className="text-white font-semibold mb-2">Hashtag Challenge</h3>
                  <p className="text-gray-400 text-sm">Encourage user-generated content with branded hashtag challenges that go viral.</p>
                </div>
                <div
                  className={
                    "bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl p-6 border border-green-500/30"
                  }
                >
                  <h3 className="text-white font-semibold mb-2">Minimum Budget</h3>
                  <p className="text-gray-400 text-sm">Start advertising on TikTok with as little as $20 per day. Scale up as you see results and optimize your campaigns for better performance.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-br from-orange-500 to-yellow-500 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Video Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 to-yellow-900/50">
                    {/* Video Player Interface */}
                    <div className="absolute inset-4 bg-gray-900/80 rounded-2xl flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-8 left-4 right-4">
                      <div className="bg-black/50 rounded-xl p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
                          <span className="text-white font-medium">@ads_official</span>
                        </div>
                        <p className="text-white text-sm">
                          Transform your business with TikTok advertising! 🚀 #BusinessGrowth #TikTokAds
                        </p>
                      </div>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="absolute right-4 bottom-32 space-y-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-1">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </div>
                        <span className="text-white text-xs">25.3K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">$20</div>
                <div className="text-xs opacity-90">Min. daily budget</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-cyan-500 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">3x</div>
                <div className="text-xs opacity-90">Better engagement</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment and Automation Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                Convenient payment, with automation from Biggapon BD
              </span>

            </h2>

            {/* Payment Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Commission - 15%
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                No setup fees
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
              >
                Automated campaigns setup
              </motion.div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {/* Icon: Gear/Settings */}
                  <span className="block text-white">
                    <svg className="w-8 h-8" fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" className="stroke-gray-900" />
                      <path
                        className="stroke-gray-900"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.36.36.58.86.58 1.41s-.22 1.05-.58 1.41z"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  Exclusive settings
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Only with us you can use ads on TikTok at exclusive rates with no spending limits.
                </p>
              </div>
            </motion.div>
            {/* Card 2: 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {/* Icon: Headset/Support */}
                  <span className="block text-white">
                    <svg className="w-8 h-8" fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
                      <path
                        className="stroke-gray-900"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 1a10 10 0 0 0-10 10v4a4 4 0 0 0 4 4h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5v-1a7 7 0 0 1 14 0v1h-1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1a4 4 0 0 0 4-4v-4A10 10 0 0 0 12 1z"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  24/7 Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Get personal, round-the-clock guidance and campaign management from our expert team.
                </p>
              </div>
            </motion.div>
            {/* Card 3: Instant Launch */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {/* Icon: Lightning Bolt/Launch */}
                  <span className="block text-white">
                    <svg className="w-8 h-8" fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
                      <path
                        className="stroke-gray-900"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">
                  Instant Launch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Start your campaigns immediately―no waiting, no red tape, just results.
                </p>
              </div>
            </motion.div>
            {/* Card 4: No Minimum Spend */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {/* Icon: Plus ("No min spend") */}
                  <span className="block text-white">
                    <svg className="w-8 h-8" fill="none" stroke="#222" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" className="stroke-gray-900" />
                      <path
                        className="stroke-gray-900"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 12h8M12 8v8"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  No Minimum Spend
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Run campaigns of any size—with us, there’s no minimum requirement, ever.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              If you manage 10 clients with $500 each, and we charge 15% commission, you can achieve better ROI and ROAS with Biggapon BD.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-lg"
            >
              Get started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div className="text-4xl font-bold text-white">×</div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Biggapon BD is a TikTok partner?

            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Start working with Biggapon BD and get the opportunity to create TikTok advertising campaigns. Join thousands of successful businesses and agencies that trust Biggapon BD for their advertising needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Official Partner</div>
                <div className="text-white/80">Certified TikTok advertising partner</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Premium Access</div>
                <div className="text-white/80">Direct access to TikTok's latest features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Expert Support</div>
                <div className="text-white/80">Dedicated TikTok specialists available 24/7</div>
              </div>

            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-12 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:shadow-lg"
            >
              Start Partnership
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              Clients about us
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real feedback from businesses that have transformed their advertising with Biggapon BD's TikTok solutions.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
            >
              <svg
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Testimonial Card */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {testimonials && testimonials.length > 0 && (
                <>
                  <div className="flex items-center space-x-6 mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${testimonials[activeTestimonial]?.logoColor || "from-green-500 to-cyan-500"} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-2xl">
                        {testimonials[activeTestimonial]?.logo || ""}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial]?.company}
                      </h3>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(Number(testimonials[activeTestimonial]?.rating || 0))].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed mb-8 italic">
                    "{testimonials[activeTestimonial]?.testimonial}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonials[activeTestimonial]?.logoColor || "from-green-500 to-cyan-500"} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold">
                        {testimonials[activeTestimonial]?.author
                          ? testimonials[activeTestimonial].author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                          : ""}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonials[activeTestimonial]?.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[activeTestimonial]?.position}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial
                    ? "bg-gradient-to-r from-green-500 to-cyan-500 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Biggapon BD mailing list</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              No spam, just client case studies, automation tips and best practices for TikTok advertising delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-lg"
              >
                Subscribe
              </motion.button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
