"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star, User } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout"

const ratingOptions = [1, 2, 3, 4, 5]

const TestimonialSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  role: Yup.string().required("Role is required"),
  company: Yup.string().required("Company is required"),
  avatarUrl: Yup.string().url("Must be a valid URL").nullable(),
  rating: Yup.number().min(1, "Select a rating").max(5).required("Rating is required"),
  content: Yup.string().min(10, "Testimonial must be at least 10 characters").required("Testimonial is required"),
})

export default function CreateTestimonialPage() {
  const { theme } = useTheme()
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">Create Testimonial</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-400">Share your experience with us. Your testimonial will help others know more about our services.</p>
        <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-none">
          <CardContent className="pt-6">
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
                <Form className="space-y-6">
                  {/* Avatar Upload */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-green-400 dark:border-cyan-400 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {avatarPreview || values.avatarUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={avatarPreview || values.avatarUrl}
                          alt="Avatar Preview"
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <User className="w-10 h-10 text-gray-400 dark:text-gray-600" />
                      )}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <label
                        htmlFor="avatarUrl"
                        className="text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer"
                      >
                        Upload Author Image
                      </label>
                      <Input
                        id="avatarUrl"
                        name="avatarUrl"
                        type="url"
                        placeholder="Paste image URL"
                        className="w-56 text-sm bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                        value={values.avatarUrl}
                        onChange={e => {
                          setFieldValue("avatarUrl", e.target.value)
                          setAvatarPreview(e.target.value)
                        }}
                      />
                      <ErrorMessage name="avatarUrl" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>

                  {/* Name, Role, Company */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <Field
                        as={Input}
                        id="name"
                        name="name"
                        placeholder="Author name"
                        className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                      />
                      <ErrorMessage name="name" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Role
                      </label>
                      <Field
                        as={Input}
                        id="role"
                        name="role"
                        placeholder="e.g. Marketing Lead"
                        className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                      />
                      <ErrorMessage name="role" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Company
                      </label>
                      <Field
                        as={Input}
                        id="company"
                        name="company"
                        placeholder="e.g. TechNova"
                        className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                      />
                      <ErrorMessage name="company" component="div" className="text-xs text-red-500 mt-1" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {ratingOptions.map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFieldValue("rating", star)}
                          className="focus:outline-none"
                          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                        >
                          <Star
                            className={`w-7 h-7 transition-colors ${
                              values.rating >= star
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                            fill={values.rating >= star ? "currentColor" : "none"}
                          />
                        </button>
                      ))}
                    </div>
                    <ErrorMessage name="rating" component="div" className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Testimonial Content */}
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Testimonial
                    </label>
                    <Field
                      as={Textarea}
                      id="content"
                      name="content"
                      placeholder="Write your testimonial here..."
                      rows={4}
                      className="bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                    />
                    <ErrorMessage name="content" component="div" className="text-xs text-red-500 mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white dark:text-white shadow-md dark:shadow-none px-6 py-2 rounded-lg"
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