"use client"

import { useTheme } from "next-themes"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Sun, Moon } from "lucide-react"

const settingsConfig = [
  {
    key: "username",
    label: "Username",
    type: "text",
    description: "This will be displayed on your profile and reviews.",
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    description: "We'll never share your email with anyone else.",
  },
  {
    key: "notifications",
    label: "Email Notifications",
    type: "switch",
    description: "Receive updates and notifications via email.",
  },
  {
    key: "theme",
    label: "Theme",
    type: "theme",
    description: "Switch between light and dark mode.",
  },
]

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [form, setForm] = useState({
    username: "",
    email: "",
    notifications: true,
  })

  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto w-full py-10 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Settings</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">Manage your account preferences and appearance.</p>
        <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-none">
          <CardContent className="pt-6">
            <form className="space-y-8">
              {settingsConfig.map((setting) => (
                <div
                  key={setting.key}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-2"
                >
                  <div className="sm:w-1/3">
                    <label
                      htmlFor={setting.key}
                      className="block font-medium text-gray-900 dark:text-gray-100"
                    >
                      {setting.label}
                    </label>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{setting.description}</p>
                  </div>
                  <div className="sm:flex-1 w-full">
                    {setting.type === "text" || setting.type === "email" ? (
                      <Input
                        id={setting.key}
                        type={setting.type}
                        value={form[setting.key as "username" | "email"]}
                        onChange={(e) => handleChange(setting.key, e.target.value)}
                        className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                        placeholder={`Enter your ${setting.label.toLowerCase()}`}
                        autoComplete="off"
                      />
                    ) : setting.type === "switch" ? (
                      <Switch
                        id={setting.key}
                        checked={form.notifications}
                        onCheckedChange={(v) => handleChange("notifications", v)}
                        className="data-[state=checked]:bg-green-500"
                      />
                    ) : setting.type === "theme" ? (
                      <div className="flex items-center gap-4">
                        <Button
                          type="button"
                          variant={theme === "light" ? "default" : "outline"}
                          className={`flex items-center gap-2 ${theme === "light" ? "bg-blue-500 text-white" : ""}`}
                          onClick={() => setTheme("light")}
                        >
                          <Sun className="w-4 h-4" />
                          Light
                        </Button>
                        <Button
                          type="button"
                          variant={theme === "dark" ? "default" : "outline"}
                          className={`flex items-center gap-2 ${theme === "dark" ? "bg-gray-800 text-white" : ""}`}
                          onClick={() => setTheme("dark")}
                        >
                          <Moon className="w-4 h-4" />
                          Dark
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
                <Button type="submit" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none">
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
