"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/useLanguage"
import { translations } from "@/data/translations"
import {
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  Target,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Globe,
  BarChart3,
  Rocket,
  Shield,
  Lightbulb,
  MessageSquare,
  Calendar,
  CreditCard,
} from "lucide-react"
import { Layout } from "@/components/Layout"

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const floatingVariants: any = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-2, 2, -2],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const pulseVariants: any = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function AdvertisersPage() {
  // const { language } = useLanguage()
  // const t = translations[language]

  const stats = [
    { icon: Users, value: "200+", label: "Active Advertisers", color: "text-emerald-400" },
    { icon: TrendingUp, value: "300%", label: "Average ROI", color: "text-cyan-400" },
    { icon: DollarSign, value: "$2M+", label: "Revenue Generated", color: "text-yellow-400" },
    { icon: Clock, value: "12/6", label: "Support Available", color: "text-orange-400" },
  ]

  const benefits = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your ideal clients with laser-focused targeting across all major platforms",
      gradient: "from-emerald-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your campaigns running in under 24 hours with our streamlined process",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Award,
      title: "Expert Management",
      description: "Our certified specialists handle everything while you focus on your craft",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance with detailed insights and optimize for maximum results",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const services = [
    {
      icon: Globe,
      title: "Multi-Platform Campaigns",
      description: "Facebook, Instagram, Google, LinkedIn, TikTok - we handle them all",
      features: ["Cross-platform optimization", "Weekly reporting", "Unified reporting", "Budget friendly campaign"],
      price: "From $299/mo",
    },
    {
      icon: Rocket,
      title: "Growth Acceleration",
      description: "Scale your freelance business with proven advertising strategies",
      features: ["Lead generation", "Brand awareness", "Client acquisition"],
      price: "From $499/mo",
    },
    {
      icon: Shield,
      title: "Premium Management",
      description: "White-glove service with dedicated account manager",
      features: ["1-on-1 strategy calls", "Custom creatives", "Priority support"],
      price: "From $999/mo",
    },
  ]

  const testimonials = [
    {
      name: "Pijus",
      role: "Digital Marketer",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Gulshan Ads transformed my freelance business. I went from struggling to find clients to having a 3-month waiting list!",
      rating: 5,
      revenue: "+400% revenue",
    },
    {
      name: "MD Raju",
      role: "Business Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "The ROI is incredible. Every dollar I spend on ads brings back $4-5 in new client revenue. Game changer!",
      rating: 5,
      revenue: "+250% clients",
    },
    {
      name: "Amir Hossain",
      role: "Business Owner",
      avatar: "/placeholder.svg?height=60&width=60",
      content:
        "Finally, I can focus on what I love - writing - while Gulshan Ads handles all my marketing. Best decision ever!",
      rating: 5,
      revenue: "+180% income",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We analyze your niche, goals, and current marketing efforts",
      icon: MessageSquare,
      duration: "30 min",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom advertising strategy tailored to your freelance business",
      icon: Lightbulb,
      duration: "2-3 days",
    },
    {
      step: "03",
      title: "Campaign Launch",
      description: "We create and launch your campaigns across selected platforms",
      icon: Rocket,
      duration: "1 week",
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous monitoring and optimization for maximum ROI",
      icon: TrendingUp,
      duration: "Ongoing",
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
        {/* Hero Section */}
        <motion.section
          className="relative overflow-hidden py-20 lg:py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-500/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    For Advertisers & Agencies
                  </span>
                </motion.div>

                <motion.h1 className="text-4xl lg:text-6xl font-bold leading-tight" variants={itemVariants}>
                  <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    Scale Your
                  </span>
                  <br />
                  <span className="text-slate-900 dark:text-white">Freelance Business</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    With Smart Ads
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg"
                  variants={itemVariants}
                >
                  Stop chasing clients. Let them find you with our proven advertising strategies that have helped
                  10,000+ Advertisers grow their business by 300% on average.
                </motion.p>

                <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Growing Today
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Case Studies
                  </motion.button>
                </motion.div>

                <motion.div className="flex items-center gap-6 pt-4" variants={itemVariants}>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">4.9/5 from 2,500+ Advertisers</span>
                </motion.div>
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <motion.div className="relative z-10" variants={floatingVariants} animate="animate">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Campaign Performance</h3>
                        <div className="flex items-center gap-2 text-emerald-600">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm font-medium">+47% this month</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-emerald-600">$12.4K</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">Revenue</div>
                        </div>
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-cyan-600">156</div>
                          <div className="text-sm text-slate-600 dark:text-slate-400">New Leads</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600 dark:text-slate-400">Facebook Ads</span>
                          <span className="text-slate-900 dark:text-white font-medium">$4.2K</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "68%" }}
                            transition={{ duration: 2, delay: 1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                  variants={pulseVariants}
                  animate="animate"
                >
                  <DollarSign className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="py-16 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why Advertisers Choose
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Gulshan Ads
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Join thousands of successful Advertisers who've transformed their business with our proven advertising
                solutions
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${benefit.gradient.split(" ")[1]}, ${benefit.gradient.split(" ")[3]})`,
                    }}
                  />

                  <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${benefit.gradient} rounded-xl mb-6`}
                    >
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{benefit.title}</h3>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Choose Your
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Growth Plan
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Flexible packages designed to scale with your freelance business, from startup to enterprise level
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}

                  <div
                    className={`relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-2 ${index === 1
                        ? "border-emerald-500 dark:border-emerald-400"
                        : "border-slate-200 dark:border-slate-700"
                      } group-hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                        <div className="text-2xl font-bold text-emerald-600 mt-1">{service.price}</div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${index === 1
                          ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg hover:shadow-xl"
                          : "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                        }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          className="py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Success Stories from
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Real Advertisers
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                See how AdHGulshan Ads and has transformed freelance businesses across different industries
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="group"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">{testimonial.role}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-600 font-bold text-sm">{testimonial.revenue}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-cyan-900/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                How We
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Get You Started
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our proven 4-step process to transform your freelance business with strategic advertising
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{step.description}</p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 transform -translate-x-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center max-w-4xl mx-auto" variants={itemVariants}>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Ready to Scale Your
                <br />
                Freelance Business?
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join 200+ successful Advertisers who've transformed their business with Gulshan Ads. Get your first campaign running in 24 hours with our expert team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CreditCard className="w-5 h-5" />
                  View Pricing Plans
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-8 text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>30-day guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "1s" }}
          />
        </motion.section>
      </div>
    </Layout>
  )
}
