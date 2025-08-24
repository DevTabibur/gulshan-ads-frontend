"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"


import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { SidebarProvider } from "@/hooks/useSidebar"
import { useAuth } from "@/hooks/useAuth"

interface DashboardLayoutProps {
    children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const { user } = useAuth()

    // Create user object for Topbar component
    const userForTopbar = user ? {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: "/placeholder.svg?height=32&width=32&text=" + user.name.charAt(0).toUpperCase(),
        role: user.role,
    } : {
        id: "1",
        name: "User",
        email: "user@example.com",
        avatar: "/placeholder.svg?height=32&width=32&text=U",
        role: "User",
    }

    return (
        <SidebarProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="flex h-screen">
                    <Sidebar />

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Topbar user={userForTopbar} />

                        <main className="flex-1 overflow-y-auto">
                            <div className="container mx-auto px-4 lg:px-6 py-6">
                                

                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                                    {children}
                                </motion.div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    )
}
