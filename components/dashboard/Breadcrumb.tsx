"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"
import { useBreadcrumb } from "@/hooks/useBreadcrumb"

export function Breadcrumb() {
    const breadcrumbs = useBreadcrumb()

    if (breadcrumbs.length === 0) return null

    return (
        <motion.nav
            className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Link
                href="/dashboard"
                className="flex items-center hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
                <Home className="h-4 w-4" />
            </Link>

            {breadcrumbs.map((item: any, index: number) => (
                <motion.div
                    key={index}
                    className="flex items-center space-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <ChevronRight className="h-4 w-4" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            {item.title}
                        </Link>
                    ) : (
                        <span className="text-gray-900 dark:text-gray-100 font-medium">{item.title}</span>
                    )}
                </motion.div>
            ))}
        </motion.nav>
    )
}
