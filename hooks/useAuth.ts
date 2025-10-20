"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  name: string
  role: string
}

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    accessToken: null,
    isAuthenticated: false,
    isLoading: true,
  })
  const router = useRouter()

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const accessToken = localStorage.getItem("accessToken")
        
        if (accessToken) {
          // Decode the JWT token to get user info
          const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]))
          const user: User = {
            id: tokenPayload.id,
            email: tokenPayload.email,
            name: tokenPayload.name,
            role: tokenPayload.role,
          }
          
          setAuthState({
            user,
            accessToken,
            isAuthenticated: true,
            isLoading: false,
          })
        } else {
          setAuthState({
            user: null,
            accessToken: null,
            isAuthenticated: false,
            isLoading: false,
          })
        }
      } catch (error) {
        console.error("Error initializing auth:", error)
        // Clear invalid token
        localStorage.removeItem("accessToken")
        setAuthState({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          isLoading: false,
        })
      }
    }

    initializeAuth()
  }, [])

  const login = useCallback((accessToken: string) => {
    try {
      // Decode the JWT token to get user info
      const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]))
      const user: User = {
        id: tokenPayload.id,
        email: tokenPayload.email,
        name: tokenPayload.name,
        role: tokenPayload.role,
      }
      
      localStorage.setItem("accessToken", accessToken)
      
      setAuthState({
        user,
        accessToken,
        isAuthenticated: true,
        isLoading: false,
      })
      
      return true
    } catch (error) {
      console.error("Error during login:", error)
      return false
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem("accessToken")
    setAuthState({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
    })
    router.push("/auth/login")
  }, [router])

  const checkAuth = useCallback(() => {
    const accessToken = localStorage.getItem("accessToken")
    if (!accessToken) {
      return false
    }
    
    try {
      // Check if token is expired
      const tokenPayload = JSON.parse(atob(accessToken.split(".")[1]))
      const currentTime = Date.now() / 1000
      
      if (tokenPayload.exp && tokenPayload.exp < currentTime) {
        // Token is expired
        logout()
        return false
      }
      
      return true
    } catch (error) {
      console.error("Error checking auth:", error)
      logout()
      return false
    }
  }, [logout])

  return {
    ...authState,
    login,
    logout,
    checkAuth,
  }
}
