"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"

export const HowItWorks = () => {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const isInViewport = useInView(sectionRef, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: "Create Your Account",
      subtitle: "Quick & Free Setup",
      description:
        "Register in under 2 minutes with our streamlined onboarding process. No setup fees, no hidden costs - just instant access to premium advertising platforms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      features: ["Instant activation", "No credit card required", "Multi-platform access"],
    },
    {
      id: 2,
      title: "Verify & Configure",
      subtitle: "Secure Account Setup",
      description:
        "Complete our quick verification process to ensure smooth ad delivery and account security. Our team pre-approves your setup to prevent any launch delays.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "from-cyan-500 to-blue-500",
      features: ["Identity verification", "Account optimization", "Compliance check"],
    },
    {
      id: 3,
      title: "Fund Your Campaigns",
      subtitle: "Flexible Payment Options",
      description:
        "Add funds instantly via card, bank transfer, or invoice. Our smart allocation system distributes your budget optimally across Meta, TikTok, and Telegram.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
      features: ["Instant processing", "Multi-currency support", "Smart budget allocation"],
    },
    {
      id: 4,
      title: "Launch & Optimize",
      subtitle: "Expert-Guided Success",
      description:
        "Go live with expert support every step of the way. Our certified specialists monitor, optimize, and scale your campaigns for maximum ROI across all platforms.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-500",
      features: ["24/7 monitoring", "Performance optimization", "Dedicated support"],
    },
  ]

  // Auto-advance active step
  useEffect(() => {
    if (!isInViewport) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isInViewport, steps.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
              How to Get Started
            </span>
            <br />with BiggaponBD?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Launch your first multi-platform advertising campaign in just 4 simple steps. Our streamlined process gets
            you from signup to success in minutes, not hours.
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <motion.div
                variants={lineVariants as any}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full origin-left"
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants as any}
                className="relative group"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                    activeStep === index
                      ? "border-green-500 dark:border-green-400 scale-105"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      animate={{
                        scale: activeStep === index ? 1.1 : 1,
                        rotate: activeStep === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg relative`}
                    >
                      {activeStep === index ? (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                          {step.icon}
                        </motion.div>
                      ) : (
                        <span className="text-2xl font-bold">{step.id}</span>
                      )}

                      {/* Pulse effect for active step */}
                      {activeStep === index && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl`}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{step.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connection Line (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Advertising?</h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses and agencies who trust AdHand for their multi-platform advertising
              needs. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Start Free Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Step Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep
                  ? "bg-gradient-to-r from-green-500 to-cyan-500 w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}