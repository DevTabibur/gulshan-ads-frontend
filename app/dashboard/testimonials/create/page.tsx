"use client"

import { useState, useRef } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Star, User } from "lucide-react"
import { useTheme } from "next-themes"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"
import Link from "next/link"
import { Breadcrumb } from "@/components/dashboard/Breadcrumb"
import { createTestimonial } from "@/app/api/auth/testimonials/testimonials.api"
import toast from "react-hot-toast"

const ratingOptions = [1, 2, 3, 4, 5]

const TestimonialSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  role: Yup.string().required("Role is required"),
  companyName: Yup.string().required("Company is required"),
  rating: Yup.number().min(1, "Select a rating").max(5).required("Rating is required"),
  description: Yup.string().min(10, "Testimonial must be at least 10 characters").required("Testimonial is required"),
  // imageUrl is not validated here, as it's handled separately
})

function CreateTestimonialContent() {
  const { theme } = useTheme()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Handle file upload and preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImageUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
      setFieldValue("imageUrl", file) // store the file object in formik
    } else {
      setImageFile(null)
      setImageUrl(null)
      setFieldValue("imageUrl", null)
    }
  }



  const handleSubmit = async (
    values: Record<string, any>,
    { resetForm, setSubmitting }: { resetForm: (values?: any) => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      console.log("values", values)
      const formData = new FormData()
      formData.append("fullName", values.fullName)
      formData.append("role", values.role)
      formData.append("companyName", values.companyName)
      formData.append("rating", values.rating)
      formData.append("description", values.description)
      if (imageFile) {
        formData.append("imageUrl", imageFile)
      }

      // Use the API to create the testimonial
      const result = await createTestimonial(formData)


      // console.log("API result", result)
      if (result?.statusCode === 200) {
        toast.success("Testimonials created successfully!")
        resetForm()
        setImageFile(null)
        setImageUrl(null)
      }else{
        toast.error("Something went wrong.")
      }
      

    } catch (err) {
      toast.error("Failed to submit testimonial");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  }

  // Custom classes for dark mode input and textarea
  const darkInputClass =
    "dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
  const lightInputClass =
    "bg-white/80 text-gray-900 placeholder-gray-500 border-gray-300 focus:border-green-500"
  const inputClass = `${lightInputClass} ${darkInputClass} dark:bg-gray-700`

  const darkTextareaClass =
    "dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
  const lightTextareaClass =
    "bg-white/80 text-gray-900 placeholder-gray-500 border-gray-300 focus:border-green-500"
  const textareaClass = `${lightTextareaClass} ${darkTextareaClass} transition dark:bg-gray-700`

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Testimonials</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Create client testimonials and feedback</p>
          </div>
          <Link href="/dashboard/testimonials">
            <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none">
              <Plus className="h-4 w-4 mr-2" />
              Manage Testimonial
            </Button>
          </Link>
        </div>

        <div className="my-4"> <Breadcrumb /></div>

        <Card
          className={`border border-gray-200 dark:border-gray-800 ${theme === "dark" ? "bg-gray-900" : "bg-white/90"
            } shadow-lg dark:shadow-none rounded-2xl`}
        >
          <CardContent className="pt-8 pb-8 px-6">
            <Formik
              initialValues={{
                fullName: "",
                role: "",
                companyName: "",
                imageUrl: null, // store the file object here
                rating: 0,
                description: "",
              }}
              validationSchema={TestimonialSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-8">
                  {/* Avatar Upload */}
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-400 dark:border-cyan-400 bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-md cursor-pointer group"
                      onClick={() => fileInputRef.current?.click()}
                      tabIndex={0}
                      style={{ outline: "none" }}
                      aria-label="Upload Author Image"
                    >
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="Preview"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <User className="w-12 h-12 text-gray-400 dark:text-gray-200 group-hover:text-green-400 group-hover:dark:text-cyan-400 transition-colors" />
                      )}
                      <input
                        id="avatarUpload"
                        name="avatarUpload"
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={e => handleFileChange(e, setFieldValue)}
                        tabIndex={-1}
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-xs text-center py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Upload
                      </div>
                    </div>
                    {imageFile && (
                      <div className="flex flex-col items-center mt-1">
                        <span className="text-xs text-gray-700 dark:text-gray-200 break-all text-center px-1">{imageFile.name}</span>
                        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                          <span>Size: {(imageFile.size / 1024).toFixed(1)} KB</span>
                          <span className="mx-1">|</span>
                          <span>Type: {imageFile.type}</span>
                        </div>
                      </div>
                    )}
                    {/* No ErrorMessage for imageUrl, as it's optional */}
                  </div>

                  {/* Name & Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-900 mb-1">
                        Name
                      </label>
                      <Field
                        as={Input}
                        id="fullName"
                        name="fullName"
                        placeholder="Author name"
                        className={inputClass}
                      />
                      <ErrorMessage name="fullName" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 dark:text-gray-900 mb-1">
                        Company
                      </label>
                      <Field
                        as={Input}
                        id="companyName"
                        name="companyName"
                        placeholder="e.g. TechNova"
                        className={inputClass}
                      />
                      <ErrorMessage name="companyName" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>

                  {/* Rating & Role Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-900 mb-1">
                        Rating
                      </label>
                      <div className="flex items-center gap-1.5">
                        {ratingOptions.map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setFieldValue("rating", star)}
                            className="focus:outline-none group"
                            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                          >
                            <Star
                              className={`w-8 h-8 transition-colors duration-150 ${values.rating >= star
                                ? "text-yellow-400 fill-yellow-400 drop-shadow"
                                : "text-gray-300 dark:text-gray-600 group-hover:text-yellow-300"
                                }`}
                              fill={values.rating >= star ? "currentColor" : "none"}
                            />
                          </button>
                        ))}
                      </div>
                      <ErrorMessage name="rating" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-semibold text-gray-700 dark:text-gray-900 mb-1">
                        Role
                      </label>
                      <Field
                        as={Input}
                        id="role"
                        name="role"
                        placeholder="e.g. Marketing Lead"
                        className={inputClass}
                      />
                      <ErrorMessage name="role" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>

                  {/* Testimonial description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-900 mb-1">
                      Testimonial
                    </label>
                    <Field
                      as={Textarea}
                      id="description"
                      name="description"
                      placeholder="Write your testimonial here..."
                      rows={5}
                      className={textareaClass}
                    />
                    <ErrorMessage name="description" component="div" className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-[#1FC77A] to-[#1CC8E3] hover:from-[#1FC77A] hover:to-[#1CC8E3] text-white dark:text-white shadow-lg dark:shadow-none px-8 py-2.5 rounded-xl font-semibold text-base transition"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Create Review"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default function CreateTestimonialPage() {
  return (
    <ProtectedRoute requiredRole="admin">
      <CreateTestimonialContent />
    </ProtectedRoute>
  )
}