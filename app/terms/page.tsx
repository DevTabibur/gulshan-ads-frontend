"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Users,
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

export default function TermsPage() {
  return (
    <>
      <Layout>
        <div className="">
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 22,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute top-32 right-20 w-36 h-36 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: [0, 120, 0],
                y: [0, -80, 0],
                rotate: [-360, -180, 0],
              }}
              transition={{
                duration: 28,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute bottom-32 left-20 w-44 h-44 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-xl"
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
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full mb-6"
              >
                <Scale className="w-10 h-10 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                These terms govern your use of Biggapon BD's advertising services and
                platform. Please read them carefully.
              </p>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Last updated: January 2024 • Effective Date: January 1, 2024
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
                    {
                      icon: FileText,
                      text: "Service Terms",
                      href: "#services",
                    },
                    {
                      icon: DollarSign,
                      text: "Payment Terms",
                      href: "#payment",
                    },
                    {
                      icon: Shield,
                      text: "Responsibilities",
                      href: "#responsibilities",
                    },
                    {
                      icon: AlertTriangle,
                      text: "Limitations",
                      href: "#limitations",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 hover:from-cyan-100 hover:to-green-100 dark:hover:from-cyan-800/30 dark:hover:to-green-800/30 transition-all duration-300"
                    >
                      <item.icon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
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
              {/* Agreement */}
              <motion.section
                variants={itemVariants}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Agreement to Terms
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    By accessing and using Biggapon BD's advertising services
                    ("Services"), you agree to be bound by these Terms of
                    Service ("Terms"). These Terms constitute a legally binding
                    agreement between you ("Client," "you," or "your") and
                    Biggapon BD ("we," "us," or "our").
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    If you do not agree to these Terms, you may not access or
                    use our Services. We reserve the right to modify these Terms
                    at any time, and such modifications will be effective
                    immediately upon posting.
                  </p>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Acceptance Confirmation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        By creating an account or using our services, you
                        confirm that you have read, understood, and agree to be
                        bound by these Terms and our Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Services */}
              <motion.section
                variants={itemVariants}
                id="services"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Service Description
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Advertising Services
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Biggapon BD provides comprehensive digital advertising services
                      across multiple platforms including but not limited to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                          Platform Management
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Meta Ads (Facebook & Instagram)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>TikTok Ads and TikTok for Business</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Snapchat Ads and AR Lenses</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Telegram Ads and Channel Promotion</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                          Service Features
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Campaign strategy and planning</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Audience targeting and optimization</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Creative development and testing</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>Performance monitoring and reporting</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Service Availability
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                        <div className="text-2xl mb-2">🌍</div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Global Reach
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Services available worldwide with local market
                          expertise
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                        <div className="text-2xl mb-2">⏰</div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          24/7 Monitoring
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Continuous campaign monitoring and optimization
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-600">
                        <div className="text-2xl mb-2">📊</div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Real-time Reporting
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Live dashboard access and detailed analytics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Payment Terms */}
              <motion.section
                variants={itemVariants}
                id="payment"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Payment Terms & Billing
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Service Fees
                      </h3>
                      <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Management Fee:</span>{" "}
                            Monthly service fee based on selected plan
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Ad Spend:</span>{" "}
                            Direct payment to advertising platforms
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Setup Fee:</span>{" "}
                            One-time onboarding and setup cost
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <span className="font-medium">
                              Performance Bonus:
                            </span>{" "}
                            Success-based additional fees (optional)
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Billing Cycle
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gradient-to-r from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 rounded-lg">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            Monthly Billing
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Service fees are billed monthly in advance. First
                            payment due upon service activation.
                          </p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 rounded-lg">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            Ad Spend Billing
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            Advertising costs are billed separately by each
                            platform or through our managed billing system.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Payment Methods & Terms
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                        <div className="text-2xl mb-2">💳</div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          Credit Cards
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Visa, MasterCard, American Express
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                        <div className="text-2xl mb-2">🏦</div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          Bank Transfer
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Wire transfer for enterprise clients
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                        <div className="text-2xl mb-2">💰</div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                          Digital Wallets
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          PayPal, Stripe, and other processors
                        </p>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Late Payment Policy
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                            <li>
                              • Payments are due within 30 days of invoice date
                            </li>
                            <li>
                              • Late fees of 1.5% per month may apply to overdue
                              amounts
                            </li>
                            <li>
                              • Services may be suspended for accounts 60+ days
                              overdue
                            </li>
                            <li>
                              • Collection costs and legal fees may be added to
                              delinquent accounts
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Responsibilities */}
              <motion.section
                variants={itemVariants}
                id="responsibilities"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Responsibilities & Obligations
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Biggapon BD's Responsibilities
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Provide professional advertising services as outlined in service agreements",
                        "Maintain platform integrations and technical infrastructure",
                        "Monitor campaign performance and provide regular reporting",
                        "Ensure compliance with advertising platform policies and guidelines",
                        "Protect client data and maintain confidentiality",
                        "Provide customer support during business hours",
                        "Deliver services with reasonable skill and care",
                      ].map((responsibility, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Client Responsibilities
                    </h3>
                    <div className="space-y-4">
                      {[
                        "Provide accurate business information and advertising objectives",
                        "Supply necessary creative assets and brand guidelines",
                        "Ensure compliance with applicable laws and regulations",
                        "Maintain valid payment methods and pay invoices on time",
                        "Provide timely feedback and approvals for campaigns",
                        "Grant necessary access to advertising accounts and platforms",
                        "Communicate changes in business objectives or requirements",
                      ].map((responsibility, index) => (
                        <div key={index} className="flex items-start">
                          <Users className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {responsibility}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Prohibited Activities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      {[
                        "Promoting illegal products or services",
                        "Violating platform advertising policies",
                        "Using misleading or deceptive advertising content",
                        "Infringing on intellectual property rights",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {[
                        "Targeting minors inappropriately",
                        "Promoting discriminatory practices",
                        "Sharing account access with unauthorized parties",
                        "Attempting to manipulate platform algorithms",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Limitations */}
              <motion.section
                variants={itemVariants}
                id="limitations"
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Limitations & Disclaimers
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Service Limitations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            Performance Disclaimers
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                            <li>• No guarantee of specific campaign results</li>
                            <li>• Performance depends on market conditions</li>
                            <li>
                              • Platform algorithm changes may affect results
                            </li>
                            <li>
                              • External factors beyond our control may impact
                              performance
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-700">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                            Technical Limitations
                          </h4>
                          <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                            <li>• Platform API limitations and restrictions</li>
                            <li>• Third-party service dependencies</li>
                            <li>• Scheduled maintenance and downtime</li>
                            <li>
                              • Data accuracy depends on platform reporting
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Liability Limitations
                    </h3>
                    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        <strong>LIMITATION OF LIABILITY:</strong> In no event
                        shall Biggapon BD be liable for any indirect, incidental,
                        special, consequential, or punitive damages, including
                        but not limited to:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Loss of profits or revenue</li>
                          <li>• Loss of business opportunities</li>
                          <li>• Loss of data or information</li>
                          <li>• Business interruption costs</li>
                        </ul>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Reputational damage</li>
                          <li>• Third-party claims</li>
                          <li>• Platform policy violations</li>
                          <li>• Market condition changes</li>
                        </ul>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                        Our total liability for any claim shall not exceed the
                        amount paid by the client for services in the 12 months
                        preceding the claim.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Termination
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                          Termination by Client
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• 30-day written notice required</li>
                          <li>• Final invoice for completed work</li>
                          <li>• Data export assistance provided</li>
                          <li>• Account access transfer support</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                          Termination by Biggapon BD
                        </h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Breach of terms or non-payment</li>
                          <li>• Prohibited activities or policy violations</li>
                          <li>• 30-day notice for convenience termination</li>
                          <li>• Immediate termination for cause</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Contact & Legal */}
              {/* <motion.section
                variants={itemVariants}
                className="bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl p-8 text-white"
              >
                <div className="text-center">
                  <Scale className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h2 className="text-2xl font-bold mb-4">
                    Legal Questions or Concerns?
                  </h2>
                  <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
                    These terms are governed by the laws of [Jurisdiction]. For
                    any legal questions, disputes, or clarifications about these
                    terms, please contact our legal team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a
                      href="mailto:legal@gulshanads.app"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white text-cyan-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      Contact Legal Team
                    </motion.a>
                    <motion.a
                      href="/privacy"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
                    >
                      View Privacy Policy
                    </motion.a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-cyan-100 text-sm">
                      By continuing to use Biggapon BD's services, you acknowledge
                      that you have read, understood, and agree to be bound by
                      these Terms of Service.
                    </p>
                  </div>
                </div>
              </motion.section> */}
            </div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}
