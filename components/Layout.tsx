"use client"

import type { ReactNode } from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { useLanguage } from "../hooks/useLanguage"

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { isRTL } = useLanguage()

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${isRTL ? "text-right" : "text-left"}`}
    >
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
