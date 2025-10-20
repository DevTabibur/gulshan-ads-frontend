"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, DollarSign, Target, Eye, MousePointer, ShoppingCart, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { useUserContext } from "@/contexts/UserContext"
import { useEffect, useState } from "react"
import { getFromLocalStorage } from "@/lib/local-storage"
import AccountApproved from "@/components/AccountApproved"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Active Campaigns",
    value: "23",
    change: "+12%",
    changeType: "positive" as const,
    icon: Target,
  },
  {
    title: "Total Clients",
    value: "156",
    change: "+5.2%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.5%",
    changeType: "negative" as const,
    icon: TrendingUp,
  },
]

const recentCampaigns = [
  {
    id: "1",
    name: "Summer Sale Campaign",
    platform: "Meta",
    status: "Active",
    budget: "$5,000",
    spent: "$3,245",
    impressions: "125K",
    clicks: "2.3K",
    conversions: "89",
  },
  {
    id: "2",
    name: "Brand Awareness Drive",
    platform: "TikTok",
    status: "Active",
    budget: "$3,000",
    spent: "$2,100",
    impressions: "89K",
    clicks: "1.8K",
    conversions: "45",
  },
  {
    id: "3",
    name: "Product Launch",
    platform: "Snapchat",
    status: "Paused",
    budget: "$2,500",
    spent: "$1,890",
    impressions: "67K",
    clicks: "1.2K",
    conversions: "32",
  },
]



export default function DashboardPage() {
  const { user, isLoading } = useUserContext()
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    setToken(getFromLocalStorage("adsToken"))
  }, [])

  // If not token and user is not verified, show approval message
  if (!token || (user && user.isVerified === false)) {
    return (
      <AccountApproved />
    )
  }

  

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back! Here's what's happening with your campaigns.
            </p>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-600">
            All Systems Operational
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-gray-600">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black dark:text-white">{stat.value}</div>
                  <p className={`text-xs ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Campaigns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className=""
        >
          <Card className="text-gray-600 dark:text-gray-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black dark:text-white">
                <BarChart3 className="h-5 w-5" />
                Recent Campaigns
              </CardTitle>
              <CardDescription>Your latest campaign performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCampaigns.map((campaign, index) => (
                  <motion.div
                    key={campaign.id}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">{campaign.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {campaign.platform}
                        </Badge>
                        <Badge variant={campaign.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          <span>
                            {campaign.spent} / {campaign.budget}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{campaign.impressions}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MousePointer className="h-3 w-3" />
                          <span>{campaign.clicks}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ShoppingCart className="h-3 w-3" />
                          <span>{campaign.conversions}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
