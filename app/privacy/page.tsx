"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  Globe,
  FileText,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Layout } from "@/components/Layout";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconVariants: any = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Layout>
        <div className="">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -150, 0],
                y: [0, 100, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-full blur-xl"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div
                variants={iconVariants}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-6"
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Your privacy is our priority. Learn how Biggapon BD protects and
                manages your data in our advertising services.
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Last updated: January 2024
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Navigation
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { icon: Eye, text: "Data Collection", href: "#collection" },
                    { icon: Database, text: "Data Usage", href: "#usage" },
                    { icon: Lock, text: "Data Security", href: "#security" },
                    { icon: Users, text: "Your Rights", href: "#rights" },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 hover:from-green-100 hover:to-cyan-100 dark:hover:from-green-800/30 dark:hover:to-cyan-800/30 transition-all duration-300"
                    >
                      <item.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.text}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Introduction */}
              <motion.section
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Introduction
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Biggapon BD ("we," "our," or "us") is committed to protecting
                    your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you use
                    our advertising agency services, including campaign
                    management, audience targeting, and performance analytics
                    across platforms like Meta, TikTok, Snapchat, and Telegram.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    By using our services, you consent to the data practices
                    described in this policy. We encourage you to read this
                    policy carefully and contact us if you have any questions.
                  </p>
                </div>
              </motion.section>

              {/* Data Collection */}
              <motion.section
                variants={itemVariants}
                id="collection"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Information We Collect
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Contact details (name, email, phone number, business
                          address)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Business information (company name, industry,
                          advertising goals)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Payment information (billing address, payment method
                          details)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Account credentials and authentication data</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Campaign Data
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Advertising platform account access tokens and
                          permissions
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Campaign performance metrics and analytics data
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Audience targeting preferences and demographic data
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Creative assets and advertising content</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technical Information
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          IP address, browser type, and device information
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          Usage patterns and interaction data with our platform
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Cookies and similar tracking technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Data Usage */}
              <motion.section
                variants={itemVariants}
                id="usage"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    How We Use Your Information
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Service Delivery
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Campaign creation and management</li>
                      <li>• Audience targeting and optimization</li>
                      <li>• Performance monitoring and reporting</li>
                      <li>• Budget management and billing</li>
                      <li>• Customer support and consultation</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Business Operations
                    </h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Account authentication and security</li>
                      <li>• Platform integration and API management</li>
                      <li>• Analytics and performance insights</li>
                      <li>• Service improvement and development</li>
                      <li>• Legal compliance and fraud prevention</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-xl border border-green-200 dark:border-green-700">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Data Minimization Principle
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        We only collect and process data that is necessary for
                        providing our advertising services. We regularly review
                        and delete unnecessary data to minimize our data
                        footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Data Security */}
              <motion.section
                variants={itemVariants}
                id="security"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Data Security & Protection
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: "Encryption",
                      description:
                        "All data is encrypted in transit and at rest using industry-standard AES-256 encryption.",
                      icon: "🔐",
                    },
                    {
                      title: "Access Control",
                      description:
                        "Strict role-based access controls ensure only authorized personnel can access your data.",
                      icon: "👥",
                    },
                    {
                      title: "Monitoring",
                      description:
                        "24/7 security monitoring and automated threat detection protect against unauthorized access.",
                      icon: "🛡️",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-600"
                    >
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Additional Security Measures
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Multi-factor authentication for all accounts</li>
                      <li>
                        • Secure API integrations with advertising platforms
                      </li>
                      <li>
                        • Regular data backups and disaster recovery plans
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>
                        • Employee security training and background checks
                      </li>
                      <li>• Compliance with SOC 2 Type II standards</li>
                      <li>
                        • Incident response and breach notification procedures
                      </li>
                      <li>• Regular software updates and security patches</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Your Rights */}
              <motion.section
                variants={itemVariants}
                id="rights"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Your Privacy Rights
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Data Subject Rights
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Access",
                          description:
                            "Request a copy of your personal data we hold",
                        },
                        {
                          title: "Rectification",
                          description:
                            "Correct inaccurate or incomplete information",
                        },
                        {
                          title: "Erasure",
                          description: "Request deletion of your personal data",
                        },
                        {
                          title: "Portability",
                          description:
                            "Receive your data in a structured format",
                        },
                        {
                          title: "Restriction",
                          description: "Limit how we process your information",
                        },
                        {
                          title: "Objection",
                          description:
                            "Object to certain types of data processing",
                        },
                      ].map((right, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-xs font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {right.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {right.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      How to Exercise Your Rights
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Contact Information
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                          Email: privacy@gulshanads.app
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Response time: Within 30 days
                        </p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Required Information
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                          <li>• Full name and email address</li>
                          <li>• Specific request details</li>
                          <li>• Identity verification documents</li>
                          <li>• Account information (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Data Sharing */}
              <motion.section
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Data Sharing & Third Parties
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Advertising Platforms
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We share necessary data with advertising platforms (Meta,
                      TikTok, Snapchat, Telegram) to manage your campaigns
                      effectively. This includes:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Campaign settings and targeting parameters</li>
                        <li>• Creative assets and ad content</li>
                        <li>• Budget and bidding information</li>
                      </ul>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Performance metrics and analytics</li>
                        <li>• Audience data for targeting optimization</li>
                        <li>• Account authentication tokens</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Service Providers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      We work with trusted third-party service providers who
                      assist in delivering our services:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Cloud Infrastructure
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          AWS, Google Cloud for hosting and data storage
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Analytics
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Performance tracking and reporting tools
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Payment Processing
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Secure payment and billing services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Contact & Updates */}
              <motion.section
                variants={itemVariants}
                className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl p-8 text-white"
              >
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h2 className="text-2xl font-bold mb-4">
                    Questions About This Policy?
                  </h2>
                  <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    We're committed to transparency and are here to help you
                    understand how we protect your privacy. If you have any
                    questions or concerns about this privacy policy, please
                    don't hesitate to contact us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* <motion.a
                      href="mailto:privacy@gulshanads.app"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Email Privacy Team
                    </motion.a> */}
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
                    >
                      Contact Support
                    </motion.a>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}
