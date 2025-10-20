"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Clock, User, Eye, MessageCircle, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Layout } from "@/components/Layout"
import { getBlogBySlug } from "@/app/api/blog/blog.api"
import Image from "next/image"

const fallbackImage = "/placeholder.svg?height=300&width=500&text=Blog+Image"

const BlogDetailsPage = () => {
  const { slug } = useParams()
  const [blog, setBlog] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true)
      try {
        const blogs = await getBlogBySlug(slug as string)
        setBlog(blogs)
      } catch (e) {
        setBlog(null)
      }
      setLoading(false)
    }
    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white dark:bg-gray-900">
        <span className="animate-pulse text-lg text-muted-foreground">Loading...</span>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-white dark:bg-gray-900">
        <span className="text-lg text-destructive">Blog not found.</span>
      </div>
    )
  }

  return (
    <Layout>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        {/* Blog featuredImage */}
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 shadow-md bg-gray-100 dark:bg-gray-800">
          <Image
            src={
              blog?.data?.featuredImage
                ? `${process.env.NEXT_PUBLIC_IMAGE_API}/${blog?.data?.featuredImage}`
                : fallbackImage
            }
            alt={blog?.data?.title}
            className="w-full h-full object-cover"
            width={500}
            height={300}
            style={{ backgroundColor: "transparent" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallbackImage
            }}
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl py-4 font-bold  text-gray-900 dark:text-white leading-tight">
          {blog?.data?.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 text-sm mb-6">
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span>{blog?.data?.author || "Admin"}</span>
          </div>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span>
              {blog?.data?.createdAt
                ? new Date(blog?.data?.createdAt).toLocaleString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })
                : ""}
            </span>
          </div>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span>{blog?.data?.readTime || "0"} min read</span>
          </div>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span>{blog?.data?.views ?? 0} views</span>
          </div>
          <span className="hidden sm:inline text-gray-400 dark:text-gray-600">·</span>
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <MessageCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span>{blog?.data?.comments ?? 0} comments</span>
          </div>
        </div>

        {/* Category & Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {blog?.data?.category && (
            <Badge variant="outline" className="text-xs px-3 py-1 rounded-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
              <Tag className="w-3 h-3 mr-1 text-gray-500 dark:text-gray-400" />
              {blog?.data?.category?.name}
            </Badge>
          )}
          {(() => {
            let tags: string[] = [];
            if (typeof blog?.data?.tags === "string") {
              try {
                const parsed = JSON.parse(blog.data.tags);
                if (Array.isArray(parsed)) {
                  tags = parsed;
                }
              } catch (e) {
                // fallback: not a valid JSON string
              }
            } else if (Array.isArray(blog?.data?.tags)) {
              tags = blog.data.tags;
            }
            return tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-0"
              >
                #{tag}
              </Badge>
            ));
          })()}
        </div>

        {/* Content */}
        <div className="prose py-12 prose-base dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-strong:text-gray-900 dark:prose-strong:text-white prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-gray-700">
          {blog?.data?.content ? (
            <div
              dangerouslySetInnerHTML={{ __html: blog?.data?.content }}
            />
          ) : (
            <p className="text-muted-foreground">No content available.</p>
          )}
        </div>
      </motion.article>
    </Layout>
  )
}

export default BlogDetailsPage