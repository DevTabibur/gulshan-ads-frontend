"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Mail, ArrowLeft, CheckCircle, Loader2, Shield, Clock, Key } from "lucide-react"
import Link from "next/link"

const validationSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),
})

export default function ForgetPasswordPage() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            console.log("Password reset request:", values)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            setIsLoading(false)
            setIsSubmitted(true)
        },
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

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
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Floating Background Elements */}
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full opacity-10 blur-xl"
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10 blur-xl"
            />
            <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "4s" }}
                className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-10 blur-xl"
            />

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-md">
                <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8"
                        >
                            {/* Header */}
                            <motion.div variants={itemVariants} className="text-center mb-8">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-4"
                                >
                                    <Key className="w-8 h-8 text-white" />
                                </motion.div>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                                    Forgot Password?
                                </h1>
                                <p className="text-gray-600 dark:text-gray-300">
                                    No worries! Enter your email and we'll send you reset instructions.
                                </p>
                            </motion.div>

                            {/* Form */}
                            <motion.form variants={itemVariants} onSubmit={formik.handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Enter your email address"
                                            className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm ${formik.touched.email && formik.errors.email
                                                    ? "border-red-300 dark:border-red-600"
                                                    : "border-gray-300 dark:border-gray-600"
                                                }`}
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-2 text-sm text-red-600 dark:text-red-400"
                                        >
                                            {formik.errors.email}
                                        </motion.p>
                                    )}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                            Sending Reset Link...
                                        </>
                                    ) : (
                                        "Send Reset Link"
                                    )}
                                </motion.button>
                            </motion.form>

                            {/* Back to Login */}
                            <motion.div variants={itemVariants} className="mt-6 text-center">
                                <Link
                                    href="/auth/login"
                                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Login
                                </Link>
                            </motion.div>

                            {/* Features */}
                            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 gap-4">
                                <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Secure password reset process</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                                    <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Reset link expires in 1 hour</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 text-center"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mb-6"
                            >
                                <CheckCircle className="w-8 h-8 text-white" />
                            </motion.div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Check Your Email!</h2>

                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We've sent a password reset link to <strong>{formik.values.email}</strong>
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Check your inbox and spam folder</span>
                                </div>
                                <div className="flex items-center justify-center space-x-3 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
                                    <Clock className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Link expires in 60 minutes</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        setIsSubmitted(false)
                                        formik.resetForm()
                                    }}
                                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-200"
                                >
                                    Send Another Email
                                </motion.button>

                                <Link
                                    href="/auth/login"
                                    className="block w-full text-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium py-3 transition-colors duration-200"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
