"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

import { Breadcrumb } from "./Breadcrumb"
import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { SidebarProvider } from "@/hooks/useSidebar"

interface DashboardLayoutProps {
    children: ReactNode
}

const mockUser = {
    id: "1",
    name: "John Doe",
    email: "john@gulshanads.com",
    avatar: "/placeholder.svg?height=32&width=32&text=JD",
    role: "Admin",
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <SidebarProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="flex h-screen">
                    <Sidebar />

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Topbar user={mockUser} />

                        <main className="flex-1 overflow-y-auto">
                            <div className="container mx-auto px-4 lg:px-6 py-6">
                                <Breadcrumb />

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
