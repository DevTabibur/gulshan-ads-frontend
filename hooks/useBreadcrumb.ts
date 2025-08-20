"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import type { BreadcrumbItem } from "@/types/dashboard"

const routeMap: Record<string, string> = {
  dashboard: "Dashboard",
  analytics: "Analytics",
  campaigns: "Campaigns",
  create: "Create",
  templates: "Templates",
  blog: "Blog",
  categories: "Categories",
  clients: "Clients",
  reports: "Reports",
  performance: "Performance",
  roi: "ROI Analysis",
  settings: "Settings",
  profile: "Profile",
  billing: "Billing",
  integrations: "Integrations",
}

export function useBreadcrumb(): BreadcrumbItem[] {
  const pathname = usePathname()

  return useMemo(() => {
    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = []

    let currentPath = ""
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Skip the first 'dashboard' segment for cleaner breadcrumbs
      if (segment === "dashboard" && index === 0) return

      const title = routeMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)

      breadcrumbs.push({
        title,
        href: index === segments.length - 1 ? undefined : currentPath,
      })
    })

    return breadcrumbs
  }, [pathname])
}
