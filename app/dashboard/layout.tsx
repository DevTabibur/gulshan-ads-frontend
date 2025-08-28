"use client"

import { useEffect, type ReactNode } from "react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { UserProvider } from "@/contexts/UserContext"
import { getFromLocalStorage } from "@/lib/local-storage"
import { redirect } from "next/navigation"

interface DashboardRootLayoutProps {
    children: ReactNode
}

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
    useEffect(() => {
        const token = getFromLocalStorage("adsToken");
        if (!token) {
            redirect("/sign-in");
        }
    }, []);



    return (
        <>
            <UserProvider>
                <ProtectedRoute>
                    {children}
                </ProtectedRoute>
            </UserProvider>
        </>
    )
}
