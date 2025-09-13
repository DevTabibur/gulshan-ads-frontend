"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle,
  Users,
  Database,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Layout } from "@/components/Layout";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const floatingVariants: any = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
};

export default function SecurityPage() {
  const { t } = useLanguage();

  const securityMeasures = [
    {
      icon: Shield,
      title: "Enterprise-Grade Encryption",
      description:
        "All data is encrypted using AES-256 encryption both in transit and at rest, ensuring maximum protection for your advertising campaigns and client information.",
    },
    {
      icon: Lock,
      title: "Multi-Factor Authentication",
      description:
        "Advanced MFA implementation with TOTP, SMS, and hardware key support to secure access to your advertising accounts and campaign data.",
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description:
        "Continuous monitoring of all systems with real-time threat detection, automated incident response, and immediate security team notifications.",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description:
        "Cloud infrastructure hosted on AWS with SOC 2 Type II compliance, regular security audits, and automated backup systems.",
    },
    {
      icon: Database,
      title: "Data Segregation",
      description:
        "Client data is completely segregated with dedicated databases, ensuring your advertising data never mixes with other clients' information.",
    },
    {
      icon: Users,
      title: "Access Control",
      description:
        "Role-based access control (RBAC) with principle of least privilege, ensuring team members only access necessary campaign data.",
    },
  ];

  const complianceStandards = [
    {
      title: "SOC 2 Type II",
      description:
        "Comprehensive security controls audit covering security, availability, processing integrity, confidentiality, and privacy.",
    },
    {
      title: "GDPR Compliance",
      description:
        "Full compliance with European data protection regulations, including data subject rights and privacy by design principles.",
    },
    {
      title: "CCPA Compliance",
      description:
        "California Consumer Privacy Act compliance ensuring proper handling of personal information for US-based clients.",
    },
    {
      title: "ISO 27001",
      description:
        "Information security management system certification ensuring systematic approach to managing sensitive information.",
    },
  ];

  const securityPolicies = [
    {
      title: "Data Retention Policy",
      description:
        "Campaign data is retained for 7 years for performance analysis. Personal data is deleted upon request or contract termination.",
      details: [
        "Campaign performance data: 7 years",
        "Personal client data: Until contract termination + 30 days",
        "Financial records: 7 years (legal requirement)",
        "Access logs: 2 years for security analysis",
      ],
    },
    {
      title: "Incident Response Plan",
      description:
        "Comprehensive incident response procedures with defined escalation paths and client notification protocols.",
      details: [
        "Immediate containment within 15 minutes",
        "Client notification within 2 hours",
        "Full incident report within 24 hours",
        "Post-incident review and improvements",
      ],
    },
    {
      title: "Employee Security Training",
      description:
        "All team members undergo regular security training and background checks before accessing client data.",
      details: [
        "Monthly security awareness training",
        "Annual penetration testing participation",
        "Quarterly phishing simulation tests",
        "Background checks for all employees",
      ],
    },
  ];

  return (
    <>
      <Layout>
        <div className="">
          {/* Floating Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-20 left-10 text-green-200/20 dark:text-green-400/10"
            >
              <Shield size={60} />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-40 right-20 text-cyan-200/20 dark:text-cyan-400/10"
              style={{ animationDelay: "2s" }}
            >
              <Lock size={80} />
            </motion.div>
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute bottom-40 left-20 text-green-200/20 dark:text-green-400/10"
              style={{ animationDelay: "4s" }}
            >
              <Database size={70} />
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Hero Section */}
            <motion.section
              variants={itemVariants}
              className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-8"
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-cyan-600 to-green-600 bg-clip-text text-transparent mb-6"
                >
                  Security & Protection
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Your advertising data and client information are protected by
                  enterprise-grade security measures. We implement the highest
                  standards of data protection, encryption, and compliance to
                  ensure your campaigns and sensitive information remain secure
                  at all times.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-8 mt-12"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Uptime Guarantee
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Security Monitoring
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      256-bit
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      AES Encryption
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Security Measures */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Comprehensive Security Measures
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Multi-layered security approach protecting your advertising
                    campaigns and client data
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {securityMeasures.map((measure, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                          <measure.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {measure.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {measure.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Compliance Standards */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-800/30"
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Compliance & Certifications
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    We maintain the highest industry standards and
                    certifications for data protection
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {complianceStandards.map((standard, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {standard.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {standard.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Security Policies */}
            <motion.section
              variants={itemVariants}
              className="py-20 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-6xl mx-auto">
                <motion.div
                  variants={itemVariants}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Security Policies & Procedures
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Detailed policies governing data handling, incident
                    response, and employee access
                  </p>
                </motion.div>

                <div className="space-y-8">
                  {securityPolicies.map((policy, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                    >
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {policy.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {policy.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {policy.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            
          </motion.div>
        </div>
      </Layout>
    </>
  );
}
