"use client"

import type { ReactNode } from "react"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

interface DashboardRootLayoutProps {
    children: ReactNode
}

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
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
