"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/hooks/useAuth"
import { generateTestToken } from "@/lib/auth-utils"
import { useRouter } from "next/navigation"

export default function DemoAuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login, isAuthenticated, user, logout } = useAuth()
  const router = useRouter()

  const handleDemoLogin = async (role: string) => {
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Generate test token with the specified role
    const testUser = {
      id: "1",
      email: "demo@gulshanads.com",
      name: `Demo ${role}`,
      role: role,
    }
    
    const testToken = generateTestToken(testUser)
    
    // Login with the test token
    const success = login(testToken)
    
    if (success) {
      router.push("/dashboard")
    }
    
    setIsLoading(false)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Authentication Demo</CardTitle>
            <CardDescription>
              Test the authentication system with different user roles
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isAuthenticated ? (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h3 className="font-semibold text-green-800 dark:text-green-200">Authenticated!</h3>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Welcome, {user?.name} ({user?.role})
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => router.push("/dashboard")}
                    className="w-full"
                  >
                    Go to Dashboard
                  </Button>
                  <Button 
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <p className="text-sm text-yellow-600 dark:text-yellow-300">
                    Not authenticated. Try logging in with one of the demo accounts below.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => handleDemoLogin("Admin")}
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? "Logging in..." : "Login as Admin"}
                  </Button>
                  
                  <Button 
                    onClick={() => handleDemoLogin("Manager")}
                    disabled={isLoading}
                    variant="outline"
                    className="w-full"
                  >
                    {isLoading ? "Logging in..." : "Login as Manager"}
                  </Button>
                  
                  <Button 
                    onClick={() => handleDemoLogin("User")}
                    disabled={isLoading}
                    variant="outline"
                    className="w-full"
                  >
                    {isLoading ? "Logging in..." : "Login as User"}
                  </Button>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Or use the{" "}
                    <a href="/auth/login" className="text-blue-600 hover:underline">
                      real login page
                    </a>
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>How it works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>• Click any demo login button to generate a test JWT token</p>
            <p>• The token contains user info (id, email, name, role)</p>
            <p>• Token is stored in localStorage as "accessToken"</p>
            <p>• Dashboard is protected and requires authentication</p>
            <p>• Logout clears the token and redirects to login</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
