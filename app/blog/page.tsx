
"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  Grid,
  List,
  Sparkles,
  TrendingUp,
  Eye,
  MessageCircle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  User,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Layout } from "@/components/Layout"
import { getAllBlogCategories, getAllBlogs } from "../api/blog/blog.api"
import Image from "next/image"
import Link from "next/link"



// Custom hook for debounced search
function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}



export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentPage, setCurrentPage] = useState(1)
  const [isSearching, setIsSearching] = useState(false)
  const [categories, setCategories] = useState<string[]>(["All Categories"])
  const [isLoadingCategories, setIsLoadingCategories] = useState(false)
  const [allBlogs, setAllBlogs] = useState<any[]>([])
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(false)




  const postsPerPage = 6
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Simulate search loading
  useEffect(() => {
    if (searchTerm !== debouncedSearchTerm) {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }, [searchTerm, debouncedSearchTerm])

  // Reset to first page when search or category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchTerm, selectedCategory])

  const filteredPosts = useMemo(() => {

    const filtered = allBlogs.filter((post) => {
      const matchesSearch =
        post?.title?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        post?.tags?.some((tag: any) => tag.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));


      const matchesCategory =
        selectedCategory === "All Categories" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });


    return filtered;
  }, [debouncedSearchTerm, selectedCategory, allBlogs]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const featuredPosts = allBlogs?.filter((post) => post.featured)
  const trendingPosts = allBlogs?.filter((post) => post.trending)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }


  console.log("filteredPosts", filteredPosts)

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoadingCategories(true)
      try {
        const data = await getAllBlogCategories();
        if (data?.statusCode === 200) {
          const categoryNames = data?.data?.map((cat: any) => typeof cat === "string" ? cat : cat.name)
            .filter(Boolean)
          setCategories(["All Categories", ...categoryNames])
        }
      } catch (error) {
        console.error("Error fetching categories", error)
      } finally {
        setIsLoadingCategories(false)
      }
    }
    fetchCategories()
  }, []) // Only run on mount




  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoadingBlogs(true)
      try {
        // You may need to adjust the import path for getAllBlogs
        const data = await getAllBlogs()
        if (data?.statusCode === 200) {
          setAllBlogs(data?.data || [])
        }
      } catch (error) {
        console.error("Error fetching blogs", error)
      } finally {
        setIsLoadingBlogs(false)
      }
    }
    fetchBlogs()
  }, []) // Only run on mount

  console.log("allBlogs ==>", allBlogs)


  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/20 to-cyan-500/20" />
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 rounded-full px-6 py-2 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Latest Insights & Strategies
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                  Biggapon BD
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Knowledge Hub</span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover cutting-edge advertising strategies, platform insights, and expert tips to
                <span className="text-green-600 font-semibold"> supercharge your campaigns</span>
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">50K+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Experts</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Search Bar */}
              <div className="relative mb-8">
                <motion.div className="relative" whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-green-500 dark:focus:border-green-400 rounded-2xl transition-all duration-300 text-gray-900 dark:text-white"
                  />
                  {isSearching && (
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full" />
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Filters and View Toggle */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                        ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>

                {/* View Toggle */}
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-1">
                  <motion.button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all duration-300 ${viewMode === "grid"
                      ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Grid className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-all duration-300 ${viewMode === "list"
                      ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <List className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && selectedCategory === "All Categories" && !debouncedSearchTerm && (
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 border border-green-200 dark:border-green-800 rounded-full px-4 py-2 mb-4">
                  <Sparkles className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">Featured Articles</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    Editor's Picks
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Hand-selected articles that showcase the latest trends and strategies in digital advertising
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-green-500 to-cyan-500 text-white border-0">
                          Featured
                        </Badge>
                      </div>
                      {post.trending && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                        >
                          {post.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{post.authorRole}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0">
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Blog Posts */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <motion.div
                  className="flex items-center justify-between mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {debouncedSearchTerm ? `Search Results for "${debouncedSearchTerm}"` : "Latest Articles"}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                      {selectedCategory !== "All Categories" && ` in ${selectedCategory}`}
                      {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
                    </p>
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {filteredPosts?.length > 0 ? (
                    <motion.div
                      key={`${viewMode}-${selectedCategory}-${debouncedSearchTerm}-${currentPage}`}
                      className={viewMode === "grid" ? "grid md:grid-cols-2 gap-6" : "space-y-6"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentPosts?.map((post, index) => (
                        <Link
                          key={post?.id}
                          href={`/blog/${post?.slug}`}
                          className="block"
                          tabIndex={0}
                        >
                          <motion.article
                            className={`group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 ${viewMode === "list" ? "flex gap-6" : ""
                              }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -3 }}
                          >
                            <div
                              className={`relative overflow-hidden ${viewMode === "list" ? "w-64 flex-shrink-0" : ""}`}
                            >
                              {post?.featuredImage ? (
                                <Image
                                  src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${post?.featuredImage}`}
                                  alt={post.title}
                                  width={viewMode === "list" ? 256 : 600}
                                  height={viewMode === "list" ? 256 : 192}
                                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${viewMode === "list" ? "w-full h-full" : "w-full h-48"
                                    }`}
                                />
                              ) : (
                                <Image
                                  src="/placeholder.svg"
                                  alt="Placeholder"
                                  width={viewMode === "list" ? 256 : 600}
                                  height={viewMode === "list" ? 256 : 192}
                                  className={`object-cover transition-transform duration-500 group-hover:scale-105 ${viewMode === "list" ? "w-full h-full" : "w-full h-48"
                                    }`}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                              {/* {post.trending && (
                                <div className="absolute top-3 right-3">
                                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Trending
                                  </Badge>
                                </div>
                              )} */}
                            </div>

                            <div className="p-6 flex-1">
                              <div className="flex items-center gap-3 mb-3 text-sm text-gray-500 dark:text-gray-400">
                                <Badge
                                  variant="outline"
                                  className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                                >
                                  {post?.category?.name}
                                </Badge>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {new Date(post?.createdAt).toLocaleDateString()}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {`${Math.floor(Math.random() * 8) + 2} min read`}
                                </div>
                              </div>

                              <h3
                                className={`font-bold mb-3 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 ${viewMode === "list" ? "text-lg" : "text-xl"
                                  }`}
                              >
                                {post?.title}
                              </h3>

                              <div className="flex items-center gap-2 mb-3">
                                {post.tags.slice(0, 3).map((tag: any) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                                  >
                                    <Tag className="w-3 h-3 mr-1" />
                                    {tag}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                    <User className="w-3 h-3" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900 dark:text-white">{post?.author || "Admin"}</div>
                                  </div>
                                </div>

                                {/* <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                                  <div className="flex items-center gap-1">
                                    <Eye className="w-3 h-3" />
                                    {post?.views?.toLocaleString()}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle className="w-3 h-3" />
                                    {post?.comments}
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </motion.article>
                        </Link>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="text-center py-16"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Search className="w-12 h-12 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">No articles found</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        We couldn't find any articles matching your search criteria. Try adjusting your search terms or
                        browse our categories.
                      </p>
                      <Button
                        onClick={() => {
                          setSearchTerm("")
                          setSelectedCategory("All Categories")
                        }}
                        className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0"
                      >
                        Clear Filters
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    className="flex justify-center items-center gap-2 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Previous
                    </Button>

                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                          className={
                            currentPage === page
                              ? "bg-gradient-to-r from-green-500 to-cyan-500 text-white border-0"
                              : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }
                        >
                          {page}
                        </Button>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Trending Posts */}
                  {trendingPosts.length > 0 && (
                    <motion.div
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-6">
                        <TrendingUp className="w-5 h-5 text-orange-500" />
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">Trending Now</h3>
                      </div>
                      <div className="space-y-4">
                        {trendingPosts.slice(0, 3).map((post, index) => (
                          <motion.div
                            key={post.id}
                            className="group cursor-pointer"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex gap-3">
                              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm line-clamp-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                  {post.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                                  <Eye className="w-3 h-3" />
                                  {post.views.toLocaleString()}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Categories */}
                  <motion.div
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Filter className="w-5 h-5 text-green-500" />
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">Categories</h3>
                    </div>
                    <div className="space-y-2">
                      {categories
                        .map((category) => {
                          const count = allBlogs?.filter((post) => post.category === category).length
                          return (
                            <motion.button
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${selectedCategory === category
                                ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                                : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{category}</span>
                                <Badge
                                  variant="outline"
                                  className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                                >
                                  {count}
                                </Badge>
                              </div>
                            </motion.button>
                          )
                        })}
                    </div>
                  </motion.div>

                  {/* Newsletter Signup */}
                  <motion.div
                    className="bg-gradient-to-br from-green-50 to-cyan-50 dark:from-green-900/20 dark:to-cyan-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Stay Updated</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Get the latest advertising insights delivered to your inbox
                      </p>
                      <div className="space-y-3">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                        />
                        <Button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white border-0">
                          Subscribe
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">No spam, unsubscribe anytime</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
