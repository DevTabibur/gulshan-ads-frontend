"use client"

import {  useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormik } from "formik"
import * as Yup from "yup"
import {
    Users,
    TrendingUp,
    DollarSign,
    Clock,
    Target,
    Zap,
    Award,
    CheckCircle,
    ArrowRight,
    Star,
    Briefcase,
    Globe,
    BarChart3,
    Rocket,
    Shield,
    Lightbulb,
    MessageSquare,
    Calendar,
    CreditCard,
    X,
} from "lucide-react"
import { Layout } from "@/components/Layout"

const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
}

const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
}

const floatingVariants: any = {
    animate: {
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
        transition: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
}

const pulseVariants: any = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
}

// Modal component
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative"
                        initial={{ scale: 0.95, opacity: 0, y: 40 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 40 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <button
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
                            onClick={onClose}
                            aria-label="Close"
                            type="button"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


const AdvertisersPage = () => {




    const [modalOpen, setModalOpen] = useState(false)



    const testimonials = [
        {
            name: "Pijus",
            role: "Digital Marketer",
            avatar: "/placeholder.svg?height=60&width=60",
            content:
                "Biggapon BD transformed my freelance business. I went from struggling to find clients to having a 3-month waiting list!",
            rating: 5,
            revenue: "+400% revenue",
        },
        {
            name: "MD Raju",
            role: "Business Owner",
            avatar: "/placeholder.svg?height=60&width=60",
            content:
                "The ROI is incredible. Every dollar I spend on ads brings back $4-5 in new client revenue. Game changer!",
            rating: 5,
            revenue: "+250% clients",
        },
        {
            name: "Amir Hossain",
            role: "Business Owner",
            avatar: "/placeholder.svg?height=60&width=60",
            content:
                "Finally, I can focus on what I love - writing - while Biggapon BD handles all my marketing. Best decision ever!",
            rating: 5,
            revenue: "+180% income",
        },
    ]


    // Formik + Yup for modal form
    const formik = useFormik({
        initialValues: {
            fullName: "",
            pageName: "",
            pageLink: "",
            whatsApp: "",
            email: "",
            details: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            pageName: Yup.string().required("Page/Company Name is required"),
            pageLink: Yup.string().required("Page/Website Link is required"),
            whatsApp: Yup.string().required("WhatsApp is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            details: Yup.string().required("Details are required"),
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm()
            setModalOpen(false)
        },
    })


    // if (loading) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen w-full">
    //             <Loader className="animate-spin" />
    //         </div>
    //     )
    // }

    return (
        <>
            <Layout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
                    {/* Hero Section */}
                    <motion.section
                        className="relative overflow-hidden py-20 lg:py-32"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />

                        <div className="container mx-auto px-4 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <motion.div variants={itemVariants} className="space-y-8">
                                    <motion.div
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-500/30"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                                            For Advertisers & Agencies
                                        </span>
                                    </motion.div>

                                    <motion.h1 className="text-4xl lg:text-6xl font-bold leading-tight" variants={itemVariants}>
                                        <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                            Scale Your
                                        </span>
                                        <br />
                                        <span className="text-slate-900 dark:text-white">Freelance Business</span>
                                        <br />
                                        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            With Smart Ads
                                        </span>
                                    </motion.h1>

                                    <motion.p
                                        className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg"
                                        variants={itemVariants}
                                    >
                                        Stop chasing clients. Let them find you with our proven advertising strategies that have helped 10,000+ Advertisers grow their business by 300% on average.

                                    </motion.p>

                                    <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                                        <motion.button
                                            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => window.open("https://wa.link/zzxfdy", "_blank", "noopener,noreferrer")}
                                            type="button"
                                        >
                                            Start Growing Today
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>


                                    </motion.div>

                                    <motion.div className="flex items-center gap-6 pt-4" variants={itemVariants}>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <span className="text-slate-600 dark:text-slate-400">4.9/5 from 2,500+ Advertisers</span>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="relative" variants={itemVariants}>
                                    <motion.div className="relative z-10" variants={floatingVariants} animate="animate">
                                        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700">
                                            <div className="space-y-6">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Campaign Performance</h3>
                                                    <div className="flex items-center gap-2 text-emerald-600">
                                                        <TrendingUp className="w-4 h-4" />
                                                        <span className="text-sm font-medium">+47% this month</span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20 p-4 rounded-xl">
                                                        <div className="text-2xl font-bold text-emerald-600">$12.4K</div>
                                                        <div className="text-sm text-slate-600 dark:text-slate-400">Revenue</div>
                                                    </div>
                                                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-xl">
                                                        <div className="text-2xl font-bold text-cyan-600">156</div>
                                                        <div className="text-sm text-slate-600 dark:text-slate-400">New Leads</div>
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-slate-600 dark:text-slate-400">Facebook Ads</span>
                                                        <span className="text-slate-900 dark:text-white font-medium">$4.2K</span>
                                                    </div>
                                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                        <motion.div
                                                            className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full"
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "68%" }}
                                                            transition={{ duration: 2, delay: 1 }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>


                                    <motion.div
                                        className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                                        variants={pulseVariants}
                                        animate="animate"
                                    >
                                        <DollarSign className="w-8 h-8 text-white" />
                                    </motion.div>

                                    <motion.div
                                        className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                                        variants={floatingVariants}
                                        animate="animate"
                                        style={{ animationDelay: "1s" }}
                                    >
                                        <Target className="w-6 h-6 text-white" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Benefits Section */}
                    <motion.section
                        className="py-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <div className="container mx-auto px-4">
                            <motion.div className="text-center mb-16" variants={itemVariants}>
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                    <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                        Why Advertisers Choose Biggapon BD
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                    Join thousands of successful Advertisers who've transformed their business with our proven advertising solutions.
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {[
                                    {
                                        Icon: Target,
                                        title: "Precision Targeting",
                                        description: "Reach your ideal clients with laser-focused targeting across all major platforms",
                                    },
                                    {
                                        Icon: Zap,
                                        title: "Lightning Fast Setup",
                                        description: "Get your campaigns running in under 24 hours with our streamlined process",
                                    },
                                    {
                                        Icon: Award,
                                        title: "Expert Management",
                                        description: "Our certified specialists handle everything while you focus on your craft",
                                    },
                                    {
                                        Icon: BarChart3,
                                        title: "Real-time Analytics",
                                        description: "Track performance with detailed insights and optimize for maximum results",
                                    },
                                ].map((benefit, index) => {
                                    const { Icon, title, description } = benefit;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="group relative"
                                            whileHover={{ y: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300">
                                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl mb-6">
                                                    <Icon className="w-7 h-7 text-white" />
                                                </div>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                                    {title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                    {description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.section>

                    {/* Services Section */}
                    <motion.section
                        className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-emerald-900/20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <div className="container mx-auto px-4">
                            <motion.div className="text-center mb-16" variants={itemVariants}>
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                    Choose Your
                                    <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                        {" "}Growth Plan
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                    Flexible packages designed to scale with your freelance business, from startup to enterprise level
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: (props: any) => (
                                            // Briefcase Icon
                                            <svg {...props} viewBox="0 0 24 24" fill="none">
                                                <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
                                                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2" />
                                                <path d="M3 13h18" stroke="currentColor" strokeWidth="2" />
                                            </svg>
                                        ),
                                        title: "Multi-Platform Campaigns",
                                        subTitle: "From $299/mo",
                                        description: "Facebook, Instagram, Google, LinkedIn, TikTok - we handle them all",
                                        points: [
                                            "Cross-platform optimization",
                                            "Weekly reporting",
                                            "Unified reporting",
                                            "Budget friendly campaign"
                                        ]
                                    },
                                    {
                                        icon: (props: any) => (
                                            // Rocket Icon
                                            <svg {...props} viewBox="0 0 24 24" fill="none">
                                                <path d="M4 20l5-5m0 0l5 5m-5-5V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                            </svg>
                                        ),
                                        title: "Growth Accelerator",
                                        subTitle: "From $499/mo",
                                        description: "Best for fast-scaling freelance and small businesses wanting accelerated results.",
                                        points: [
                                            "Ad creative & targeting",
                                            "Conversion tracking",
                                            "Realtime dashboard",
                                            "Mid-campaign optimization"
                                        ]
                                    },
                                    {
                                        icon: (props: any) => (
                                            // Star Icon
                                            <svg {...props} viewBox="0 0 24 24" fill="none">
                                                <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.5 21 12 17.8 5.5 21 7 14.1 2 9.3 9 8.5 12 2" stroke="currentColor" strokeWidth="2" fill="none" />
                                            </svg>
                                        ),
                                        title: "Premium Agency",
                                        subTitle: "From $999/mo",
                                        description: "Full-service digital ads management for established teams who need hands-off scale.",
                                        points: [
                                            "Dedicated strategist",
                                            "Custom reporting",
                                            "All channels included",
                                            "Priority support"
                                        ]
                                    }
                                ].map((card, index) => {
                                    const Icon = card.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="group relative"
                                            whileHover={{ y: -10, scale: 1.02 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            {index === 1 && (
                                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                                    Most Popular
                                                </div>
                                            )}

                                            <div
                                                className={`relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-2 ${index === 1
                                                    ? "border-emerald-500 dark:border-emerald-400"
                                                    : "border-slate-200 dark:border-slate-700"
                                                    } group-hover:shadow-2xl transition-all duration-300`}
                                            >
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl">
                                                        <Icon className="w-7 h-7 text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
                                                        <div className="text-2xl font-bold text-emerald-600 mt-1">{card.subTitle}</div>
                                                    </div>
                                                </div>

                                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{card.description}</p>

                                                <ul className="space-y-3 mb-8">
                                                    {card.points.map((singlePoint: string, idx: number) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <svg
                                                                className="w-5 h-5 text-emerald-500 flex-shrink-0"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <circle
                                                                    cx="12"
                                                                    cy="12"
                                                                    r="10"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    fill="none"
                                                                />
                                                                <path
                                                                    d="M8 12l2.5 2.5L16 9"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    fill="none"
                                                                />
                                                            </svg>
                                                            <span className="text-slate-700 dark:text-slate-300">{singlePoint}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <motion.a
                                                    href="https://wa.link/izw72x"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`w-full inline-block text-center py-4 rounded-xl font-semibold transition-all duration-300 ${index === 1
                                                        ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white shadow-lg hover:shadow-xl"
                                                        : "border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                                                        }`}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    Get Started
                                                </motion.a>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <div className="flex justify-center mt-12">
                                <motion.a
                                    href="/pricing-plans"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.03, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View All Plans
                                </motion.a>
                            </div>
                        </div>
                    </motion.section>

                    {/* Testimonials Section */}
                    <motion.section
                        className="py-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <div className="container mx-auto px-4">
                            <motion.div className="text-center mb-16" variants={itemVariants}>
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                    Success Stories from
                                    <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                        {" "}
                                        Real Advertisers
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                    See how AdHBiggapon BD and has transformed freelance businesses across different industries
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="group"
                                        variants={itemVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 group-hover:shadow-xl transition-all duration-300 h-full">
                                            <div className="flex items-center gap-1 mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>

                                            <blockquote className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                                                "{testimonial.content}"
                                            </blockquote>

                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={testimonial.avatar || "/placeholder.svg"}
                                                    alt={testimonial.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div className="flex-1">
                                                    <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                                                    <div className="text-slate-600 dark:text-slate-400 text-sm">{testimonial.role}</div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-emerald-600 font-bold text-sm">{testimonial.revenue}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Process Section */}
                    <motion.section
                        className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-cyan-900/20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <div className="container mx-auto px-4">
                            <motion.div className="text-center mb-16" variants={itemVariants}>
                                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                    <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                                        How We Get You Started
                                    </span>
                                </h2>
                                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                                    Our proven 4-step process to transform your freelance business with strategic advertising
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        title: "Discovery Call",
                                        description: "We analyze your service, goals, and current marketing efforts.",
                                        icon: MessageSquare,
                                        duration: "30 mins",
                                        subTitle: null
                                    },
                                    {
                                        title: "Strategy Development",
                                        description: "Custom advertising strategy tailored to your freelance business.",
                                        icon: Lightbulb,
                                        duration: null,
                                        subTitle: "24-48 hrs"
                                    },
                                    {
                                        title: "Campaign Launch",
                                        description: "We create and launch your campaign to relevant platforms.",
                                        icon: Rocket,
                                        duration: "1 week",
                                        subTitle: null
                                    },
                                    {
                                        title: "Optimization & Growth",
                                        description: "Continuous monitoring and optimization for maximum ROI.",
                                        icon: TrendingUp,
                                        duration: "Ongoing",
                                        subTitle: null
                                    }
                                ].map((step, index, arr) => {
                                    const Icon = step.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="group relative"
                                            variants={itemVariants}
                                            whileHover={{ y: -5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <div className="text-center">
                                                <div className="relative mb-6">
                                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                                        <Icon className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                        {index + 1}
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>

                                                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{step.description}</p>

                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full">
                                                    <Clock className="w-4 h-4 text-emerald-600" />
                                                    <span className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                                                        {step.subTitle || step.duration}
                                                    </span>
                                                </div>
                                            </div>

                                            {index < arr.length - 1 && (
                                                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 transform -translate-x-10" />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        className="py-20 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 relative overflow-hidden"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="container mx-auto px-4 relative z-10">
                            <motion.div className="text-center max-w-4xl mx-auto" variants={itemVariants}>
                                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                                Ready to Scale Your Freelance Business?

                                </h2>

                                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                    Join 200+ successful Advertisers who've transformed their business with Biggapon BD. Get your first campaign running in 24 hours with our expert team.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <motion.button
                                        className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setModalOpen(true)}
                                        type="button"
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Free Strategy Call
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>

                                    <motion.a
                                        href="/pricing-plans"
                                        className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        View Pricing Plans
                                    </motion.a>
                                </div>

                                <div className="flex items-center justify-center gap-8 text-white/80">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>No setup fees</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Cancel anytime</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>30-day guarantee</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Modal for Book Free Strategy Call */}
                        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white text-center">
                                Book Free Strategy Call
                            </h3>
                            <form onSubmit={formik.handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        className={`w-full px-4 py-2 rounded-lg border ${formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.fullName}
                                        autoComplete="off"
                                    />
                                    {formik.touched.fullName && formik.errors.fullName && (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.fullName}</div>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="pageName" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                                            Page/Company Name
                                        </label>
                                        <input
                                            id="pageName"
                                            name="pageName"
                                            type="text"
                                            className={`w-full px-4 py-2 rounded-lg border ${formik.touched.pageName && formik.errors.pageName ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.pageName}
                                            autoComplete="off"
                                        />
                                        {formik.touched.pageName && formik.errors.pageName && (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.pageName}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="pageLink" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                                            Page/Website Link
                                        </label>
                                        <input
                                            id="pageLink"
                                            name="pageLink"
                                            type="text"
                                            className={`w-full px-4 py-2 rounded-lg border ${formik.touched.pageLink && formik.errors.pageLink ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.pageLink}
                                            autoComplete="off"
                                        />
                                        {formik.touched.pageLink && formik.errors.pageLink && (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.pageLink}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="whatsApp" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                                            WhatsApp
                                        </label>
                                        <input
                                            id="whatsApp"
                                            name="whatsApp"
                                            type="text"
                                            className={`w-full px-4 py-2 rounded-lg border ${formik.touched.whatsApp && formik.errors.whatsApp ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.whatsApp}
                                            autoComplete="off"
                                        />
                                        {formik.touched.whatsApp && formik.errors.whatsApp && (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.whatsApp}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className={`w-full px-4 py-2 rounded-lg border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white`}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            autoComplete="off"
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="details" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                                        What do you need from us?
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={3}
                                        className={`w-full px-4 py-2 rounded-lg border ${formik.touched.details && formik.errors.details ? "border-red-500" : "border-slate-300"} focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 dark:text-white`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.details}
                                    />
                                    {formik.touched.details && formik.errors.details && (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.details}</div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 mt-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                                    disabled={formik.isSubmitting}
                                >
                                    <Calendar className="w-5 h-5" />
                                    Submit
                                </button>
                            </form>
                        </Modal>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
                            variants={floatingVariants}
                            animate="animate"
                        />
                        <motion.div
                            className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
                            variants={floatingVariants}
                            animate="animate"
                            style={{ animationDelay: "1s" }}
                        />
                    </motion.section>
                </div>
            </Layout>
        </>
    )
}

export default AdvertisersPage;
