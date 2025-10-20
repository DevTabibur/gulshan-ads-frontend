"use client"

import React, { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { Save, Upload, X, Plus, Tag, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { Breadcrumb } from "@/components/dashboard/Breadcrumb"
import { getAllBlogCategories, createBlog } from "@/app/api/blog/blog.api"
import toast from "react-hot-toast"
import { QuillField } from "@/form/QuillField"

// Remove tags and featuredImage from Yup validation, handle them manually
const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be less than 100 characters")
    .required("Title is required"),
  slug: Yup.string()
    .trim()
    .min(3, "Slug must be at least 3 characters")
    .max(120, "Slug must be less than 120 characters")
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug can only contain lowercase letters, numbers, and hyphens")
    .required("Slug is required"),
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

// Slugify helper
function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word, non-space, non-hyphen
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-") // Replace multiple - with single -
    .replace(/^-+|-+$/g, "") // Trim - from start/end
}

export default function CreateBlogPage() {
  const router = useRouter()
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [categories, setCategories] = useState<any[]>([])
  const [loadingCategories, setLoadingCategories] = useState(false)

  // Error states for custom validation
  const [featuredImageError, setFeaturedImageError] = useState<string | null>(null)
  const [tagsError, setTagsError] = useState<string | null>(null)
  const [categoryError, setCategoryError] = useState<string | null>(null)
  const [submitAttempted, setSubmitAttempted] = useState(false)

  useEffect(() => {
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
  }, [])

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

  // Handle file input change, store File object and preview URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0]
    if (file) {
      setFeaturedImage(file)
      setFeaturedImagePreview(URL.createObjectURL(file))
      setFeaturedImageError(null)
    }
  }

  // Handle drag and drop, store File object and preview URL
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]
      setFeaturedImage(file)
      setFeaturedImagePreview(URL.createObjectURL(file))
      setFeaturedImageError(null)
    }
  }

  const handleChooseImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = () => {
    setFeaturedImage(null)
    setFeaturedImagePreview(null)
    setFeaturedImageError("Featured image is required")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (values: any, { setSubmitting, setFieldError, resetForm }: any) => {
    let categoryId = ""
    setFeaturedImageError(null)
    setTagsError(null)
    setCategoryError(null)
    try {
      const parsed = JSON.parse(values.category)
      categoryId = parsed._id
    } catch {
      categoryId = values.category
    }

    let hasError = false

    if (!tags.length) {
      setFieldError("tags", "At least one tag is required")
      setTagsError("At least one tag is required")
      hasError = true
    }

    if (!featuredImage) {
      setFieldError("featuredImage", "Featured image is required")
      setFeaturedImageError("Featured image is required")
      hasError = true
    }

    if (!values.category) {
      setFieldError("category", "Category is required")
      setCategoryError("Category is required")
      hasError = true
    }

    if (hasError) {
      setSubmitting(false)
      return
    }

    // Prepare FormData to send image and all blog data
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("content", values.content);
    formData.append("status", values.status);
    formData.append("category", categoryId);
    formData.append("tags", JSON.stringify(tags.map((t) => t.trim())));
    formData.append("blogFeaturedImage", featuredImage as any);


    try {
      const res = await createBlog(formData)
      if (res.statusCode === 200) {
        resetForm()
        setTags([])
        setFeaturedImage(null)
        setFeaturedImagePreview(null)
        setFeaturedImageError(null)
        setTagsError(null)
        setCategoryError(null)
        // Reset QuillField by dispatching an event to clear content
        const quillEditor = document.querySelector('.ql-editor');
        if (quillEditor) {
          quillEditor.innerHTML = '';
        }
        toast.success("Blog Created Successfully")
        // router.push("/dashboard/blog")
      }
    } catch (err: any) {
      toast.error("Error creating blog")
    } finally {
      setSubmitting(false)
    }
  }

  // if (tagsError) {
  //   toast.error(tagsError)
  // }

  // Track if slug was manually changed by user
  const [slugManuallyChanged, setSlugManuallyChanged] = useState(false);

  return (
    <DashboardLayout>
      <div className="mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Blog Post</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Write and publish a new blog post</p>
          </div>
        </div>
        <div className="my-4">
          <Breadcrumb />
        </div>
        <Formik
          initialValues={{
            title: "",
            slug: "",
            content: "",
            category: "",
            status: "draft",
            tags: [],
            featuredImage: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting, errors, touched }) => {
            // Auto-generate slug from title if slug not manually changed
            React.useEffect(() => {
              if (!slugManuallyChanged) {
                setFieldValue("slug", slugify(values.title), false)
              }
              // eslint-disable-next-line
            }, [values.title])

            return (
              <Form className="space-y-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
                        <CardHeader>
                          <CardTitle className="text-gray-900 dark:text-white">Post Title</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400">
                            Write a compelling title for your blog post
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Field
                            as={Input}
                            name="title"
                            placeholder="Enter your blog post title..."
                            className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 ${errors.title && touched.title ? "border-red-500 dark:border-red-500" : ""}`}
                          />
                          <ErrorMessage name="title" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />

                          {/* Slug Field */}
                          <div className="mt-4">
                            <label htmlFor="slug" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1">
                              Slug
                            </label>
                            <Field
                              as={Input}
                              name="slug"
                              id="slug"
                              placeholder="post-title-slug"
                              className={`bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 ${errors.slug && touched.slug ? "border-red-500 dark:border-red-500" : ""}`}
                              value={values.slug}
                              onChange={(e: any) => {
                                setFieldValue("slug", e.target.value)
                                setSlugManuallyChanged(true)
                              }}
                              onBlur={(e: any)=> {
                                // If slug is empty after blur, regenerate from title
                                if (!e.target.value) {
                                  setFieldValue("slug", slugify(values.title))
                                  setSlugManuallyChanged(false)
                                }
                              }}
                            />
                            <ErrorMessage name="slug" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              The slug is used in the blog post URL. You can edit it if you want.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <CardHeader>
                          <CardTitle className="text-gray-900 dark:text-white">Content</CardTitle>
                          <CardDescription className="text-gray-600 dark:text-gray-400">
                            Write your full blog post content
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div
                            className={`quill-field-wrapper rounded-md border px-3 py-2 min-h-[180px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus-within:border-blue-500 dark:focus-within:border-blue-400 transition-colors duration-200 ${errors.content && touched.content ? "border-red-500 dark:border-red-500" : ""
                              }`}
                          >
                            <QuillField
                              value={values.content}
                              onChange={(val) => setFieldValue("content", val)}
                            />
                          </div>
                          <ErrorMessage name="content" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Publish Settings */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <CardHeader>
                          <CardTitle className="text-gray-900 dark:text-white">Publish Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block text-gray-900 dark:text-gray-200">Status</label>
                            <Select value={values.status} onValueChange={(value) => setFieldValue("status", value)}>
                              <SelectTrigger className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700">
                                <SelectItem value="draft" className="text-gray-900 dark:text-white cursor-pointer">Draft</SelectItem>
                                <SelectItem value="published" className="text-gray-900 dark:text-white cursor-pointer">Published</SelectItem>
                                <SelectItem value="archived" className="text-gray-900 dark:text-white cursor-pointer">Archived</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block text-gray-900 dark:text-gray-200">Category</label>
                            <Select
                              value={values.category}
                              onValueChange={(value) => {
                                setFieldValue("category", value)
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
                          <div className="flex gap-2">
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white"
                            >
                              <Save className="h-4 w-4 mr-2" />
                              {isSubmitting ? "Saving..." : "Save Post"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    {/* Featured Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <CardHeader>
                          <CardTitle className="text-gray-900 dark:text-white">Featured Image</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {featuredImagePreview ? (
                            <div className="relative">
                              <img
                                src={featuredImagePreview || "/placeholder.svg"}
                                alt="Featured"
                                className="w-full h-32 object-cover rounded-lg"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={handleRemoveImage}
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                          ) : (
                            <div
                              className={`border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center bg-white dark:bg-gray-900 transition-colors duration-150 ${dragActive ? "border-blue-400 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30" : ""}`}
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={handleChooseImageClick}
                              style={{ cursor: "pointer" }}
                            >
                              <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <ImageIcon className="h-8 w-8 mx-auto text-gray-400 dark:text-gray-500 mb-2 pointer-events-none" />
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 pointer-events-none">
                                {dragActive ? "Drop image here..." : "Upload featured image"}
                              </p>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                className="border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white pointer-events-none"
                                tabIndex={-1}
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                Choose Image
                              </Button>
                              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 pointer-events-none">Drag & drop or click to select</p>
                            </div>
                          )}
                          <ErrorMessage name="featuredImage" component="div" className="text-red-500 dark:text-red-400 text-sm mt-1" />
                          {/* {featuredImageError && (
                            <div className="text-red-500 dark:text-red-400 text-sm mt-1">{featuredImageError}</div>
                          )} */}
                        </CardContent>
                      </Card>
                    </motion.div>
                    {/* Tags */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                        <CardHeader>
                          <CardTitle className="text-gray-900 dark:text-white">Tags</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="flex gap-2">
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
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="cursor-pointer hover:bg-red-100 hover:text-red-800 dark:hover:bg-red-900 dark:hover:text-red-300 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                                onClick={() => {
                                  removeTag(tag, setFieldValue)
                                }}
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                                <X className="h-3 w-3 ml-1" />
                              </Badge>
                            ))}
                          </div>
                          {tagsError && (
                            <div className="text-red-500 dark:text-red-400 text-sm mt-1">{tagsError}</div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </DashboardLayout>
  )
}
