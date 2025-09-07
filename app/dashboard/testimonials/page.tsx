"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Calendar, Star, ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select"
import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Breadcrumb } from "@/components/dashboard/Breadcrumb"
import {
  deleteTestimonial, getAllTestimonials, updateTestimonial
} from "@/app/api/auth/testimonials/testimonials.api"
import toast from "react-hot-toast"
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

const PAGE_SIZE = 6

const statusOptions = [
  { value: "published", label: "Published" },
  { value: "pending", label: "Pending" },
  { value: "archived", label: "Archived" },
]


function EditTestimonialModal({
  open,
  onOpenChange,
  testimonial,
  onSave,
  loading,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  testimonial: any
  onSave: (data: any) => void
  loading: boolean
}) {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    role: "",
    rating: 0,
    description: "",
    status: "published",
    authorImage: "",
  })

  useEffect(() => {
    if (testimonial) {
      setForm({
        fullName: testimonial.fullName || "",
        companyName: testimonial.companyName || "",
        role: testimonial.role || "",
        rating: testimonial.rating || 0,
        description: testimonial.description || "",
        status: testimonial.status || "published",
        authorImage: testimonial.authorImage || "",
      })
    }
  }, [testimonial, open])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleStarClick = (i: number) => {
    setForm({ ...form, rating: i })
  }

  const handleStatusChange = (v: string) => {
    setForm({ ...form, status: v })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg w-full bg-[#181f2a] text-white border-none rounded-2xl p-0">
        <form onSubmit={handleSubmit}>
          <DialogHeader className="px-8 pt-8">
            <DialogTitle className="text-2xl font-bold mb-1">Edit Testimonial</DialogTitle>
            <p className="text-gray-400 text-sm mb-4">Update client testimonial and feedback</p>
          </DialogHeader>
          <div className="flex flex-col items-center gap-4 px-8">
            <div className="relative flex flex-col items-center mb-2">
              <div className="w-20 h-20 rounded-full border-4 border-cyan-400 bg-[#232b3a] flex items-center justify-center text-4xl text-cyan-300 mb-2">
                {form.authorImage ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${form.authorImage}`}
                    alt={form.fullName}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  form.fullName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <Input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="bg-[#232b3a] text-white border-cyan-400"
                required
              />
              <Input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="bg-[#232b3a] text-white border-cyan-400"
                required
              />
              <Input
                name="role"
                value={form.role}
                onChange={handleChange}
                placeholder="Role"
                className="bg-[#232b3a] text-white border-cyan-400"
                required
              />
              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Testimonial"
                className="bg-[#232b3a] text-white border-cyan-400"
                required
              />
              <div className="flex items-center gap-2">
                <span className="text-sm">Rating:</span>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 cursor-pointer ${i <= form.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                    fill={i <= form.rating ? "currentColor" : "none"}
                    onClick={() => handleStarClick(i)}
                  />
                ))}
              </div>
              <Select value={form.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="bg-[#232b3a] text-white border-cyan-400">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-[#232b3a] text-white border-cyan-400">
                  {statusOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="px-8 pb-8 mt-4 flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="border-cyan-400 text-cyan-400">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-gradient-to-r from-green-500 to-cyan-500 text-white" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default function TestimonialsManagePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editLoading, setEditLoading] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await getAllTestimonials()
      if (res?.statusCode === 200) {
        setTestimonials(res?.data)
      }
    }
    fetchTestimonials()
  }, [])

  const filteredTestimonials = testimonials.filter((t) => {
    const matchesSearch =
      t?.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t?.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t?.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || t.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredTestimonials.length / PAGE_SIZE)
  const paginatedTestimonials = filteredTestimonials.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this testimonial?")) return
    const res = await deleteTestimonial(id)
    if (res?.statusCode === 200) {
      toast.success("Testimonial deleted successfully")
      setTestimonials(testimonials.filter((t) => t?._id !== id))
    } else {
      toast.error("Something went wrong")
    }
  }

  const handleEdit = (testimonial: any) => {
    setSelectedTestimonial(testimonial)
    setEditModalOpen(true)
  }

  const handleEditSave = async (form: any) => {
    setEditLoading(true)
    const res = await updateTestimonial(selectedTestimonial._id, form)
    if (res?.statusCode === 200) {
      toast.success("Testimonial updated successfully")
      setTestimonials((prev) =>
        prev.map((t) => (t._id === selectedTestimonial._id ? { ...t, ...form } : t))
      )
      setEditModalOpen(false)
      setSelectedTestimonial(null)
    } else {
      toast.error("Failed to update testimonial")
    }
    setEditLoading(false)
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
      {[1, 2, 3, 4, 5].map((i) => (
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

        <div className="my-4">
          <Breadcrumb />
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
              key={t._id || t.id}
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
                        {t.authorImage ? (
                          <img src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${t.authorImage}`} alt={t.fullName} className="w-10 h-10 rounded-full object-cover" />
                        ) : (
                          t.fullName
                            .split(" ")
                            .map((n: any) => n[0])
                            .join("")
                            .slice(0, 2)
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">{t.fullName}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{t.role} @ {t.companyName}</div>
                      </div>
                      <Badge
                        className={getStatusColor(t?.status) + " capitalize px-2 py-0.5 rounded ml-auto"}
                      >
                        {t?.status}
                      </Badge>
                    </div>
                    <div className="mb-2">{renderStars(t.rating)}</div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">{t.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-auto mb-3">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(t?.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                          <DropdownMenuItem
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => handleEdit(t)}
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          {/* <DropdownMenuItem className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem> */}
                          <DropdownMenuItem
                            className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900"
                            onClick={() => handleDelete(t?._id)}
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
                className={`rounded-full ${page === i + 1
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

        {/* Edit Modal */}
        <EditTestimonialModal
          open={editModalOpen}
          onOpenChange={(open) => {
            setEditModalOpen(open)
            if (!open) setSelectedTestimonial(null)
          }}
          testimonial={selectedTestimonial}
          onSave={handleEditSave}
          loading={editLoading}
        />
      </div>
    </DashboardLayout>
  )
}
