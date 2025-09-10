"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";

// Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

interface FormValues {
  email: string;
}

export default function JoiningMail() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
    resetForm();

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const floatingVariants: any = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  const sparkleVariants: any = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full max-w-4xl mx-auto p-4 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-teal-500/10 rounded-3xl" />
      <div className="absolute inset-0 backdrop-blur-sm rounded-3xl" />

      {/* Floating Decorative Elements */}
      {/* <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg"
      >
        <Mail className="w-6 h-6 text-white" />
      </motion.div> */}

      <motion.div
        variants={sparkleVariants}
        animate="animate"
        className="absolute top-8 right-8 text-emerald-400"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      <motion.div
        variants={sparkleVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="absolute bottom-8 left-12 text-cyan-400"
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h2
            variants={itemVariants}
            className="text-2xl  font-bold text-white"
          >
            Join the{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Biggapon BD
            </span>{" "}
            mailing list
          </motion.h2>

          {/* <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            No spam, just client case studies, promotion tips and tool
            recommendations.
          </motion.p> */}

          {/* Benefits List */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-6 space-y-2 text-sm text-gray-400"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Weekly industry insights</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Exclusive campaign strategies</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Early access to new features</span>
            </div>
          </motion.div> */}
        </div>

        {/* Right Form */}
        <motion.div variants={itemVariants} className="">
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className="space-y-4">
                <div className="relative">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="absolute -bottom-6 left-2 text-red-400 text-sm flex items-center gap-1"
                  />
                  {errors.email && touched.email && (
                    <AlertCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={!isValid || !dirty || isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <AnimatePresence mode="wait">
                    {isLoading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Subscribing...</span>
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        <span>Subscribed!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        <span>Subscribe</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Form>
            )}
          </Formik>

          {/* Success Message */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm text-center"
              >
                🎉 Welcome to the Biggapon BD community! Check your email for
                confirmation.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Privacy Note */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xs text-gray-500 text-center"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500" />
    </motion.div>
  );
}
