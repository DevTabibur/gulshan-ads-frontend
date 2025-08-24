"use client"

import { useState, useRef } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star, User } from "lucide-react"
import { useTheme } from "next-themes"
import { ProtectedRoute } from "@/components/auth/ProtectedRoute"

const ratingOptions = [1, 2, 3, 4, 5]

const TestimonialSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  role: Yup.string().required("Role is required"),
  company: Yup.string().required("Company is required"),
  avatarUrl: Yup.string().nullable(),
  rating: Yup.number().min(1, "Select a rating").max(5).required("Rating is required"),
  content: Yup.string().min(10, "Testimonial must be at least 10 characters").required("Testimonial is required"),
})

function CreateTestimonialContent() {
  const { theme } = useTheme()
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  // Helper to handle file upload and preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string)
        setFieldValue("avatarUrl", reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="mb-6">
        <nav className="mb-2 text-xs text-gray-400 dark:text-gray-500 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Testimonials</span>
          <span className="mx-1">/</span>
          <span className="text-green-500 dark:text-cyan-400 font-semibold">Create</span>
        </nav>
        <h1 className="text-3xl font-extrabold mb-1 text-gray-900 dark:text-white tracking-tight">Create Testimonial</h1>
        <p className="text-base text-gray-600 dark:text-gray-400">
          Share your experience with us. Your testimonial will help others know more about our services.
        </p>
      </div>
      <Card
        className={`border border-gray-200 dark:border-gray-800 ${
          theme === "dark" ? "bg-transparent" : "bg-white/90"
        } shadow-lg dark:shadow-none rounded-2xl`}
      >
        <CardContent className="pt-8 pb-8 px-6">
          <Formik
            initialValues={{
              name: "",
              role: "",
              company: "",
              avatarUrl: "",
              rating: 0,
              content: "",
            }}
            validationSchema={TestimonialSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true)
              // Simulate API call
              setTimeout(() => {
                console.log("Submitted values:", values)
                setSubmitting(false)
              }, 500)
            }}
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
                    {avatarPreview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={avatarPreview}
                        alt="Avatar Preview"
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <User className="w-12 h-12 text-gray-400 dark:text-gray-600 group-hover:text-green-400 group-hover:dark:text-cyan-400 transition-colors" />
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
                  <ErrorMessage name="avatarUrl" component="div" className="text-xs text-red-500 mt-1" />
                </div>

                {/* Name & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                      Name
                    </label>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      placeholder="Author name"
                      className="bg-white/80 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
                    />
                    <ErrorMessage name="name" component="div" className="text-xs text-red-500 mt-1" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                      Company
                    </label>
                    <Field
                      as={Input}
                      id="company"
                      name="company"
                      placeholder="e.g. TechNova"
                      className="bg-white/80 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
                    />
                    <ErrorMessage name="company" component="div" className="text-xs text-red-500 mt-1" />
                  </div>
                </div>

                {/* Rating & Role Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
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
                            className={`w-8 h-8 transition-colors duration-150 ${
                              values.rating >= star
                                ? "text-yellow-400 fill-yellow-400 drop-shadow"
                                : "text-gray-300 dark:text-gray-700 group-hover:text-yellow-300"
                            }`}
                            fill={values.rating >= star ? "currentColor" : "none"}
                          />
                        </button>
                      ))}
                    </div>
                    <ErrorMessage name="rating" component="div" className="text-xs text-red-500 mt-1" />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                      Role
                    </label>
                    <Field
                      as={Input}
                      id="role"
                      name="role"
                      placeholder="e.g. Marketing Lead"
                      className="bg-white/80 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
                    />
                    <ErrorMessage name="role" component="div" className="text-xs text-red-500 mt-1" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    Testimonial
                  </label>
                  <Field
                    as={Textarea}
                    id="content"
                    name="content"
                    placeholder="Write your testimonial here..."
                    rows={5}
                    className="bg-white/80 dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400 transition"
                  />
                  <ErrorMessage name="content" component="div" className="text-xs text-red-500 mt-1" />
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
  )
}

export default function CreateTestimonialPage() {
  return (
    <ProtectedRoute requiredRole="Admin">
      <CreateTestimonialContent />
    </ProtectedRoute>
  )
}