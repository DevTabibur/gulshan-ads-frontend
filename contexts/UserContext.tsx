"use client"

import { getMe, logout as logoutApi } from "@/app/api/auth/auth.api"
import { createContext, useContext, useEffect, useState, ReactNode } from "react"

interface User {
    fullName: string
    email: string
    role?: string
    avatar?: string
    status?: string
    isVerified?: boolean
}

interface UserContextType {
    user: User | null
    isLoading: boolean
    loggedIn: boolean
    logout: () => Promise<void>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true)
            try {
                const token = localStorage.getItem("adsToken")
                if (token) {
                    const userData = await getMe()
                    // console.log("userData", userData)
                    if (userData?.statusCode == 200) {
                        setUser({
                            fullName: userData?.data?.fullName,
                            email: userData?.data?.email,
                            avatar: userData?.data?.avatar,
                            role: userData?.data?.role,
                            status: userData?.data?.status,
                            isVerified: userData?.data?.isVerified,

                        })
                        setLoggedIn(true)
                    } else {
                        setUser(null)
                        setLoggedIn(false)
                    }
                } else {
                    setUser(null)
                    setLoggedIn(false)
                }
            } catch (error) {
                setUser(null)
                setLoggedIn(false)
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser()
    }, [])

    const logout = async () => {
        setIsLoading(true)
        try {
            await logoutApi()
        } catch (error) {
            // Optionally handle error
            localStorage.removeItem("adsToken")
        } finally {
            localStorage.removeItem("adsToken")
            setUser(null)
            setLoggedIn(false)
            setIsLoading(false)
        }
    }

    return (
        <UserContext.Provider value={{ user, isLoading, loggedIn, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error("useUserContext must be used within a UserProvider")
    }
    return context
}