"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Layout } from "../../components/Layout"
import Link from "next/link";

// Minimal toast for feedback
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  // Auto-close after 3.5secs
  setTimeout(onClose, 3500)
  return (
    <div className="fixed bottom-8 left-1/2 z-50 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-xl shadow-xl text-base font-semibold">
      {message}
    </div>
  )
}

export default function MetaPage() {
  const [activeTab, setActiveTab] = useState("recommended")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalBiz, setModalBiz] = useState<string>("")
  const [modalWhatsapp, setModalWhatsapp] = useState<string>("")
  const [sending, setSending] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const floatingElements = [
    {
      icon: (
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
          </svg>
        </div>
      ),
      position: { top: "10%", right: "15%" },
      delay: 0.2,
    },
    {
      icon: (
        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      ),
      position: { top: "25%", right: "8%" },
      delay: 0.4,
    },
    {
      icon: (
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      ),
      position: { top: "45%", right: "20%" },
      delay: 0.6,
    },
    {
      icon: (
        <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      ),
      position: { bottom: "25%", right: "12%" },
      delay: 0.8,
    },
    {
      icon: (
        <div className="w-11 h-11 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      ),
      position: { bottom: "15%", right: "25%" },
      delay: 1.0,
    },
  ]

  const helperServices = [
    { name: "Targeting optimization", rating: 8.5, category: "Audience" },
    { name: "Creative testing", rating: 8.6, category: "Creatives" },
    { name: "Budget allocation", rating: 8.2, category: "Strategy" },
    { name: "Performance tracking", rating: 8.0, category: "Analytics" },
    { name: "A/B testing", rating: 8.4, category: "Optimization" },
  ]

  const metaTestimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Plus",
      role: "Marketing Director",
      avatar: "SJ",
      rating: 5,
      testimonial:
        "Biggapon BD's Meta expertise helped us achieve 340% ROAS increase. Their account management is flawless.",
      metrics: { roas: "4.2x", reach: "2.1M", cpa: "-45%" },
    },
    {
      name: "Michael Chen",
      company: "TechStart Solutions",
      role: "Growth Manager",
      avatar: "MC",
      rating: 5,
      testimonial:
        "The dedicated Meta support line saved us during a critical campaign. Professional and responsive team.",
      metrics: { roas: "3.8x", reach: "1.8M", cpa: "-38%" },
    },
    {
      name: "Emma Rodriguez",
      company: "Fashion Forward",
      role: "CMO",
      avatar: "ER",
      rating: 5,
      testimonial: "Their Meta certification shows. Campaign optimization and creative guidance are top-notch.",
      metrics: { roas: "5.1x", reach: "3.2M", cpa: "-52%" },
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$300",
      period: "minimum spend",
      description: "Perfect for small businesses starting with Meta advertising",
      features: [
        "Basic account setup",
        "Standard support",
        "Monthly reporting",
        "Email assistance",
        "Basic optimization",
      ],
      color: "from-green-500 to-emerald-500",
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,000",
      period: "minimum spend",
      description: "Ideal for growing businesses with serious advertising goals",
      features: [
        "Premium account access",
        "Dedicated account manager",
        "Weekly optimization calls",
        "Advanced reporting",
        "Priority support",
        "Creative consultation",
      ],
      color: "from-cyan-500 to-blue-500",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$10,000",
      period: "minimum spend",
      description: "For large businesses requiring comprehensive Meta solutions",
      features: [
        "White-label solutions",
        "Direct Meta support line",
        "Custom reporting dashboard",
        "24/7 dedicated support",
        "Advanced optimization",
        "Strategic consultation",
        "Multi-account management",
      ],
      color: "from-teal-500 to-cyan-500",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "What makes Biggapon BD's Meta accounts different?",
      answer:
        "Our Meta accounts are pre-verified, have no spending limits, and come with dedicated support. We maintain direct relationships with Meta to ensure optimal performance and quick issue resolution.",
    },
    {
      question: "How quickly can I start advertising?",
      answer:
        "Most clients can start advertising within 24-48 hours. Our streamlined onboarding process includes account setup, verification, and initial campaign configuration.",
    },
    {
      question: "Do you provide creative services?",
      answer:
        "Yes, we offer creative consultation and optimization services. Our team can help with ad copy, visual assets, and A/B testing strategies to maximize your campaign performance.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide tiered support based on your plan - from email support for Starter plans to 24/7 dedicated account managers for Enterprise clients. All plans include access to our Meta-certified specialists.",
    },
    {
      question: "Can I manage multiple ad accounts?",
      answer:
        "Yes, our Enterprise plan includes multi-account management capabilities. You can manage multiple brands or client accounts from a single dashboard with consolidated reporting.",
    },

  ]



  return (
    <Layout>


      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
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
                    Instagram and Facebook
                  </span>
                  <br />
                  <span className="text-gray-700 dark:text-gray-300">Accounts with Benefits</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                >
                  Pay for Instagram and Facebook on favorable terms and run campaigns in reliable Biggapon BD accounts with
                  expert support
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
                  Sign up
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
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">3.8B+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Meta Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expert Support</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Person with floating elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Main person image placeholder */}
              <div className="relative bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-orange-200 to-yellow-200 dark:from-orange-800/30 dark:to-yellow-800/30 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Person silhouette */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full h-full bg-gradient-to-t from-orange-300/50 to-transparent dark:from-orange-700/30 dark:to-transparent rounded-2xl flex items-end justify-center"
                  >
                    <div className="w-32 h-40 bg-gradient-to-t from-orange-400 to-orange-300 dark:from-orange-600 dark:to-orange-500 rounded-t-full mb-8 relative">
                      {/* Laptop */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gray-700 dark:bg-gray-600 rounded-lg">
                        <div className="w-full h-8 bg-gray-800 dark:bg-gray-700 rounded-t-lg"></div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              {floatingElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: element.delay,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="absolute"
                  style={element.position}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: element.delay,
                    }}
                  >
                    {element.icon}
                  </motion.div>
                </motion.div>
              ))}

              {/* Additional floating text elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-[60%] left-[-10%] bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-xs font-semibold text-gray-900 dark:text-white">Biggapon BD</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Expert Support</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute bottom-[20%] left-[-5%] bg-green-50 dark:bg-green-900/20 rounded-xl p-3 shadow-lg border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300">Campaign Active</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 text-gray-100 dark:text-gray-800"
            fill="currentColor"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Meta Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        {/* Background decoration */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold text-sm mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Commission - 10%</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                Biggapon BD simplifies working
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">with Meta at every stage</span>
            </h2>

            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Convenient payment</h3>
                <p className="text-gray-600 dark:text-gray-400">With opportunities for budget optimization</p>
              </div>
            </div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Full Control Over Expenses */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-3xl p-8 shadow-lg border border-green-200 dark:border-green-800 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-green-400 rounded-full"></div>
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-cyan-400 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative z-10">
                  {/* Balance Card */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl p-6 text-white mb-6 shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium opacity-90">Balance</span>
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-2xl font-bold">$1,200 USD</div>
                  </motion.div>

                  {/* Platform Icons */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { icon: "📘", bg: "from-blue-500 to-blue-600" },
                      { icon: "📷", bg: "from-pink-500 to-rose-500" },
                      { icon: "📘", bg: "from-blue-600 to-blue-700" },
                      { icon: "📷", bg: "from-pink-600 to-rose-600" },
                      { icon: "📘", bg: "from-blue-500 to-blue-600" },
                      { icon: "📷", bg: "from-pink-500 to-rose-500" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`w-12 h-12 bg-gradient-to-r ${item.bg} rounded-xl flex items-center justify-center text-white shadow-lg`}
                      >
                        <span className="text-lg">{item.icon}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full Control Over Expenses</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Easily top up your Biggapon BD balance using a card or invoice, and allocate funds across multiple
                  campaigns with complete transparency and control.
                </p>
              </motion.div>
            </motion.div>

            {/* All the paperwork you need */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-3xl p-8 shadow-lg border border-orange-200 dark:border-orange-800 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 right-6 w-16 h-16 border-2 border-orange-400 rounded-full"></div>
                  <div className="absolute bottom-12 left-6 w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>

                <div className="relative z-10">
                  {/* Document Interface */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl mb-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">Download invoice</div>
                        <div className="text-sm font-medium text-orange-600 dark:text-orange-400">
                          Request documents
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Monthly Report */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500 dark:text-gray-400 mb-1">Month</div>
                          <div className="font-semibold text-gray-900 dark:text-white">December</div>
                        </div>
                        <div>
                          <div className="text-gray-500 dark:text-gray-400 mb-1">Amount</div>
                          <div className="font-semibold text-gray-900 dark:text-white">$1,200</div>
                        </div>
                        <div>
                          <div className="text-gray-500 dark:text-gray-400 mb-1">VAT</div>
                          <div className="font-semibold text-gray-900 dark:text-white">$240</div>
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">All the paperwork you need</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Closing documents in the required format for easy reporting. Download invoices, request documents, and
                  manage all your financial paperwork seamlessly.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Launch and Management Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
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
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Campaign launch and management
              </h2>
            </div>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Accounts without limitations */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 shadow-lg border border-green-200 dark:border-green-800"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Accounts without limitations</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Quick setup of time-tested accounts with no spending limits and premium features enabled from day one.
                </p>
              </div>

              {/* Spend indicator */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Spend</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Unlimited daily spend</div>
              </div>
            </motion.div>

            {/* Assistance at the Start */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-6 shadow-lg border border-pink-200 dark:border-pink-800"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Assistance at the Start</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  We will check your creatives and campaign settings to ensure an effective start without ad blocking.
                </p>
              </div>

              {/* Progress indicator */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Biggapon BD has completed</span>
                  <span className="text-sm font-bold text-pink-600 dark:text-pink-400">22/30</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full"
                    style={{ width: "73%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">Campaign optimization tasks</div>
              </div>
            </motion.div>

            {/* Support in Difficult Times */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-6 shadow-lg border border-purple-200 dark:border-purple-800"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Support in Difficult Times</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Biggapon BD experts are available in chat to answer questions or provide quick assistance when needed.
                </p>
              </div>

              {/* Chat interface */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">Gamel</div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600 dark:text-green-400">Online</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-900 dark:text-white">Hello 👋</p>
                  <p className="text-sm text-gray-900 dark:text-white">How can I help you?</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Helper Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-3xl p-8 shadow-lg border border-orange-200 dark:border-orange-800"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Helper services</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Integrated services that help select the right settings
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  and audiences for targeting, based on Biggapon BD's experience with different types of businesses
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                {/* Tabs */}
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => setActiveTab("recommended")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "recommended"
                      ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                  >
                    Recommended (235)
                  </button>
                  <button
                    onClick={() => setActiveTab("current")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === "current"
                      ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                  >
                    Currently used (6)
                  </button>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  {helperServices.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{service.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{service.category}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">{service.rating}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(service.rating) ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                                }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
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
                Meta Advertising
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">Pricing Plans</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your Meta advertising needs. All plans include our expert support and premium
              account access.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border-2 ${tier.popular
                  ? "border-green-500 dark:border-green-400 scale-105"
                  : "border-gray-200 dark:border-gray-700"
                  }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">{tier.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{tier.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  // onClick={handleModalOpen}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${tier.popular
                    ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600"
                    : "border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
                    }`}
                >
                  <Link href="https://wa.link/izw72x" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Testimonials Section */}
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
                Meta Success
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real results from businesses that trust Biggapon BD for their Meta advertising campaigns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metaTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {testimonial.metrics.roas}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">ROAS</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cyan-600 dark:text-cyan-400">
                      {testimonial.metrics.reach}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Reach</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{testimonial.metrics.cpa}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">CPA</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about our Meta advertising services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                Ready to Start
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">Your Meta Campaign?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Get a free consultation with our Meta advertising experts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Monthly Ad Budget
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors">
                    <option>$500 - $2,000</option>
                    <option>$2,000 - $10,000</option>
                    <option>$10,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tell us about your goals
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  placeholder="Describe your advertising goals and what you'd like to achieve with Meta advertising..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:shadow-lg"
              >
                Get Free Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Biggapon BD × Meta Partnership Section */}
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
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="text-4xl font-bold text-white">×</div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Biggapon BD × Meta</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "2+ years of experience with the platform",
                description: "Deep expertise in Meta's advertising ecosystem",
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
                title: "Dedicated support line with Meta",
                description: "Direct access to Meta's support team for urgent issues",
              },
              {
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
                title: "Regularly enhancing expertise and team certification from Meta",
                description: "Continuous learning and Meta Blueprint certifications",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:shadow-lg"
            >
              Sign up
            </motion.button>
          </motion.div>
        </div>
      </section>

      
    </Layout>
  )
}
