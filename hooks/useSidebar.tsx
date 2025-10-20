"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface SidebarContextType {
    isCollapsed: boolean
    isMobileOpen: boolean
    toggleCollapsed: () => void
    toggleMobile: () => void
    closeMobile: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    // Load collapsed state from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("sidebar-collapsed")
        if (saved) {
            setIsCollapsed(JSON.parse(saved))
        }
    }, [])

    // Save collapsed state to localStorage
    const toggleCollapsed = () => {
        const newState = !isCollapsed
        setIsCollapsed(newState)
        localStorage.setItem("sidebar-collapsed", JSON.stringify(newState))
    }

    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen)
    }

    const closeMobile = () => {
        setIsMobileOpen(false)
    }

    return (
        <SidebarContext.Provider
            value={{
                isCollapsed,
                isMobileOpen,
                toggleCollapsed,
                toggleMobile,
                closeMobile,
            }}
        >
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar() {
    const context = useContext(SidebarContext)
    if (context === undefined) {
        throw new Error("useSidebar must be used within a SidebarProvider")
    }
    return context
}
