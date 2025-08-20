"use client"

import { useState, useMemo } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Trash2, Edit } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const initialCategories = [
    { id: "1", name: "Technology", description: "Posts about technology trends and news" },
    { id: "2", name: "Platform Analysis", description: "In-depth analysis of advertising platforms" },
    { id: "3", name: "Strategy", description: "Marketing and advertising strategies" },
    { id: "4", name: "Case Studies", description: "Real-world case studies and results" },
    { id: "5", name: "Industry News", description: "Latest news in the industry" },
    { id: "6", name: "Tips & Tricks", description: "Helpful tips and tricks for marketers" },
    { id: "7", name: "Guides", description: "Step-by-step guides and tutorials" },
    { id: "8", name: "Interviews", description: "Interviews with industry experts" },
    { id: "9", name: "Events", description: "Upcoming and past events" },
    { id: "10", name: "Opinion", description: "Opinion pieces and thought leadership" },
]

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Category name must be at least 3 characters")
        .max(30, "Category name must be less than 30 characters")
        .required("Category name is required"),
    description: Yup.string()
        .min(10, "Description must be at least 10 characters")
        .max(100, "Description must be less than 100 characters")
        .required("Description is required"),
})

export default function BlogCategoriesPage() {
    const [categories, setCategories] = useState(initialCategories)
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 5

    // Filtered and paginated categories
    const filteredCategories = useMemo(() => {
        return categories.filter(
            (cat) =>
                cat.name.toLowerCase().includes(search.toLowerCase()) ||
                cat.description.toLowerCase().includes(search.toLowerCase())
        )
    }, [categories, search])

    const totalPages = Math.ceil(filteredCategories.length / pageSize)
    const paginatedCategories = useMemo(() => {
        const start = (currentPage - 1) * pageSize
        return filteredCategories.slice(start, start + pageSize)
    }, [filteredCategories, currentPage])

    const handleSubmit = (values: any, { resetForm }: any) => {
        // Print values to console
        console.log("Submitted values:", values)
        // Add new category to the list
        setCategories([
            ...categories,
            {
                id: (categories.length + 1).toString(),
                name: values.name,
                description: values.description,
            },
        ])
        resetForm()
        setCurrentPage(1)
    }

    const handleDelete = (id: string) => {
        setCategories(categories.filter((cat) => cat.id !== id))
    }

    // Responsive grid: 2 cols on md+, 1 col on mobile
    return (
        <DashboardLayout>
            <div className="w-full px-2 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Categories Table */}
                    <motion.div
                        className="col-span-12 md:col-span-7"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between gap-2">
                                <CardTitle className="text-lg">Blog Categories</CardTitle>
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <Input
                                            className="pl-9 pr-2 py-1 h-9 w-44 md:w-56"
                                            placeholder="Search categories..."
                                            value={search}
                                            onChange={(e) => {
                                                setSearch(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                        />
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="overflow-x-auto p-0">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead>
                                        <tr className="bg-muted">
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedCategories.length === 0 ? (
                                            <tr>
                                                <td colSpan={3} className="px-4 py-6 text-center text-gray-400">
                                                    No categories found.
                                                </td>
                                            </tr>
                                        ) : (
                                            paginatedCategories.map((cat) => (
                                                <tr key={cat.id} className="hover:bg-muted/50 transition">
                                                    <td className="px-4 py-3 font-medium">{cat.name}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{cat.description}</td>
                                                    <td className="px-4 py-3 text-right">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900"
                                                            onClick={() => handleDelete(cat.id)}
                                                            aria-label="Delete"
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        >
                                            Previous
                                        </Button>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            Page {currentPage} of {totalPages}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Create Category Form */}
                    <motion.div
                        className="col-span-12 md:col-span-5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Create New Category</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Formik
                                    initialValues={{ name: "", description: "" }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="space-y-5">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                                    Category Name
                                                </label>
                                                <Field
                                                    as={Input}
                                                    name="name"
                                                    id="name"
                                                    placeholder="Enter category name"
                                                    className="w-full"
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-xs text-red-500 mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="description" className="block text-sm font-medium mb-1">
                                                    Description
                                                </label>
                                                <Field
                                                    as={Input}
                                                    name="description"
                                                    id="description"
                                                    placeholder="Enter description"
                                                    className="w-full"
                                                />
                                                <ErrorMessage
                                                    name="description"
                                                    component="div"
                                                    className="text-xs text-red-500 mt-1"
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                <Button type="submit" disabled={isSubmitting}>
                                                    <Plus className="h-4 w-4 mr-2" />
                                                    Create Category
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </DashboardLayout>
    )
}
