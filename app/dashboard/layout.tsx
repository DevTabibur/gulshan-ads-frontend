"use client"

import type { ReactNode } from "react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { getFromLocalStorage } from "@/lib/local-storage"
import { redirect } from "next/navigation"

interface DashboardRootLayoutProps {
    children: ReactNode
}

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
    const token = getFromLocalStorage("adsToken")
    if (!token) {
        redirect("/sign-in")

    }
    return (
        <>
            {/* <ProtectedRoute>*/}
            {/* <DashboardLayout> */}
            {children}
            {/* </DashboardLayout> */}
            {/*</ProtectedRoute> */}
        </>
    )
}
