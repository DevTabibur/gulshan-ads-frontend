"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Send,
  User,
  Building,
  DollarSign,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Star,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Layout } from "@/components/Layout";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Your name is required"),
  agencyName: Yup.string()
    .min(2, "Agency name must be at least 2 characters")
    .max(100, "Agency name must be less than 100 characters")
    .required("Agency name is required"),
  budget: Yup.string().required("Please select your monthly budget"),
  whatsapp: Yup.string()
    .matches(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid WhatsApp number")
    .required("WhatsApp number is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Please tell us about your project"),
});

const budgetOptions = [
  { value: "1000-5000", label: "$1,000 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-25000", label: "$10,000 - $25,000" },
  { value: "25000-50000", label: "$25,000 - $50,000" },
  { value: "50000+", label: "$50,000+" },
];

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

const itemVariants : any= {
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

export default function ContactPage() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedCredentials, setGeneratedCredentials] = useState<{
    username: string;
    password: string;
  } | null>(null);

  const generateCredentials = () => {
    const username = `Gulshan_Ads${Math.random().toString(36).substring(2, 8)}`;
    const password = Math.random().toString(36).substring(2, 12);
    return { username, password };
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Generate credentials
      const credentials = generateCredentials();
      setGeneratedCredentials(credentials);
      setIsSubmitted(true);

      console.log("Form submitted:", values);
      console.log("Generated credentials:", credentials);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted && generatedCredentials) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-green-200/50 dark:border-gray-700/50">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Thank You!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              >
                We're sending you an auto-generated username and password to get
                started with Biggapon BD.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-green-100 to-cyan-100 dark:from-green-900/30 dark:to-cyan-900/30 rounded-2xl p-6 mb-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Login Credentials
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Username:
                    </span>
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded-lg text-green-600 dark:text-green-400 font-mono">
                      {generatedCredentials.username}
                    </code>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Password:
                    </span>
                    <code className="bg-white dark:bg-gray-800 px-3 py-1 rounded-lg text-green-600 dark:text-green-400 font-mono">
                      {generatedCredentials.password}
                    </code>
                  </div>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                Please save these credentials securely. Our team will contact
                you within 24 hours to discuss your project.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
          {/* Floating Background Elements */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full opacity-20 blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-20 blur-xl"
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              {/* Header Section */}
              <motion.div variants={itemVariants} className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>
                  <h1 className="text-5xl md:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                      Get Started
                    </span>
                    <span className="text-gray-900 dark:text-white">
                      {" "}
                      Today
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Ready to supercharge your advertising campaigns? Let's discuss
                  your project and create something amazing together.
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-green-200/50 dark:border-gray-700/50">
                  <Formik
                    initialValues={{
                      name: "",
                      agencyName: "",
                      budget: "",
                      whatsapp: "",
                      email: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form className="space-y-8">
                        {/* Name Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            <User className="w-4 h-4 inline mr-2" />
                            Your Name
                          </label>
                          <Field
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.name && touched.name
                                ? "border-red-300 dark:border-red-600"
                                : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                          />
                        </motion.div>

                        {/* Agency Name Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            <Building className="w-4 h-4 inline mr-2" />
                            Agency Name
                          </label>
                          <Field
                            name="agencyName"
                            type="text"
                            placeholder="Enter your agency or company name"
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.agencyName && touched.agencyName
                                ? "border-red-300 dark:border-red-600"
                                : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                          />
                          <ErrorMessage
                            name="agencyName"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                          />
                        </motion.div>

                        {/* Budget Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            <DollarSign className="w-4 h-4 inline mr-2" />
                            Your Approximate Monthly Budget
                          </label>
                          <Field
                            as="select"
                            name="budget"
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.budget && touched.budget
                                ? "border-red-300 dark:border-red-600"
                                : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                          >
                            <option value="">
                              Select your monthly budget range
                            </option>
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="budget"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                          />
                        </motion.div>

                        {/* WhatsApp Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            <Phone className="w-4 h-4 inline mr-2" />
                            Your WhatsApp Number
                          </label>
                          <Field
                            name="whatsapp"
                            type="tel"
                            placeholder="+1234567890"
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.whatsapp && touched.whatsapp
                                ? "border-red-300 dark:border-red-600"
                                : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                          />
                          <ErrorMessage
                            name="whatsapp"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                          />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email Address
                          </label>
                          <Field
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                              errors.email && touched.email
                                ? "border-red-300 dark:border-red-600"
                                : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                          />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            <MessageSquare className="w-4 h-4 inline mr-2" />
                            Tell Us About Your Project
                          </label>
                          <Field
                            as="textarea"
                            name="message"
                            rows={5}
                            placeholder="Describe your advertising goals, target audience, and any specific requirements..."
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none ${
                              errors.message && touched.message
                                ? "border-red-300 dark:border-red-600"
                                : "border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-600"
                            }`}
                          />
                          <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500 text-sm mt-2"
                          />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="text-center"
                        >
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                  }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                                />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-3" />
                                Get Started
                              </>
                            )}
                          </motion.button>
                        </motion.div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div variants={itemVariants} className="text-center mt-12">
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-gray-700/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Expert Team
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Work with certified advertising specialists across all
                      major platforms
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-gray-700/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      24/7 Support
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Round-the-clock support to ensure your campaigns run
                      smoothly
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-gray-700/50"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      ROI Focused
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Data-driven strategies designed to maximize your return on
                      investment
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
