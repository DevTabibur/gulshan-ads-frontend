"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Layout } from "../../components/Layout"

export default function SnapchatPage() {
  const [activeObjective, setActiveObjective] = useState(0)

  const snapchatStats = [
    {
      percentage: "4.1 min",
      description: "Average time in application",
      icon: "⏱️",
      color: "from-green-500 to-emerald-500",
    },
    {
      percentage: "83%",
      description: "of all 13-24 female audience",
      icon: "👥",
      color: "from-cyan-500 to-blue-500",
    },
    {
      percentage: "90%",
      description: "of content created by users",
      icon: "📱",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const ecommerceFormats = [
    {
      title: "Collection Ads",
      description: "Showcase multiple products in a single ad",
      mockup: "collection",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Product Catalog",
      description: "Dynamic product ads with real-time inventory",
      mockup: "catalog",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "AR Try-On",
      description: "Let users try products with AR technology",
      mockup: "ar-tryon",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Story Ads",
      description: "Full-screen immersive product experiences",
      mockup: "story",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const efficiencyFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Smart Audience",
      description: "Innovative formats, such as AR experiences, engage users in a unique way.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Smart Advertiser",
      description: "Streamlines the campaign management process with automated optimization.",
      color: "from-green-500 to-emerald-500",
    },
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
      title: "Advanced toolbox",
      description: "All creative assets, such as Lenses, targeting, bidding strategies and more.",
      color: "from-cyan-500 to-blue-500",
    },
  ]

  const funnelObjectives = [
    {
      title: "Unique active Snapchat audience is right for you",
      description: "Reach users who are actively engaged and ready to discover new products and brands.",
      author: "Marketing Expert",
      avatar: "ME",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Awareness objectives",
      description: "Build brand awareness with high-impact video ads and AR experiences that capture attention.",
      metrics: { reach: "2.1M", cpm: "$1.20", frequency: "2.3" },
      color: "from-green-500 to-emerald-500",
    },
  ]

  const performanceFormats = [
    {
      title: "Snap Ads",
      description: "Full-screen vertical video ads",
      metrics: { ctr: "0.84%", cpm: "$2.15" },
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Story Ads",
      description: "Branded content in Discover",
      metrics: { ctr: "1.23%", cpm: "$3.45" },
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "AR Lenses",
      description: "Interactive augmented reality",
      metrics: { engagement: "15s", shares: "12%" },
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Collection Ads",
      description: "Product showcase format",
      metrics: { roas: "4.2x", cvr: "2.8%" },
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full filter blur-3xl"></div>
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
                    Reach a high-converting
                  </span>
                  <br />
                  <span className="text-gray-700 dark:text-gray-300">audience you won't find</span>
                  <br />
                  <span className="text-gray-700 dark:text-gray-300">anywhere else</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                >
                  The ideal destination for dynamic customer focused brands, and eCommerce shops to create real
                  connections between their brand and their audience.
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
                  className="border-2 border-green-500 text-green-600 dark:text-green-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
                >
                  Learn More
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
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">750M+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">94%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Gen Z Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">5B+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Daily Snaps</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Snapchat Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Snapchat Interface */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
                    {/* Camera View */}
                    <div className="relative h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                      {/* Top Bar */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.0 }}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Person Image Placeholder */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute inset-8 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-2xl flex items-center justify-center"
                      >
                        <div className="w-32 h-40 bg-gradient-to-t from-orange-300/50 to-transparent rounded-t-full"></div>
                      </motion.div>

                      {/* Bottom Controls */}
                      <div className="absolute bottom-8 left-4 right-4">
                        <div className="flex items-center justify-between">
                          {/* Stories */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                          </motion.div>

                          {/* Capture Button */}
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                          >
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
                          </motion.div>

                          {/* Discover */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                          >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                className="absolute -top-4 -right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white p-3 rounded-full shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
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
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Stats */}
            <div className="space-y-8">
              {snapchatStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-6"
                >
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.percentage}</div>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{stat.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 pt-8"
              >
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                  Video Campaign
                </button>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  App Install
                </button>
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
                  Web View
                </button>
              </motion.div>
            </div>

            {/* Right Side - Analytics Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold text-xl">Snapchat audience</h3>
                  <div className="text-green-400 font-semibold">+24%</div>
                </div>

                {/* Chart Visualization */}
                <div className="relative h-64 flex items-end justify-around space-x-2">
                  {[
                    { height: "40%", color: "bg-green-500", label: "13-17" },
                    { height: "60%", color: "bg-cyan-500", label: "18-24" },
                    { height: "80%", color: "bg-yellow-500", label: "25-34" },
                    { height: "65%", color: "bg-orange-500", label: "35-44" },
                    { height: "45%", color: "bg-purple-500", label: "45+" },
                  ].map((bar, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      whileInView={{ height: bar.height }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className={`w-12 ${bar.color} rounded-t-lg mb-2`} style={{ height: bar.height }}></div>
                      <span className="text-gray-400 text-xs">{bar.label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-400">
                    <span className="text-white font-semibold">18%</span> increase in engagement
                  </div>
                  <div className="text-gray-400">
                    <span className="text-white font-semibold">25%</span> better conversion rate
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E-commerce Friendly Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full filter blur-3xl"></div>
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
                E-commerce-friendly
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Snapchat is a key platform for driving purchases and engaging consumers with brands. Discover the formats
              that work best for your business.
            </p>

            {/* Dynamic Ads Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm mt-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Dynamic Ads</span>
            </motion.div>
          </motion.div>

          {/* E-commerce Formats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto w-48 h-80 bg-gray-900 rounded-[2rem] p-1 shadow-xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-black rounded-[1.8rem] overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-20`}></div>

                    {/* Mock Content */}
                    <div className="absolute inset-4 bg-white/10 rounded-xl flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="w-24 h-3 bg-white/30 rounded mb-2"></div>
                        <div className="w-16 h-2 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div
                        className={`bg-gradient-to-r ${format.color} text-white px-4 py-2 rounded-lg text-xs font-semibold text-center`}
                      >
                        Shop Now
                      </div>
                    </div>
                  </div>
                </div>

                {/* Format Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{format.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{format.description}</p>
                </div>
              </motion.div>
            ))}
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
              Advanced targeting and creative formats help you reach customers at every stage of their shopping journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-lg"
            >
              Explore E-commerce Solutions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Efficiency Multipliers Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full filter blur-3xl"></div>
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
                Efficiency multipliers
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">for the bold of heart</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {efficiencyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 group text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold">Campaign Dashboard</h3>
                  <p className="text-gray-400 text-sm">Real-time performance metrics</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">2.4x</div>
                    <div className="text-gray-400 text-xs">ROAS</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">1.2M</div>
                    <div className="text-gray-400 text-xs">Reach</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400">0.85%</div>
                    <div className="text-gray-400 text-xs">CTR</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funnel Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full filter blur-3xl"></div>
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
                Reaching every step
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">of the funnel</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Full-funnel are designed to reach to engage different audiences across the entire customer journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Objectives */}
            <div className="space-y-8">
              {funnelObjectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  {index === 0 ? (
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${objective.color} rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white font-bold">{objective.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{objective.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">{objective.description}</p>
                        <div className="text-sm text-gray-500 dark:text-gray-500">{objective.author}</div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{objective.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{objective.description}</p>
                      {objective.metrics && (
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-green-600 dark:text-green-400">
                              {objective.metrics.reach}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Reach</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                              {objective.metrics.cpm}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">CPM</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                              {objective.metrics.frequency}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Frequency</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Side - Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex space-x-4 justify-center">
                {/* Phone 1 */}
                <div className="w-40 h-72 bg-gray-900 rounded-[2rem] p-1 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-[1.8rem] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">Awareness</div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="w-40 h-72 bg-gray-900 rounded-[2rem] p-1 shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-green-900/50 to-cyan-900/50 rounded-[1.8rem] flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs">Conversion</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Objectives Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Performance objectives</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                Choose the format
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">that best suits your goals</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From awareness to conversion, Snapchat offers various ad formats optimized for different campaign
              objectives and performance goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto w-48 h-80 bg-gray-900 rounded-[2rem] p-1 shadow-xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-black rounded-[1.8rem] overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${format.color} opacity-20`}></div>

                    {/* Mock Content */}
                    <div className="absolute inset-4 bg-white/10 rounded-xl flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h10"
                          />
                        </svg>
                      </div>
                      <div className="text-center">
                        <div className="w-24 h-3 bg-white/30 rounded mb-2"></div>
                        <div className="w-16 h-2 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    {/* Metrics Display */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 rounded-lg p-2 text-white text-xs">
                        {Object.entries(format.metrics).map(([key, value], i) => (
                          <div key={key} className="flex justify-between">
                            <span className="capitalize">{key}:</span>
                            <span className="font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Format Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{format.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{format.description}</p>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {Object.entries(format.metrics).map(([key, value], i) => (
                      <span key={key}>
                        {key.toUpperCase()}: <span className="font-semibold">{value}</span>
                        {i < Object.entries(format.metrics).length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-lg"
            >
              Start Your Campaign
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full filter blur-3xl"></div>
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
              No spam, just client case studies, automation tips and best practices for Snapchat advertising delivered
              to your inbox.
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
