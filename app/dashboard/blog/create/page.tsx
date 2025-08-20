"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Save, Eye, Upload, X, Plus, Tag, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const validationSchema = Yup.object({
  title: Yup.string()
    .min(10, "Title must be at least 10 characters")
    .max(100, "Title must be less than 100 characters")
    .required("Title is required"),
  excerpt: Yup.string()
    .min(50, "Excerpt must be at least 50 characters")
    .max(300, "Excerpt must be less than 300 characters")
    .required("Excerpt is required"),
  content: Yup.string().min(100, "Content must be at least 100 characters").required("Content is required"),
  category: Yup.string().required("Category is required"),
  status: Yup.string().required("Status is required"),
})

const categories = ["Technology", "Platform Analysis", "Strategy", "Case Studies", "Industry News", "Tips & Tricks"]

export default function CreateBlogPage() {
  const router = useRouter()
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")
  const [featuredImage, setFeaturedImage] = useState<string | null>(null)

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = (values: any) => {
    const blogPost = {
      ...values,
      tags,
      featuredImage,
      author: "Current User",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      views: 0,
    }

    console.log("Creating blog post:", blogPost)

    // Simulate API call
    setTimeout(() => {
      router.push("/dashboard/blog")
    }, 1000)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Blog Post</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Write and publish a new blog post</p>
          </div>
        </div>

        <Formik
          initialValues={{
            title: "",
            excerpt: "",
            content: "",
            category: "",
            status: "draft",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              {/* Main Content */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Post Title</CardTitle>
                        <CardDescription>Write a compelling title for your blog post</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Field
                          as={Input}
                          name="title"
                          placeholder="Enter your blog post title..."
                          className={errors.title && touched.title ? "border-red-500" : ""}
                        />
                        <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Excerpt */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Excerpt</CardTitle>
                        <CardDescription>A brief summary of your blog post</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Field
                          as={Textarea}
                          name="excerpt"
                          placeholder="Write a brief excerpt..."
                          rows={3}
                          className={errors.excerpt && touched.excerpt ? "border-red-500" : ""}
                        />
                        <ErrorMessage name="excerpt" component="div" className="text-red-500 text-sm mt-1" />
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Content</CardTitle>
                        <CardDescription>Write your full blog post content</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Field
                          as={Textarea}
                          name="content"
                          placeholder="Write your blog post content..."
                          rows={15}
                          className={errors.content && touched.content ? "border-red-500" : ""}
                        />
                        <ErrorMessage name="content" component="div" className="text-red-500 text-sm mt-1" />
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
                    <Card>
                      <CardHeader>
                        <CardTitle>Publish Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Status</label>
                          <Select value={values.status} onValueChange={(value) => setFieldValue("status", value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="published">Published</SelectItem>
                              <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block">Category</label>
                          <Select value={values.category} onValueChange={(value) => setFieldValue("category", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="flex gap-2">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600"
                          >
                            <Save className="h-4 w-4 mr-2" />
                            {isSubmitting ? "Saving..." : "Save Post"}
                          </Button>
                          <Button type="button" variant="outline">
                            <Eye className="h-4 w-4" />
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
                    <Card>
                      <CardHeader>
                        <CardTitle>Featured Image</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {featuredImage ? (
                          <div className="relative">
                            <img
                              src={featuredImage || "/placeholder.svg"}
                              alt="Featured"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => setFeaturedImage(null)}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                            <ImageIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Upload featured image</p>
                            <Button type="button" variant="outline" size="sm">
                              <Upload className="h-4 w-4 mr-2" />
                              Choose Image
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>Tags</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex gap-2">
                          <Input
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            placeholder="Add a tag..."
                            onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                          />
                          <Button type="button" onClick={addTag} size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="cursor-pointer hover:bg-red-100 hover:text-red-800"
                              onClick={() => removeTag(tag)}
                            >
                              <Tag className="h-3 w-3 mr-1" />
                              {tag}
                              <X className="h-3 w-3 ml-1" />
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </DashboardLayout>
  )
}
