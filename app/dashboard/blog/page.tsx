"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Calendar, User, X } from "lucide-react"
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
import { getAllBlogs, deleteBlog, getAllBlogCategories, updateBlog } from "@/app/api/blog/blog.api"
import toast from "react-hot-toast"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { QuillField } from "@/form/QuillField"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Badge as TagBadge } from "@/components/ui/badge"

const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters")
    .required("Title is required"),
  content: Yup.string()
    .trim()
    .min(100, "Content must be at least 100 characters")
    .required("Content is required"),
  status: Yup.string()
    .oneOf(["draft", "published"], "Status must be draft or published")
    .required("Status is required"),
  category: Yup.string().required("Category is required"),
  // tags and featuredImage handled manually
})

function EditBlogModal({ open, onClose, post, onUpdated }: { open: boolean, onClose: () => void, post: BlogPost, onUpdated: (post: BlogPost) => void }) {
  const [categories, setCategories] = useState<any[]>([])
  const [loadingCategories, setLoadingCategories] = useState(false)
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null)
  const [tagsError, setTagsError] = useState<string | null>(null)
  const [categoryError, setCategoryError] = useState<string | null>(null)
  const [featuredImageError, setFeaturedImageError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!open) return
    async function fetchCategories() {
      setLoadingCategories(true)
      try {
        const res = await getAllBlogCategories()
        if (res.statusCode === 200 && Array.isArray(res.data)) {
          setCategories(res.data)
        } else {
          setCategories([])
        }
      } catch (err) {
        setCategories([])
      } finally {
        setLoadingCategories(false)
      }
    }
    fetchCategories()
  }, [open])

  useEffect(() => {
    if (post) {
      // tags: could be array or stringified array
      let tagArr: string[] = []
      if (Array.isArray(post.tags)) {
        tagArr = post.tags.flatMap((tagStr: any) => {
          try {
            return Array.isArray(tagStr) ? tagStr : JSON.parse(tagStr)
          } catch {
            return [tagStr]
          }
        })
      } else if (typeof post.tags === "string") {
        try {
          tagArr = JSON.parse(post.tags)
        } catch {
          tagArr = [post.tags]
        }
      }
      setTags(tagArr)
      
      // Set featured image preview with proper URL construction
      if (post?.featuredImage) {
        const imageUrl = post.featuredImage.startsWith('http') 
          ? post.featuredImage 
          : `${process.env.NEXT_PUBLIC_IMAGE_API || 'https://adsserver.boostersbd.com'}/${post.featuredImage}`
        setFeaturedImagePreview(imageUrl)
      } else {
        setFeaturedImagePreview(null)
      }
      
      setFeaturedImage(null)
      setTagsError(null)
      setCategoryError(null)
      setFeaturedImageError(null)
    }
  }, [post, open])

  const addTag = (setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void) => {
    const tag = newTag.trim()
    if (tag && !tags.includes(tag)) {
      const newTags = [...tags, tag]
      setTags(newTags)
      setNewTag("")
      setTagsError(null)
      if (setFieldValue) {
        setFieldValue("tags", newTags, true)
      }
    }
  }

  const removeTag = (tagToRemove: string, setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
    if (setFieldValue) {
      setFieldValue("tags", newTags, true)
    }
    if (newTags.length > 0) {
      setTagsError(null)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFeaturedImage(file)
      setFeaturedImagePreview(URL.createObjectURL(file))
      setFeaturedImageError(null)
    }
  }

  if (!open || !post) return null

  console.log("post=========>", post)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 30 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Edit Blog Post</h2>
          <Formik
            initialValues={{
              title: post.title || "",
              content: post.content || "",
              status: post.status || "draft",
              category: (post.category as any)?._id
                ? JSON.stringify({ _id: (post.category as any)._id, name: (post.category as any).name })
                : typeof post.category === "string"
                  ? post.category
                  : "",
              tags: tags,
              featuredImage: post?.featuredImage
                ? (post.featuredImage.startsWith('http') 
                    ? post.featuredImage 
                    : `${process.env.NEXT_PUBLIC_IMAGE_API || 'https://adsserver.boostersbd.com'}/${post.featuredImage}`)
                : null,
            }}
            enableReinitialize
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setIsSubmitting(true)
              setTagsError(null)
              setCategoryError(null)
              setFeaturedImageError(null)
              // Validate tags
              if (!tags.length) {
                setTagsError("At least one tag is required")
                setIsSubmitting(false)
                setSubmitting(false)
                return
              }
              // Validate category
              if (!values.category) {
                setCategoryError("Category is required")
                setIsSubmitting(false)
                setSubmitting(false)
                return
              }
              // Validate featured image (optional, allow empty)
              // Prepare form data
              const formData = new FormData()
              formData.append("title", values.title)
              formData.append("content", values.content)
              formData.append("status", values.status)
              try {
                const catObj = JSON.parse(values.category)
                formData.append("category", catObj._id)
              } catch {
                formData.append("category", values.category)
              }
              formData.append("tags", JSON.stringify(tags))
              if (featuredImage) {
                formData.append("featuredImage", featuredImage)
              }
              // else, do not send featuredImage, keep existing
              try {
                const res = await updateBlog((post?._id || post?.id) as any, formData)
                if (res && res.statusCode === 200) {
                  toast.success("Blog post updated successfully.")
                  onUpdated && onUpdated(res.data)
                  onClose()
                } else {
                  toast.error(res?.message || "Failed to update blog post.")
                }
              } catch (err) {
                toast.error("Failed to update blog post.")
              }
              setIsSubmitting(false)
              setSubmitting(false)
            }}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form>
                {/* Title */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Title</label>
                  <Field
                    name="title"
                    as={Input}
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                    placeholder="Enter blog title"
                  />
                  <ErrorMessage name="title" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                </div>
                {/* Category */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Category</label>
                  <Select
                    value={values.category}
                    onValueChange={(val) => {
                      setFieldValue("category", val)
                      setCategoryError(null)
                    }}
                  >
                    <SelectTrigger className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                      {loadingCategories ? (
                        <div className="px-4 py-2 text-gray-500 dark:text-gray-400">Loading...</div>
                      ) : categories.length === 0 ? (
                        <div className="px-4 py-2 text-gray-500 dark:text-gray-400">No categories found</div>
                      ) : (
                        categories.map((category) => (
                          <SelectItem
                            key={category._id}
                            value={JSON.stringify({ _id: category?._id, name: category?.name })}
                            className="text-gray-900 dark:text-white cursor-pointer"
                          >
                            {category.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <ErrorMessage name="category" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                  {categoryError && (
                    <div className="text-red-500 dark:text-red-400 text-sm mt-1">{categoryError}</div>
                  )}
                </div>
                {/* Content */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Content</label>
                  <Field
                    name="content"
                    component={QuillField}
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                    placeholder="Write your blog content here..."
                  />
                  <ErrorMessage name="content" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                </div>
                {/* Status */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Status</label>
                  <Select
                    value={values.status}
                    onValueChange={(val) => setFieldValue("status", val)}
                  >
                    <SelectTrigger className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                      <SelectItem value="draft" className="text-gray-900 dark:text-white">Draft</SelectItem>
                      <SelectItem value="published" className="text-gray-900 dark:text-white">Published</SelectItem>
                      <SelectItem value="archived" className="text-gray-900 dark:text-white">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  <ErrorMessage name="status" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                </div>
                {/* Featured Image */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Featured Image</label>
                  {featuredImagePreview ? (
                    <div className="relative mb-2">
                      <img
                        src={featuredImagePreview}
                        alt="Featured"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setFeaturedImage(null)
                          setFeaturedImagePreview(null)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : null}
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700"
                  />
                  {featuredImageError && (
                    <div className="text-red-500 dark:text-red-400 text-sm mt-1">{featuredImageError}</div>
                  )}
                </div>
                {/* Tags */}
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Tags</label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addTag((field, value, shouldValidate) => setFieldValue("tags", [...tags, newTag.trim()], true))
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        addTag((field, value, shouldValidate) => setFieldValue("tags", [...tags, newTag.trim()], true))
                      }}
                      size="sm"
                      className="text-gray-900 dark:text-white"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <TagBadge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer hover:bg-red-100 hover:text-red-800 dark:hover:bg-red-900 dark:hover:text-red-300 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        onClick={() => {
                          removeTag(tag, setFieldValue)
                        }}
                      >
                        <span className="flex items-center">
                          <span>{tag}</span>
                          <X className="h-3 w-3 ml-1" />
                        </span>
                      </TagBadge>
                    ))}
                  </div>
                  {tagsError && (
                    <div className="text-red-500 dark:text-red-400 text-sm mt-1">{tagsError}</div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white"
                  >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  )
}

export default function BlogManagePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [editPost, setEditPost] = useState<BlogPost | null>(null)

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
      post?.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // Delete blog with confirmation and update UI without page refresh
  const handleDelete = async (postId: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog post?");
    if (!confirmed) return;
    try {
      const res = await deleteBlog(postId);
      if (res && res.statusCode === 200) {
        // Remove the deleted blog from the posts state immediately
        setPosts((prevPosts) =>
          prevPosts.filter(
            (post) =>
              (typeof post?.id === "string" && post.id !== postId)
          )
        );
        toast.success("Blog post deleted successfully.");
      } else {
        toast.error("Failed to delete blog post.");
      }
    } catch (err) {
      toast.error("Failed to delete blog post.");
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

  // When edit is successful, update the post in the list
  const handlePostUpdated = (updatedPost: any) => {
    setPosts((prev) =>
      prev.map((p) =>
        (p._id === updatedPost._id || p.id === updatedPost._id) ? { ...p, ...updatedPost } : p
      )
    )
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
                  key={post?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className="flex flex-col flex-1 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg dark:hover:shadow-xl transition-shadow rounded-xl">
                    <CardContent className="pt-6 pb-4 flex flex-col flex-1">
                      <div className="flex flex-col flex-1 h-full">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{post?.title}</h3>
                          <Badge className={getStatusColor(post?.status) + " capitalize px-2 py-0.5 rounded"}>
                            {post?.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{post?.author || "Admin"}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post?.createdAt).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post?.views?.toLocaleString?.() ?? "0"} views</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 mt-auto mb-3">
                          {(post?.tags || []).map((tagStr) => {
                            let tags: string[] = [];
                            try {
                              // Try to parse the string as JSON array
                              tags = JSON.parse(tagStr);
                            } catch {
                              // Fallback: treat as single tag string
                              tags = [tagStr];
                            }
                            return tags.map((t) => (
                              <Badge
                                key={t}
                                variant="outline"
                                className="text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
                              >
                                {t}
                              </Badge>
                            ));
                          })}
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
                                onClick={() => {
                                  setEditPost(post)
                                  setEditModalOpen(true)
                                }}
                              >
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
        {/* Edit Modal */}
        {editModalOpen && (
          <EditBlogModal
            open={editModalOpen}
            onClose={() => {
              setEditModalOpen(false)
              // setEditPost(undefined)
            }}
            post={editPost as BlogPost}
            onUpdated={handlePostUpdated}
          />
        )}
      </div>
    </DashboardLayout>
  )
}
