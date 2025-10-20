"use client"

import { useState, useMemo, useEffect } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Trash2, Edit } from "lucide-react"
import { motion } from "framer-motion"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import { createBlogCategory, getAllBlogCategories, deleteBlogCategory, updateBlogCategory } from "@/app/api/blog/blog.api"
import toast from "react-hot-toast"
import { Breadcrumb } from "@/components/dashboard/Breadcrumb"

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Category name must be at least 3 characters")
        .max(30, "Category name must be less than 30 characters")
        .required("Category name is required"),
    description: Yup.string(),
    slug: Yup.string()
        .min(3, "Slug must be at least 3 characters")
        .max(50, "Slug must be less than 50 characters")
        .required("Slug is required"),
    status: Yup.string(),
})

const editValidationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Category name must be at least 3 characters")
        .max(30, "Category name must be less than 30 characters")
        .required("Category name is required"),
    description: Yup.string(),
    slug: Yup.string()
        .min(3, "Slug must be at least 3 characters")
        .max(50, "Slug must be less than 50 characters")
        .required("Slug is required"),
    status: Yup.string().oneOf(["active", "inactive"], "Invalid status"),
})

function Modal({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) {
    if (!open) return null
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    onClick={onClose}
                    aria-label="Close"
                    type="button"
                >
                    <span className="text-2xl">&times;</span>
                </button>
                {children}
            </div>
        </div>
    )
}

