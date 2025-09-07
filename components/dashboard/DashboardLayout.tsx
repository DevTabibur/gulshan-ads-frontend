"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"


import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
import { SidebarProvider } from "@/hooks/useSidebar"
import { useUserContext } from "@/contexts/UserContext"
import { Loader } from "lucide-react"

interface DashboardLayoutProps {
    children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const {  user, isLoading, loggedIn, logout } = useUserContext()

    // console.log("loggedIn",  user)
    if(isLoading){
        return <Loader className="animate-spin" />
    }

    return (
        <SidebarProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="flex h-screen">
                    <Sidebar />

                    <div className="flex-1 flex flex-col overflow-hidden">
                        <Topbar  />

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
