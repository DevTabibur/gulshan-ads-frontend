
"use client"
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Formik, Form, Field, FieldArray, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Breadcrumb } from "@/components/dashboard/Breadcrumb";

// Section configs for all 9 sections
const sectionConfigs = [
    {
        key: "promote",
        label: "Promote Your Business Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
        ],
        initialValues: { title: "", description: "" },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },
    {
        key: "trusted",
        label: "Trusted By Leading Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            { name: "adminQuotte", label: "Admin Quote", type: "textarea" },
        ],
        initialValues: { title: "", description: "", adminQuotte: "" },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            adminQuotte: Yup.string().required("Admin Quote is required"),
        }),
    },
    {
        key: "multiPlatform",
        label: "Multi Platform Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "icon", label: "Icon", type: "text" },
                    { name: "title", label: "Card Title", type: "text" },
                    { name: "description", label: "Card Description", type: "textarea" },
                ],
            },
        ],
        initialValues: {
            title: "",
            description: "",
            cards: [{ icon: "", title: "", description: "" }],
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            cards: Yup.array()
                .of(
                    Yup.object({
                        icon: Yup.string().required("Icon is required"),
                        title: Yup.string().required("Card title is required"),
                        description: Yup.string().required("Card description is required"),
                    })
                )
                .min(1, "At least one card is required"),
        }),
    },
    {
        key: "metaGateway",
        label: "Meta: Your Gateway Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "icon", label: "Icon", type: "text" },
                    { name: "title", label: "Card Title", type: "text" },
                    { name: "description", label: "Card Description", type: "textarea" },
                ],
            },
        ],
        initialValues: {
            title: "",
            description: "",
            cards: [{ icon: "", title: "", description: "" }],
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            cards: Yup.array()
                .of(
                    Yup.object({
                        icon: Yup.string().required("Icon is required"),
                        title: Yup.string().required("Card title is required"),
                        description: Yup.string().required("Card description is required"),
                    })
                )
                .min(1, "At least one card is required"),
        }),
    },
    {
        key: "about",
        label: "About Biggapon Bd Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
        ],
        initialValues: { title: "", description: "" },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },
    {
        key: "weWorkWith",
        label: "We Work With Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "icon", label: "Icon", type: "text" },
                    { name: "title", label: "Card Title", type: "text" },
                    { name: "description", label: "Card Description", type: "textarea" },
                ],
            },
        ],
        initialValues: {
            title: "",
            description: "",
            cards: [{ icon: "", title: "", description: "" }],
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            cards: Yup.array()
                .of(
                    Yup.object({
                        icon: Yup.string().required("Icon is required"),
                        title: Yup.string().required("Card title is required"),
                        description: Yup.string().required("Card description is required"),
                    })
                )
                .min(1, "At least one card is required"),
        }),
    },
    {
        key: "ourMission",
        label: "Our Mission Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "title", label: "Card Title", type: "text" },
                    { name: "description", label: "Card Description", type: "textarea" },
                ],
            },
        ],
        initialValues: {
            title: "",
            description: "",
            cards: [{ title: "", description: "" }],
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            cards: Yup.array()
                .of(
                    Yup.object({
                        title: Yup.string().required("Card title is required"),
                        description: Yup.string().required("Card description is required"),
                    })
                )
                .min(1, "At least one card is required"),
        }),
    },
    {
        key: "clientSuccessStories",
        label: "Client Success Stories Section",
        fields: [],
        initialValues: {},
        validationSchema: Yup.object({}),
        noForm: true,
    },
    {
        key: "howToGetStarted",
        label: "How to Get Started Section",
        fields: [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "title", label: "Card Title", type: "text" },
                    { name: "description", label: "Card Description", type: "textarea" },
                ],
            },
        ],
        initialValues: {
            title: "",
            description: "",
            cards: [{ title: "", description: "" }],
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            cards: Yup.array()
                .of(
                    Yup.object({
                        title: Yup.string().required("Card title is required"),
                        description: Yup.string().required("Card description is required"),
                    })
                )
                .min(1, "At least one card is required"),
        }),
    },
];

// TypeScript types for better linting and safety
type FieldType = {
    name: string;
    label: string;
    type: "text" | "textarea" | "cards";
    cardFields?: FieldType[];
};

type SectionConfig = {
    key: string;
    label: string;
    fields: FieldType[];
    initialValues: any;
    validationSchema: any;
    noForm?: boolean;
};

