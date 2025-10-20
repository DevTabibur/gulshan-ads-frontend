"use client"

import { Layout } from "../../components/Layout"
import { motion } from "framer-motion"
import { useState } from "react"

export default function TelegramPage() {
  const [activeTab, setActiveTab] = useState("regular")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Hero Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="space-y-6">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                    variants={itemVariants}
                  >
                    Reap the{" "}
                    <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                      Telegram Ads
                    </span>{" "}
                    early-bird benefits
                  </motion.h1>
                  <motion.p
                    className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
                    variants={itemVariants}
                  >
                    The newest advertising platform that rewards with exclusivity. Be target in any language with
                    effective support and easy payment without crypto.
                  </motion.p>
                  <motion.div
                    className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
                    variants={itemVariants}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Only available in open period</span>
                  </motion.div>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start now
                </motion.button>
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700"
                  variants={floatingVariants}
                  animate="animate"
                >
                  {/* Telegram Interface Mockup */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">Telegram</span>
                    </div>

                    {/* Chat List */}
                    <div className="space-y-3">
                      {[
                        { name: "Tech News", message: "Latest updates in AI technology...", time: "14:30", unread: 3 },
                        {
                          name: "Marketing Tips",
                          message: "How to increase your ROI by 300%",
                          time: "13:45",
                          unread: 1,
                        },
                        {
                          name: "Business Channel",
                          message: "Sponsored: Grow your business with...",
                          time: "12:20",
                          sponsored: true,
                        },
                        { name: "Crypto Updates", message: "Bitcoin reaches new heights...", time: "11:15", unread: 5 },
                        { name: "Design Community", message: "New design trends for 2024", time: "10:30", unread: 2 },
                      ].map((chat, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${chat.sponsored ? "bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 border border-cyan-200 dark:border-cyan-700" : ""}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                            {chat.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {chat.name}
                                {chat.sponsored && (
                                  <span className="ml-2 text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                                    Ad
                                  </span>
                                )}
                              </p>
                              <span className="text-xs text-gray-500 dark:text-gray-400">{chat.time}</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{chat.message}</p>
                          </div>
                          {chat.unread && (
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-xs text-white font-bold">{chat.unread}</span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 md:p-12 text-white"
              variants={itemVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" variants={itemVariants}>
                The time is now...
              </motion.h2>

              <div className="grid md:grid-cols-5 gap-8">
                {[
                  { number: "900m+", label: "users around the globe", color: "text-orange-400" },
                  { number: "5.5m", label: "users that they brought to Telegram", color: "text-cyan-400" },
                  { number: "18m+", label: "users who click through Telegram ads", color: "text-green-400" },
                  { number: "50%", label: "of users read 10 channels and groups", color: "text-yellow-400" },
                  { number: "40%", label: "of users have more than 500 contacts", color: "text-purple-400" },
                ].map((stat, index) => (
                  <motion.div key={index} className="text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                    <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`}>{stat.number}</div>
                    <p className="text-gray-300 text-sm leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p className="text-center text-gray-400 mt-8 text-sm" variants={itemVariants}>
                * Telegram is the champion in terms of effective visibility. Each post reaches the majority of channel
                subscribers.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Ad Formats Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
              >
                {/* Telegram Chat Interface with Ads */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Marketing Channel</span>
                  </div>

                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {/* Regular Message */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Welcome to our marketing insights channel! Here you'll find the latest trends and strategies.
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">Today at 14:30</span>
                    </div>

                    {/* Sponsored Message */}
                    <div className="bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 border border-cyan-200 dark:border-cyan-700 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Sponsored</span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        🚀 Boost your business with our premium marketing tools! Get 50% off your first month.
                      </p>
                      <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                        Learn More
                      </button>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">Promoted</span>
                    </div>

                    {/* Another Regular Message */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        New study shows that video content gets 3x more engagement than static posts.
                      </p>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 block">Today at 13:45</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8">
                <div className="space-y-6">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >
                    Ads that can't be missed
                  </motion.h2>

                  <div className="space-y-6">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">Native Integration</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Ads blend seamlessly with organic content in channels and groups, ensuring maximum visibility
                        and engagement.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">2% Higher CTR</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Compared to traditional platforms, Telegram ads achieve significantly higher click-through rates
                        due to user engagement.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">1:1 Coverage CPM</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Optimized cost per mille with guaranteed reach to your target audience across all device types.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Conditions Table Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Conditions of work with us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                With Biggapon BD you can launch ads on any platform. We support 3 types of advertising in Telegram - focused
                on international audience and on Russian-speaking audience. A different type of account is suitable for
                each of these purposes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
            >
              {/* Table Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-green-500 p-6">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-white font-semibold">Account type</div>
                  <div className="text-white font-semibold text-center">Regular Ads (TON)</div>
                  <div className="text-white font-semibold text-center">Telegram Ads (RUB)</div>
                  <div className="text-white font-semibold text-center">Business accounts</div>
                </div>
              </div>

              {/* Table Content */}
              <div className="p-6 space-y-4">
                {[
                  {
                    feature: "Audience",
                    regular: "International audience on Telegram channels and bots",
                    telegram: "Russian-speaking users on Telegram channels, including Russia and CIS countries",
                    business: "Advertising content in Russian and English languages",
                  },
                  {
                    feature: "Channel manager",
                    regular: "Run ads in the language that Telegram supports",
                    telegram: "Advertising content in Russian and English languages",
                    business: "Advertising content in Russian and English languages",
                  },
                  {
                    feature: "Payment currency",
                    regular: "Payment in dollars",
                    telegram: "Payment in rubles",
                    business: "Payment in euros",
                  },
                  {
                    feature: "Ad account spending",
                    regular: "USD",
                    telegram: "RUB",
                    business: "EUR",
                  },
                  {
                    feature: "Billing account minimum top up",
                    regular: "50 USD account minimum top up",
                    telegram: "50 RUB - minimum commission",
                    business: "500 euros - minimum commission",
                  },
                  {
                    feature: "Additional Commission",
                    regular: "15%",
                    telegram: "15% to 20% (depending on spending)",
                    business: "15% to 20% (depending on spending)",
                  },
                  {
                    feature: "Targeting capabilities",
                    regular:
                      "Targeting by interests, demographics, behavior, and custom audiences including lookalike, and so on",
                    business:
                      "• GEO targeting within Russia and CIS countries\n• Targeting by interests and demographics\n• Targeting on specific Russian and English language\n• Targeting by device type\n• Targeting by time of day and day of week\n• Targeting by connection type and mobile carrier\n• Targeting by operating system and device model",
                  },
                ].map((row, index) => (
                  <motion.div
                    key={index}
                    className="grid grid-cols-4 gap-4 py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                    variants={itemVariants}
                  >
                    <div className="font-medium text-gray-900 dark:text-white">{row.feature}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{row.regular}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{row.telegram}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">{row.business}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Solving any marketing goal by the power of words
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "💡",
                  title: "Brand awareness",
                  description:
                    "Increase brand recognition and reach new audiences through targeted Telegram campaigns with high engagement rates.",
                },
                {
                  icon: "🎯",
                  title: "Hitting the target",
                  description:
                    "Precise targeting capabilities allow you to reach exactly the right audience based on interests, demographics, and behavior.",
                },
                {
                  icon: "📈",
                  title: "Meaningful presence",
                  description:
                    "Build a strong presence on Telegram with consistent messaging and strategic ad placement across channels.",
                },
                {
                  icon: "🔄",
                  title: "Conversions",
                  description:
                    "Drive actual results with conversion-focused campaigns that turn Telegram users into customers.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className="text-center mt-12" variants={itemVariants}>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start now
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Getting Started Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <div className="space-y-6">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                    variants={itemVariants}
                  >
                    Biggapon BD will help you get started quickly
                  </motion.h2>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "We help you with different solutions and advice",
                    description:
                      "Our team will work with you to find the best approach for your specific needs and goals.",
                  },
                  {
                    step: "2",
                    title: "We'll get your ideal customer to work in your favor",
                    description:
                      "Through precise targeting and optimization, we ensure your ads reach the most relevant audience.",
                  },
                  {
                    step: "3",
                    title: "We'll share benchmarks for your team, and we'll offer you the best for you",
                    description:
                      "Get industry insights and performance benchmarks to maximize your campaign effectiveness.",
                  },
                  {
                    step: "4",
                    title: "We'll work hand in hand with your team",
                    description:
                      "Collaborative approach ensuring seamless integration with your existing marketing efforts.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          className="bg-gray-900 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Join the Biggapon BD mailing list</h2>
                <p className="text-xl text-gray-300">No spam, just email about automation and best practices.</p>
              </div>

              <motion.div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" variants={itemVariants}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Layout>
  )
}
