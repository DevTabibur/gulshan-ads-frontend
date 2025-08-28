"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/useAuth"
import { useUserContext } from "@/contexts/UserContext"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: string
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { loggedIn, isLoading, user } = useUserContext()
  const router = useRouter()

  // useEffect(() => {
  //   if (!isLoading) {
  //     if (!isAuthenticated) {
  //       router.push("/sign-in")
  //       return
  //     }

  //     // Check role if required
  //     if (requiredRole && user?.role !== requiredRole) {
  //       router.push("/dashboard")
  //       return
  //     }
  //   }
  // }, [isAuthenticated, isLoading, user, requiredRole, router])

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    )
  }

  // Don't render children if not authenticated
    if (!loggedIn) {
    return null
  }

  // Don't render children if role doesn't match
  // if (requiredRole && user?.role !== requiredRole) {
  //   return null
  // }

  return <>{children}</>
}
