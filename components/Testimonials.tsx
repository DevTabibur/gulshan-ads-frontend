"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"

export const Testimonials = ({ testimonials }: { testimonials: any[] }) => {
  const { t, isRTL } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials?.length || 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials?.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials?.length || 1))
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials?.length || 1)) % (testimonials?.length || 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials?.[currentIndex]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                Client Success
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover how businesses and agencies worldwide are achieving exceptional results with Biggapon BD's
              multi-platform advertising solutions.
            </p>
          </motion.div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial?._id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
            >
              {/* Company Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`bg-gradient-to-br from-green-500 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-8 left-4 w-8 h-8 bg-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-12 h-12 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentTestimonial?.companyName}
                      </span>
                    </div>

                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        {currentTestimonial?.authorImage ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${currentTestimonial?.authorImage}`}
                            alt={currentTestimonial?.fullName || "Author"}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          <span className="text-3xl font-bold">
                            {currentTestimonial?.fullName
                              ?.split(" ")
                              ?.map((n: string) => n?.[0])
                              ?.join("")}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold">{currentTestimonial?.companyName}</h3>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{currentTestimonial?.rating ?? "-"}</div>
                        <div className="text-white/80 text-xs uppercase tracking-wider">Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{currentTestimonial?.createdAt ? new Date(currentTestimonial?.createdAt).getFullYear() : "-"}</div>
                        <div className="text-white/80 text-xs uppercase tracking-wider">Year</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{currentTestimonial?.status ?? "-"}</div>
                        <div className="text-white/80 text-xs uppercase tracking-wider">Status</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12 relative"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  <div className="pt-8">
                    <blockquote className="text-xl md:text-2xl text-gray-900 dark:text-white leading-relaxed mb-8 font-medium">
                      "{currentTestimonial?.description}"
                    </blockquote>

                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center`}
                      >
                        <span className="text-white font-bold">
                          {currentTestimonial?.fullName
                            ?.split(" ")
                            ?.map((n: string) => n?.[0])
                            ?.join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{currentTestimonial?.fullName}</div>
                        <div className="text-gray-600 dark:text-gray-400">{currentTestimonial?.companyName}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
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
            onClick={nextTestimonial}
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
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials?.map?.((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-green-500 to-cyan-500 w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Auto-play control */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h10"
                />
              </svg>
            )}
            <span className="text-sm">{isAutoPlaying ? "Pause" : "Play"} Auto-scroll</span>
          </button>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Start your journey with Biggapon BD today and discover how our multi-platform advertising solutions can transform
            your business results.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}
