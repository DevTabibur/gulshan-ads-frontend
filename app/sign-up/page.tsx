"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Sparkles, Zap, Shield, CheckCircle, Phone, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { register } from "../api/auth/auth.api"
import toast from "react-hot-toast"
import { setToLocalStorage } from "@/lib/local-storage"
import { useRouter } from "next/navigation"

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Full name must be at least 3 characters").required("Full name is required"),
  email: Yup.string().email("Please enter a valid email address").required("Email is required"),
  whatsApp: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Please enter a valid WhatsApp number")
    .required("WhatsApp number is required"),
  companyName: Yup.string().min(2, "Company name must be at least 2 characters").required("Company name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
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
  { text: "At least 6 characters", regex: /.{6,}/ },
  { text: "One lowercase letter", regex: /[a-z]/ },
  { text: "One uppercase letter", regex: /[A-Z]/ },
  { text: "One number", regex: /\d/ },
]

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (values: any) => {
    setIsLoading(true)
    try {
      // Print values to console as requested
      console.log("Sign up values:", values)
      // Call the real register API
      const res = await register({
        fullName: values.fullName,
        email: values.email,
        whatsApp: values.whatsApp,
        companyName: values.companyName,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
      // console.log("Sign up successful:", values)
      // console.log("res", res)
      if (res?.statusCode === 200) {
        toast.success(res?.message)
        setToLocalStorage("adsToken", res?.data?.accessToken)
        router.push("/dashboard")
      }
      // You may want to redirect or show a success message here
    } catch (error) {
      toast.error("Something went wrong")
      console.log("Sign up error:", error)
      // Optionally handle error (show error message to user)
    } finally {
      setIsLoading(false)
    }
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
                <Link tabIndex={-1} aria-label="Go Home" href={"/"}>
                  <Sparkles className="w-8 h-8 text-white" /></Link>

              </motion.div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                Join Biggapon BD
              </h1>
              <p className="text-slate-600 dark:text-slate-400">Create your account and start growing</p>
            </motion.div>

            {/* Form */}
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                whatsApp: "",
                companyName: "",
                password: "",
                confirmPassword: "",
                agreeToTerms: false,
              }}
              validationSchema={SignUpSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isValid, values, handleChange }) => (
                <Form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Field
                          name="fullName"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${errors.fullName && touched.fullName
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                            }`}
                          placeholder="Full name"
                        />
                      </div>
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

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
                          className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${errors.email && touched.email
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                            }`}
                          placeholder="Enter your email"
                        />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

                    {/* WhatsApp Number Field */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35, duration: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Field
                          name="whatsApp"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${errors.whatsApp && touched.whatsApp
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                            }`}
                          placeholder="Enter your WhatsApp number"
                        />
                      </div>
                      <ErrorMessage name="whatsApp" component="div" className="text-red-500 text-sm mt-1" />
                    </motion.div>

                    {/* Company Name Field */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.37, duration: 0.6 }}
                    >
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Field
                          name="companyName"
                          type="text"
                          className={`w-full pl-10 pr-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${errors.companyName && touched.companyName
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                            }`}
                          placeholder="Enter your company name"
                        />
                      </div>
                      <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm mt-1" />
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
                          className={`w-full pl-10 pr-12 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${errors.password && touched.password
                            ? "border-red-400 focus:border-red-500"
                            : "border-slate-200 dark:border-slate-600 focus:border-green-400"
                            }`}
                          placeholder="Create a password"
                          // Use Formik's handleChange directly so the field is editable
                          onChange={handleChange}
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
                                  className={`w-4 h-4 mr-2 ${req.regex.test(values.password) ? "text-green-500" : "text-slate-400"
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
                          className={`w-full pl-10 pr-12 py-3 bg-white/50 dark:bg-slate-700/50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${errors.confirmPassword && touched.confirmPassword
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
                  </div>







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
