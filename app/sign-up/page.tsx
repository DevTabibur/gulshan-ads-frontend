"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Zap, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName: Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
  email: Yup.string().email("Please enter a valid email address").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  agreeToTerms: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
})

const floatingElements = [
  { icon: Sparkles, delay: 0, duration: 3 },
  { icon: Zap, delay: 1, duration: 4 },
  { icon: Shield, delay: 2, duration: 3.5 },
  { icon: CheckCircle, delay: 1.5, duration: 3.2 },
]

const passwordRequirements = [
  { text: "At least 8 characters", regex: /.{8,}/ },
  { text: "One lowercase letter", regex: /[a-z]/ },
  { text: "One uppercase letter", regex: /[A-Z]/ },
  { text: "One number", regex: /\d/ },
]

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordValue, setPasswordValue] = useState("")

  const handleSubmit = async (values: any) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log("Sign up:", values)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-cyan-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + index * 25}%`,
              top: `${25 + index * 15}%`,
            }}
          >
            <element.icon className="w-8 h-8 text-green-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative z-10"
      >
        <Card className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border-0 shadow-2xl">
          <CardContent className="p-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl mb-4 shadow-lg"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Join Gulshan Ads
              </h1>
              <p className="text-slate-600 dark:text-slate-400">Create your account and start growing</p>
            </motion.div>

            {/* Form */}
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                agreeToTerms: false,
              }}
              validationSchema={SignUpSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid, values }) => (
                <Form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Field
                          name="firstName"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                            errors.firstName && touched.firstName
                              ? "border-red-400 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                          }`}
                          placeholder="First name"
                        />
                      </div>
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Field
                          name="lastName"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                            errors.lastName && touched.lastName
                              ? "border-red-400 focus:border-red-500"
                              : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                          }`}
                          placeholder="Last name"
                        />
                      </div>
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>
                  </div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Field
                        name="email"
                        type="email"
                        className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.email && touched.email
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                        }`}
                        placeholder="Enter your email"
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Password Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className={`w-full pl-10 pr-12 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.password && touched.password
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                        }`}
                        placeholder="Create a password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setPasswordValue(e.target.value)
                          // Call Formik's onChange
                          const event = {
                            target: {
                              name: "password",
                              value: e.target.value,
                            },
                          }
                          // This is a workaround to trigger Formik's onChange
                          setTimeout(() => {
                            const formikOnChange = (document.querySelector('input[name="password"]') as any)?._formik
                              ?.setFieldValue
                            if (formikOnChange) {
                              formikOnChange("password", e.target.value)
                            }
                          }, 0)
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>

                    {/* Password Requirements */}
                    {values.password && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                      >
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Password Requirements:
                        </p>
                        <div className="space-y-1">
                          {passwordRequirements.map((req, index) => (
                            <div key={index} className="flex items-center text-sm">
                              <CheckCircle
                                className={`w-4 h-4 mr-2 ${
                                  req.regex.test(values.password) ? "text-green-500" : "text-slate-400"
                                }`}
                              />
                              <span
                                className={
                                  req.regex.test(values.password)
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-slate-500"
                                }
                              >
                                {req.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Confirm Password Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Field
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        className={`w-full pl-10 pr-12 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          errors.confirmPassword && touched.confirmPassword
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                  </motion.div>

                  {/* Terms Agreement */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="flex items-start"
                  >
                    <Field
                      name="agreeToTerms"
                      type="checkbox"
                      className="w-4 h-4 text-green-500 border-slate-300 rounded focus:ring-green-400 mt-1"
                    />
                    <div className="ml-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        I agree to the{" "}
                        <Link href="/terms" className="text-green-600 hover:text-green-700 transition-colors">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-green-600 hover:text-green-700 transition-colors">
                          Privacy Policy
                        </Link>
                      </p>
                      <ErrorMessage name="agreeToTerms" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <Button
                      type="submit"
                      disabled={!isValid || isLoading}
                      className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Creating Account...
                          </motion.div>
                        ) : (
                          <motion.div
                            key="signup"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center"
                          >
                            Create Account
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Button>
                  </motion.div>
                </Form>
              )}
            </Formik>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="my-8 flex items-center"
            >
              <div className="flex-1 border-t border-slate-200 dark:border-slate-600" />
              <span className="px-4 text-sm text-slate-500">or</span>
              <div className="flex-1 border-t border-slate-200 dark:border-slate-600" />
            </motion.div>

            {/* Social Login */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="space-y-3"
            >
              <Button
                variant="outline"
                className="w-full py-3 border-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 bg-transparent"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </motion.div>

            {/* Sign In Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-center mt-8"
            >
              <p className="text-slate-600 dark:text-slate-400">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
                  Sign in
                </Link>
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
