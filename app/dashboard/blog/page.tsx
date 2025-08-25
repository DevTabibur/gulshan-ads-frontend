"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import type { BlogPost } from "@/types/dashboard"
import Link from "next/link"
import { Breadcrumb } from "@/components/dashboard/Breadcrumb"
import { getAllBlogs } from "@/app/api/blog/blog.api"
import { deleteBlog } from "@/app/api/blog/blog.api"

export default function BlogManagePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true)
      setError(null)
      try {
        const res = await getAllBlogs()
        if (res?.statusCode === 200) {
          setPosts(res?.data)
        }

      } catch (err) {
        setError("Failed to fetch blog posts.")
      } finally {
        setLoading(false)
      }
    }
    fetchBlogs()
  }, [])

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Delete blog with confirmation
  const handleDelete = async (postId: string) => {
    console.log("id", postId)
    const confirmed = window.confirm("Are you sure you want to delete this blog post?");
    if (!confirmed) return;
    try {
      const res = await deleteBlog(postId);
      console.log("res", res)
      if (res && res.statusCode === 200) {
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        window.alert("Failed to delete blog post.");
      }
    } catch (err) {
      window.alert("Failed to delete blog post.");
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-200 text-green-900 dark:bg-green-900/60 dark:text-green-300 border border-green-300 dark:border-green-700"
      case "draft":
        return "bg-yellow-200 text-yellow-900 dark:bg-yellow-900/60 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700"
      case "archived":
        return "bg-gray-200 text-gray-900 dark:bg-gray-800/60 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
      default:
        return "bg-gray-200 text-gray-900 dark:bg-gray-800/60 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Blog Management</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your blog posts and content</p>
          </div>
          <Link href="/dashboard/blog/create">
            <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none">
              <Plus className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </Link>
        </div>
        <div className="my-4"> <Breadcrumb /></div>

        {/* Filters */}
        <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-none">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
                  <Input
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  <Filter className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <SelectItem value="all" className="text-gray-900 dark:text-gray-100">All Status</SelectItem>
                  <SelectItem value="published" className="text-gray-900 dark:text-gray-100">Published</SelectItem>
                  <SelectItem value="draft" className="text-gray-900 dark:text-gray-100">Draft</SelectItem>
                  <SelectItem value="archived" className="text-gray-900 dark:text-gray-100">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts */}
        {loading ? (
          <div className="flex justify-center py-12">
            <span className="text-gray-500 dark:text-gray-400">Loading...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center py-12">
            <span className="text-red-500 dark:text-red-400">{error}</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className="flex flex-col flex-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow rounded-xl">
                    <CardContent className="pt-6 pb-4 flex flex-col flex-1">
                      <div className="flex flex-col flex-1 h-full">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post.title}</h3>
                          <Badge className={getStatusColor(post.status) + " capitalize px-2 py-0.5 rounded"}>
                            {post.status}
                          </Badge>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views?.toLocaleString?.() ?? "0"} views</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-auto mb-3">
                          {(post.tags || []).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
                            >
                              {tag}
                            </Badge>
                          ))}
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
                                onClick={() => handleDelete(String(post?._id))}
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

            {filteredPosts.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-500 dark:text-gray-400">
                  <Search className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No posts found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
