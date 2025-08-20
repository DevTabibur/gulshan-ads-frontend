"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, User, Calendar, Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  avatarUrl?: string
  rating: number
  content: string
  status: "published" | "pending" | "archived"
  createdAt: string
}

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amit Sharma",
    role: "Marketing Lead",
    company: "TechNova",
    avatarUrl: "",
    rating: 5,
    content: "Gulshan Ads helped us double our leads in just 3 months. Their expertise in digital campaigns is unmatched.",
    status: "published",
    createdAt: "2024-01-10T09:15:00Z",
  },
  {
    id: "2",
    name: "Priya Verma",
    role: "Founder",
    company: "EcoBite",
    avatarUrl: "",
    rating: 4,
    content: "The team is responsive and creative. Our brand visibility has grown significantly since partnering with them.",
    status: "published",
    createdAt: "2024-01-12T14:30:00Z",
  },
  {
    id: "3",
    name: "Rahul Singh",
    role: "CMO",
    company: "FinEdge",
    avatarUrl: "",
    rating: 5,
    content: "Professional, data-driven, and always on time. Highly recommend for any business looking to scale.",
    status: "pending",
    createdAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "4",
    name: "Sonia Kapoor",
    role: "Product Manager",
    company: "Appify",
    avatarUrl: "",
    rating: 4,
    content: "Their campaign strategies are innovative and effective. We saw a 30% increase in app downloads.",
    status: "published",
    createdAt: "2024-01-18T11:00:00Z",
  },
  {
    id: "5",
    name: "Vikram Mehra",
    role: "CEO",
    company: "MarketMinds",
    avatarUrl: "",
    rating: 3,
    content: "Good service overall, but communication could be improved.",
    status: "archived",
    createdAt: "2024-01-20T13:00:00Z",
  },
  {
    id: "6",
    name: "Neha Joshi",
    role: "Head of Sales",
    company: "RetailX",
    avatarUrl: "",
    rating: 5,
    content: "We achieved our quarterly targets thanks to their targeted ad campaigns.",
    status: "published",
    createdAt: "2024-01-22T15:00:00Z",
  },
  {
    id: "7",
    name: "Arjun Patel",
    role: "Growth Hacker",
    company: "Startly",
    avatarUrl: "",
    rating: 4,
    content: "Great ROI and transparent reporting. Will work with them again.",
    status: "pending",
    createdAt: "2024-01-25T17:00:00Z",
  },
  {
    id: "8",
    name: "Meera Nair",
    role: "Brand Manager",
    company: "GlowUp",
    avatarUrl: "",
    rating: 5,
    content: "Our social media engagement skyrocketed. The creative team is top-notch.",
    status: "published",
    createdAt: "2024-01-28T19:00:00Z",
  },
  {
    id: "9",
    name: "Suresh Kumar",
    role: "Director",
    company: "EduSmart",
    avatarUrl: "",
    rating: 4,
    content: "Very satisfied with the campaign results and the professionalism of the team.",
    status: "published",
    createdAt: "2024-01-30T21:00:00Z",
  },
]

const PAGE_SIZE = 6

// Simple Breadcrumb component for dashboard
function Breadcrumbs() {
  return (
    <nav className="mb-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <li>
          <Link href="/dashboard" className="hover:underline text-gray-700 dark:text-gray-200 font-medium">
            Dashboard
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4" />
        </li>
        <li className="text-gray-900 dark:text-gray-100 font-semibold">Testimonials</li>
      </ol>
    </nav>
  )
}

export default function TestimonialsManagePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [testimonials, setTestimonials] = useState(mockTestimonials)
  const [page, setPage] = useState(1)

  const filteredTestimonials = testimonials.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || t.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredTestimonials.length / PAGE_SIZE)
  const paginatedTestimonials = filteredTestimonials.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-200 text-green-900 dark:bg-green-900/60 dark:text-green-300 border border-green-300 dark:border-green-700"
      case "pending":
        return "bg-yellow-200 text-yellow-900 dark:bg-yellow-900/60 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700"
      case "archived":
        return "bg-gray-200 text-gray-900 dark:bg-gray-800/60 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
      default:
        return "bg-gray-200 text-gray-900 dark:bg-gray-800/60 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
    }
  }

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
          fill={i <= rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        {/* <Breadcrumbs /> */}

        {/* Page Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Testimonials</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage client testimonials and feedback</p>
          </div>
          <Link href="/dashboard/testimonials/create">
            <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none">
              <Plus className="h-4 w-4 mr-2" />
              Add Testimonial
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-none">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search testimonials..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value)
                      setPage(1)
                    }}
                    className="pl-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1) }}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  <Filter className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <SelectItem value="all" className="text-gray-900 dark:text-gray-100">All Status</SelectItem>
                  <SelectItem value="published" className="text-gray-900 dark:text-gray-100">Published</SelectItem>
                  <SelectItem value="pending" className="text-gray-900 dark:text-gray-100">Pending</SelectItem>
                  <SelectItem value="archived" className="text-gray-900 dark:text-gray-100">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedTestimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="flex flex-col flex-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow rounded-xl">
                <CardContent className="pt-6 pb-4 flex flex-col flex-1">
                  <div className="flex flex-col flex-1 h-full">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                        {t.avatarUrl ? (
                          <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          t.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} @ {t.company}</div>
                      </div>
                      <Badge className={getStatusColor(t.status) + " capitalize px-2 py-0.5 rounded ml-auto"}>
                        {t.status}
                      </Badge>
                    </div>
                    <div className="mb-2">{renderStars(t.rating)}</div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">{t.content}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(t.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                          <DropdownMenuItem className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                            onClick={() => handleDelete(t.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={page === i + 1 ? "default" : "outline"}
                size="sm"
                className={`rounded-full ${
                  page === i + 1
                    ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white dark:text-gray-900 border-none"
                    : "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="rounded-full"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </Button>
          </div>
        )}

        {filteredTestimonials.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-gray-500 dark:text-gray-400">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No testimonials found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}
