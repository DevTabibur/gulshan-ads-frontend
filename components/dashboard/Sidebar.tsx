"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  BarChart3,
  Target,
  List,
  Plus,
  FileIcon as FileTemplate,
  BookOpen,
  FileText,
  PenTool,
  Tag,
  Users,
  FileBarChart,
  TrendingUp,
  DollarSign,
  Settings,
  User,
  CreditCard,
  Plug,
  ChevronRight,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

import { sidebarConfig } from "@/config/sidebar"
import type { SidebarItem } from "@/types/dashboard"
import { useSidebar } from "@/hooks/useSidebar"

const iconMap = {
  LayoutDashboard,
  BarChart3,
  Target,
  List,
  Plus,
  FileTemplate,
  BookOpen,
  FileText,
  PenTool,
  Tag,
  Users,
  FileBarChart,
  TrendingUp,
  DollarSign,
  Settings,
  User,
  CreditCard,
  Plug,
  MessageSquare,
}

interface SidebarProps {
  className?: string
}

// Helper: Find all parent IDs for the active route
function findParentIdsForActiveRoute(
  items: SidebarItem[],
  pathname: string,
  parents: string[] = []
): string[] | null {
  for (const item of items) {
    if (item.href && pathname === item.href) {
      return parents
    }
    if (item.children && item.children.length > 0) {
      const found = findParentIdsForActiveRoute(item.children, pathname, [...parents, item.id])
      if (found) return found
    }
  }
  return null
}

// Helper: Find all parent IDs for the closest matching route (for partial matches)
function findParentIdsForClosestMatch(
  items: SidebarItem[],
  pathname: string,
  parents: string[] = []
): string[] | null {
  for (const item of items) {
    if (item.href && pathname.startsWith(item.href)) {
      return parents
    }
    if (item.children && item.children.length > 0) {
      const found = findParentIdsForClosestMatch(item.children, pathname, [...parents, item.id])
      if (found) return found
    }
  }
  return null
}

function SidebarContent({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname()
  const { isCollapsed } = useSidebar()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Expand parent menus for the active route
  useEffect(() => {
    // Try to find exact match first
    let parentIds = findParentIdsForActiveRoute(sidebarConfig, pathname)
    // If not found, try closest match (for nested routes)
    if (!parentIds) {
      parentIds = findParentIdsForClosestMatch(sidebarConfig, pathname)
    }
    if (parentIds) {
      setExpandedItems(parentIds)
    }
  }, [pathname])

  const toggleExpanded = useCallback((itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    )
  }, [])

  // Helper: check if any child is active (for highlighting parent if child is active)
  const isChildActive = (item: SidebarItem): boolean => {
    if (item.href && pathname === item.href) return true
    if (item.children) {
      return item.children.some(isChildActive)
    }
    return false
  }

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const Icon = iconMap[item.icon as keyof typeof iconMap]
    const isActive = pathname === item.href
    const isExpanded = expandedItems.includes(item.id)
    const hasChildren = item.children && item.children.length > 0
    const childActive = hasChildren && isChildActive(item)

    return (
      <div key={item.id}>
        {item.href ? (
          <Link
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "flex items-center gap-3 text-black dark:text-white rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-800",
              level > 0 && "ml-6",
              (isActive || childActive) &&
                "bg-gradient-to-r from-green-500/10 to-cyan-500/10 text-green-600 dark:text-green-400 border-r-2 border-green-500",
              isCollapsed && level === 0 && "justify-center px-2",
            )}
          >
            {Icon && <Icon className="h-4 w-4 flex-shrink-0 " />}
            {(!isCollapsed || level > 0) && (
              <>
                <span className="flex-1 text-black dark:text-white">{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </>
            )}
          </Link>
        ) : (
          <Button
            variant="ghost"
            onClick={() => toggleExpanded(item.id)}
            className={cn(
              "w-full justify-start gap-3 px-3 py-2 text-sm font-medium",
              level > 0 && "ml-6",
              isCollapsed && level === 0 && "justify-center px-2",
              childActive &&
                "bg-gradient-to-r from-green-500/10 to-cyan-500/10 text-green-600 dark:text-green-400 border-r-2 border-green-500"
            )}
          >
            {Icon && <Icon className="h-4 w-4 flex-shrink-0 text-black dark:text-white" />}
            {(!isCollapsed || level > 0) && (
              <>
                <span className="flex-1 text-left text-black dark:text-white">{item.title}</span>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
                {hasChildren && (
                  <motion.div animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                )}
              </>
            )}
          </Button>
        )}

        {/* Children */}
        <AnimatePresence>
          {hasChildren && isExpanded && (!isCollapsed || level > 0) && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="space-y-1 py-1">{item.children?.map((child) => renderSidebarItem(child, level + 1))}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <Link
        href="/"
        className={cn(
          "flex items-center gap-2 px-3 py-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer",
          isCollapsed && "justify-center px-2",
        )}
      >
        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">B</span>
        </div>
        {!isCollapsed && (
          <span className="font-bold text-lg bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
            Biggapon BD
          </span>
        )}
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3 overflow-y-auto">{sidebarConfig.map((item) => renderSidebarItem(item))}</nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="border-t border-gray-200 dark:border-gray-800 p-3">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Biggapon BD
          </div>
        </div>
      )}
    </div>
  )
}

export function Sidebar({ className }: SidebarProps) {
  const { isCollapsed, isMobileOpen, closeMobile } = useSidebar()

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside
        className={cn(
          "hidden lg:flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900",
          isCollapsed ? "w-16" : "w-64",
          className,
        )}
        animate={{ width: isCollapsed ? 64 : 256 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={closeMobile}>
        <SheetContent side="left" className="w-64 p-0">
          <SidebarContent onItemClick={closeMobile} />
        </SheetContent>
      </Sheet>
    </>
  )
}