export default function BlogCategoriesPage() {
    const [categories, setCategories] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 5

    // Edit modal state
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [editCategory, setEditCategory] = useState<any | null>(null)
    const [editSubmitting, setEditSubmitting] = useState(false)

    // Fetch categories from API
    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            try {
                const res = await getAllBlogCategories()
                // Expecting res.data to be the array of categories
                if (res && res.data) {
                    // Map _id to id for consistency with rest of code
                    setCategories(
                        res.data.map((cat: any) => ({
                            id: cat._id,
                            name: cat.name,
                            description: cat.description,
                            slug: cat.slug,
                            status: cat.status,
                        }))
                    )
                } else {
                    setCategories([])
                }
            } catch (error) {
                setCategories([])
            } finally {
                setLoading(false)
            }
        }
        fetchCategories()
    }, [])

    // Filtered and paginated categories
    const filteredCategories = useMemo(() => {
        return categories.filter(
            (cat) =>
                cat?.name?.toLowerCase()?.includes(search.toLowerCase()) ||
                cat?.description?.toLowerCase()?.includes(search.toLowerCase())
        )
    }, [categories, search])

    const totalPages = Math.ceil(filteredCategories.length / pageSize)
    const paginatedCategories = useMemo(() => {
        const start = (currentPage - 1) * pageSize
        return filteredCategories.slice(start, start + pageSize)
    }, [filteredCategories, currentPage])

    const handleSubmit = async (values: any, { resetForm }: any) => {
        try {
            const newCategory = await createBlogCategory({
                name: values.name,
                description: values.description,
                slug: values.slug,
                status: values.status,
            })


            if (newCategory.statusCode === 200) {
                setCategories([
                    {
                        id: newCategory._id || newCategory.id,
                        name: newCategory.name,
                        description: newCategory.description,
                        slug: newCategory.slug,
                        status: newCategory.status,
                    },
                    ...categories,
                ])
                toast.success("Category created successfully")
                resetForm()
                setCurrentPage(1)
            } else {
                toast.error("Failed to create category")
                console.error("Failed to create category")
            }
        } catch (error) {
            toast.error("Error creating category")
            console.error("Error creating category:", error)
        }
    }

    const handleDelete = async (id: string) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            try {
                const result = await deleteBlogCategory(id)
                if (result) {
                    setCategories(categories.filter((cat) => cat.id !== id))
                } else {
                    alert("Failed to delete category.")
                }
            } catch (error) {
                alert("An error occurred while deleting the category.")
                console.error("Error deleting category:", error)
            }
        }
    }

    // Edit handlers
    const openEditModal = (cat: any) => {
        setEditCategory(cat)
        setEditModalOpen(true)
    }
    const closeEditModal = () => {
        setEditModalOpen(false)
        setEditCategory(null)
    }

    const handleEditSubmit = async (values: any, { setSubmitting }: any) => {
        setEditSubmitting(true)
        try {
            const updated = await updateBlogCategory(editCategory.id, {
                name: values.name,
                description: values.description,
                slug: values.slug,
                status: values.status,
            })
            console.log("updated", updated)
            if (updated.statusCode === 200) {
                setCategories((prev) =>
                    prev.map((cat) =>
                        cat.id === editCategory.id
                            ? {
                                ...cat,
                                name: values.name,
                                description: values.description,
                                slug: values.slug,
                                status: values.status,
                            }
                            : cat
                    )
                )
                toast.success("Edit Category successfully.")
                closeEditModal()
            } else {
                toast.error("Failed to update category.")
            }
        } catch (error) {
            toast.error("An error occurred while updating the category.")
            console.error("Error updating category:", error)
        } finally {
            setEditSubmitting(false)
            setSubmitting(false)
        }
    }

    // Responsive grid: 2 cols on md+, 1 col on mobile
    return (
        <DashboardLayout>
            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Categories</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Write and publish a new category</p>
                </div>
            </div>
            <div className="my-4"><Breadcrumb /></div>

            <div className="w-full px-2 py-4 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Categories Table */}
                    <motion.div
                        className="col-span-12 md:col-span-7"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <CardHeader className="flex flex-row items-center justify-between gap-2">
                                <CardTitle className="text-lg text-gray-900 dark:text-white">Blog Categories</CardTitle>
                                <div className="flex items-center gap-2">
                                    <div className="relative">
                                        <Input
                                            className="pl-9 pr-2 py-1 h-9 w-44 md:w-56 text-gray-900 dark:text-white bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                                            placeholder="Search categories..."
                                            value={search}
                                            onChange={(e) => {
                                                setSearch(e.target.value)
                                                setCurrentPage(1)
                                            }}
                                        />
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="overflow-x-auto p-0">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead>
                                        <tr className="bg-gray-100 dark:bg-gray-800">
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Slug
                                            </th>
                                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan={5} className="px-4 py-6 text-center text-gray-400 dark:text-gray-500">
                                                    Loading...
                                                </td>
                                            </tr>
                                        ) : paginatedCategories.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-4 py-6 text-center text-gray-400 dark:text-gray-500">
                                                    No categories found.
                                                </td>
                                            </tr>
                                        ) : (
                                            paginatedCategories.map((cat) => (
                                                <tr key={cat.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/60 transition">
                                                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{cat.name}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{cat.description}</td>
                                                    <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">{cat.slug}</td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <span className={cat.status === "active" ? "text-green-600 dark:text-green-400 font-semibold" : "text-gray-500 dark:text-gray-400 font-semibold"}>
                                                            {cat.status === "active" ? "Active" : "Inactive"}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-right flex justify-end gap-1">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            className="text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900"
                                                            onClick={() => openEditModal(cat)}
                                                            aria-label="Edit"
                                                        >
                                                            <Edit className="h-4 w-4" />
                                                        </Button>
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
                                            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
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
                                            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700"
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Edit Category Modal */}
                    <Modal open={editModalOpen} onClose={closeEditModal}>
                        {editCategory && (
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Edit Category</h2>
                                <Formik
                                    initialValues={{
                                        name: editCategory.name || "",
                                        description: editCategory.description || "",
                                        slug: editCategory.slug || "",
                                        status: editCategory.status || "active",
                                    }}
                                    validationSchema={editValidationSchema}
                                    onSubmit={handleEditSubmit}
                                    enableReinitialize
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="space-y-4">
                                            <div>
                                                <label htmlFor="edit-name" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Category Name
                                                </label>
                                                <Field
                                                    as={Input}
                                                    name="name"
                                                    id="edit-name"
                                                    placeholder="Enter category name"
                                                    className="w-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="edit-slug" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Slug
                                                </label>
                                                <Field
                                                    as={Input}
                                                    name="slug"
                                                    id="edit-slug"
                                                    placeholder="Enter slug"
                                                    className="w-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                />
                                                <ErrorMessage
                                                    name="slug"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="edit-description" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Description
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    name="description"
                                                    id="edit-description"
                                                    placeholder="Enter description"
                                                    className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                    rows={3}
                                                />
                                                <ErrorMessage
                                                    name="description"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="edit-status" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Status
                                                </label>
                                                <Field
                                                    as="select"
                                                    name="status"
                                                    id="edit-status"
                                                    className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                                                >
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </Field>
                                                <ErrorMessage
                                                    name="status"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={closeEditModal}
                                                    className="border border-gray-300 text-cyan-500 hover:text-white dark:border-gray-700"
                                                >
                                                    Cancel
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting || editSubmitting}
                                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none"
                                                >
                                                    {editSubmitting ? "Saving..." : "Save Changes"}
                                                </Button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        )}
                    </Modal>

                    {/* Create Category Form */}
                    <motion.div
                        className="col-span-12 md:col-span-5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-lg text-gray-900 dark:text-white">Create New Category</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Formik
                                    initialValues={{ name: "", description: "", slug: "", status: "active" }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="space-y-5">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Category Name
                                                </label>
                                                <Field
                                                    as={Input}
                                                    name="name"
                                                    id="name"
                                                    placeholder="Enter category name"
                                                    className="w-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                />
                                                <ErrorMessage
                                                    name="name"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="slug" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Slug
                                                </label>
                                                <Field
                                                    as={Input}
                                                    name="slug"
                                                    id="slug"
                                                    placeholder="Enter slug"
                                                    className="w-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                />
                                                <ErrorMessage
                                                    name="slug"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="description" className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
                                                    Description
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    name="description"
                                                    id="description"
                                                    placeholder="Enter description"
                                                    className="w-full p-4 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                                    rows={3}
                                                />
                                                <ErrorMessage
                                                    name="description"
                                                    component="div"
                                                    className="text-xs text-red-500 dark:text-red-400 mt-1"
                                                />
                                            </div>

                                            <div className="flex justify-end">
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none"
                                                >
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