function renderField(
    field: FieldType,
    values: any,
    errors: any,
    touched: any,
    arrayHelpers?: any
) {
    if (field.type === "text") {
        return (
            <div key={field.name} className="mb-4">
                <label
                    className="block mb-1 font-medium text-gray-800 dark:text-gray-200"
                    htmlFor={field.name}
                >
                    {field.label}
                </label>
                <Field
                    id={field.name}
                    name={field.name}
                    type="text"
                    className="w-full border rounded px-3 py-2 bg-white dark:bg-zinc-900 dark:border-zinc-700 text-gray-900 dark:text-gray-100"
                />
                <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm"
                />
            </div>
        );
    }
    if (field.type === "textarea") {
        return (
            <div key={field.name} className="mb-4">
                <label
                    className="block mb-1 font-medium text-gray-800 dark:text-gray-200"
                    htmlFor={field.name}
                >
                    {field.label}
                </label>
                <Field
                    as="textarea"
                    id={field.name}
                    name={field.name}
                    className="w-full border rounded px-3 py-2 bg-white dark:bg-zinc-900 dark:border-zinc-700 text-gray-900 dark:text-gray-100"
                />
                <ErrorMessage
                    name={field.name}
                    component="div"
                    className="text-red-500 text-sm"
                />
            </div>
        );
    }
    if (field.type === "cards" && field.cardFields) {
        return (
            <FieldArray
                key={field.name}
                name={field.name}
                render={(arrayHelpers: any) => (
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
                            {field.label}
                        </label>
                        {values[field.name] && values[field.name].length > 0 ? (
                            values[field.name].map(
                                (card: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="border rounded p-3 mb-2 bg-gray-50 dark:bg-zinc-800 dark:border-zinc-700"
                                    >
                                        {field.cardFields!.map((cardField: FieldType) => (
                                            <div key={cardField.name} className="mb-2">
                                                <label
                                                    className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
                                                    htmlFor={`${field.name}.${idx}.${cardField.name}`}
                                                >
                                                    {cardField.label}
                                                </label>
                                                <Field
                                                    id={`${field.name}.${idx}.${cardField.name}`}
                                                    name={`${field.name}.${idx}.${cardField.name}`}
                                                    type={cardField.type === "textarea" ? undefined : "text"}
                                                    as={cardField.type === "textarea" ? "textarea" : "input"}
                                                    className="w-full border rounded px-2 py-1 bg-white dark:bg-zinc-900 dark:border-zinc-700 text-gray-900 dark:text-gray-100"
                                                />
                                                <ErrorMessage
                                                    name={`${field.name}.${idx}.${cardField.name}`}
                                                    component="div"
                                                    className="text-red-500 text-xs"
                                                />
                                            </div>
                                        ))}
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="sm"
                                            className="mt-1"
                                            onClick={() => arrayHelpers.remove(idx)}
                                        >
                                            Remove Card
                                        </Button>
                                    </div>
                                )
                            )
                        ) : (
                            <div className="text-gray-500 dark:text-gray-400 mb-2">
                                No cards. Add one below.
                            </div>
                        )}
                        <Button
                            type="button"
                            variant="secondary"
                            size="sm"
                            className="mb-2"
                            onClick={() =>
                                arrayHelpers.push(
                                    field.cardFields!.reduce(
                                        (acc: any, f: FieldType) => ({ ...acc, [f.name]: "" }),
                                        {}
                                    )
                                )
                            }
                        >
                            Add Card
                        </Button>
                        <ErrorMessage
                            name={field.name}
                            component="div"
                            className="text-red-500 text-sm"
                        />
                    </div>
                )}
            />
        );
    }
    return null;
}

const EditHomePage = () => {
    const { theme } = useTheme();
    const [activeSection, setActiveSection] = useState<string | null>(null);

    // Responsive container classes
    // const containerClass =
    //     "w-full max-w-3xl mx-auto py-8 px-2 sm:px-4 md:px-6 lg:px-8";
    const containerClass =
        "space-y-6 ";
    // Custom classes for dark mode input and textarea
    const darkInputClass =
        "dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
    const lightInputClass =
        "bg-white/80 text-gray-900 placeholder-gray-500 border-gray-300 focus:border-green-500"
    const inputClass = `${lightInputClass} ${darkInputClass} dark:bg-gray-700`


    // Handle form submission for the Home Page sections
    const handleSubmit = async (
        values: any,
        actions: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        const { setSubmitting, resetForm } = actions;
        try {
            // TODO: Replace with actual API call, e.g.:
            // await updateHomePageSection(section.key, values);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Show a success message (replace with your toast/notification if needed)
            alert(`Saved section:\n${JSON.stringify(values, null, 2)}`);

            console.log("values", values)

            // Optionally reset the form
            // resetForm();
        } catch (error) {
            // Handle error (show toast, etc.)
            alert("Failed to save section. Please try again.");
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <DashboardLayout>
            <div className={containerClass}>
                {/* Page Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Home Page</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Edit Home Page Sections</p>
                    </div>

                </div>
                <div className="my-4"> <Breadcrumb /></div>


                <Accordion
                    type="single"
                    collapsible
                    className="rounded-lg border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm"
                >
                    {sectionConfigs.map((section, idx) => (
                        <AccordionItem
                            value={section.key}
                            key={section.key}
                            className="border-b border-gray-200 dark:border-zinc-700 "
                        >
                            <AccordionTrigger
                                className="px-4 py-3 text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                                onClick={() =>
                                    setActiveSection(
                                        activeSection === section.key ? null : section.key
                                    )
                                }
                            >
                                <span>{section.label}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 py-4 bg-gray-50 dark:bg-zinc-900">
                                {section.noForm ? (
                                    <div className="text-gray-500 dark:text-gray-400 italic">
                                        No form needed for this section right now.
                                    </div>
                                ) : (
                                    <Formik
                                        initialValues={section.initialValues}
                                        validationSchema={section.validationSchema}
                                        className={inputClass}
                                        onSubmit={handleSubmit}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            isSubmitting,
                                        }) => (
                                            <Form>
                                                {Array.isArray(section.fields) &&
                                                    section.fields.map((field: any) =>
                                                        renderField(
                                                            field,
                                                            values,
                                                            errors,
                                                            touched
                                                        )
                                                    )}
                                                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                                                    <Button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full sm:w-auto"
                                                    >
                                                        {isSubmitting ? "Saving..." : "Save Section"}
                                                    </Button>
                                                    <Button
                                                        type="reset"
                                                        variant="secondary"
                                                        disabled={isSubmitting}
                                                        className="w-full sm:w-auto"
                                                    >
                                                        Reset
                                                    </Button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                )}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </DashboardLayout>
    );
};

export default EditHomePage;