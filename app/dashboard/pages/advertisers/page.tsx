
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
import { useEffect, useState } from "react";
import { Breadcrumb } from "@/components/dashboard/Breadcrumb";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";
import { createOrUpdateChooseYourPlan, createOrUpdateHowWeGetYouStarted, createOrUpdateReadyToScaleYourBusiness, createOrUpdateScaleYourBusiness, createOrUpdateWhyAdvertisers, getAllAdvertisersPageSections } from "@/app/api/advertiserspage/advertisersPage.Api";


// Function to get initial values from fetched data
const getInitialValuesFromData = (sectionKey: string, pageData: any) => {
    if (!pageData) {
        // Return default values when no data is available
        switch (sectionKey) {
            case 'scale':
                return { title: '', description: '' };
            case 'why':
                return { title: '', description: '', cards: [{ title: '', description: '' }] };

            case 'plan':
                return { title: '', description: '', cards: [{ title: '', subTitle: "", description: '', points: [] }] };
            case 'getStarted':
                return { title: '', description: '', cards: [{ title: '', subTitle: "", description: '' }] };
            // case 'successStory':
            // case 'weWorkWith':
            //     return { title: '', description: '', cards: [{ title: '', description: '' }] };

            default:
                return {};
        }
    }

    const dataMapping: { [key: string]: string } = {
        scale: 'scaleYourBusiness',
        why: 'whyAdvertisers',
        plan: 'chooseYourPlan',
        getStarted: 'howWeGetYouStarted',
        readyToScale:'readyToScaleYourBusiness'
        // successStory: 'successStory',
        // about: 'aboutBiggaponBd',

       

    };

    const dataKey = dataMapping[sectionKey];
    // if (!dataKey || !pageData[dataKey]) {
    //     // Return default values if section data doesn't exist
    //     switch (sectionKey) {
    //         case 'promote':
    //         case 'scale':
    //             return { title: '', description: '' };
    //         case 'trusted':
    //             return { title: '', description: '', adminQuotte: '' };
    //         case 'multiPlatform':
    //         case 'successStory':
    //         case 'weWorkWith':
    //             return { title: '', description: '', cards: [{  title: '', description: '' }] };
    //         case 'getStarted':
    //         case 'howToGetStarted':
    //             return { title: '', description: '', cards: [{ title: '', description: '' }] };
    //         default:
    //             return {};
    //     }
    // }

    const sectionData = pageData[dataKey];

    // Handle different section structures
    switch (sectionKey) {
        case 'scale':
            return {
                title: String(sectionData.title || ''),
                description: String(sectionData.description || '')
            };
        case 'why':
            return {
                title: String(sectionData.title || ''),
                description: String(sectionData.description || ''),
                cards: Array.isArray(sectionData.cards) && sectionData.cards.length > 0
                    ? sectionData.cards.map((card: any) => ({
                        title: String(card.title || ''),
                        description: String(card.description || '')
                    }))
                    : [{ title: '', description: '' }]
            };
        case 'plan':
            return {
                title: String(sectionData.title || ''),
                description: String(sectionData.description || ''),
                cards: Array.isArray(sectionData.cards) && sectionData.cards.length > 0
                    ? sectionData.cards.map((card: any) => ({
                        title: String(card.title || ''),
                        subTitle: String(card.subTitle || ''),
                        description: String(card.description || ''),
                        // Always ensure points is an array of strings
                        points: Array.isArray(card.points)
                            ? card.points
                            : typeof card.points === "string"
                                ? [card.points]
                                : []
                    }))
                    : [{ title: '', description: '', points: [] }]
            };

        case 'getStarted':
            return {
                title: String(sectionData?.title || ''),
                description: String(sectionData?.description || ''),
                cards: Array.isArray(sectionData?.cards) && sectionData?.cards.length > 0
                    ? sectionData.cards.map((card: any) => ({
                        title: String(card?.title || ''),
                        subTitle: String(card?.subTitle || ''),
                        description: String(card?.description || '')
                    }))
                    : [{ title: '', subTitle: "", description: '' }]
            };
        case 'readyToScale':
            return {
                title: String(sectionData?.title || ''),
                description: String(sectionData?.description || ''),
               
            };


        // case 'trusted':
        //     return {
        //         title: String(sectionData.title || ''),
        //         description: String(sectionData.description || ''),
        //         cards: Array.isArray(sectionData.cards) && sectionData.cards.length > 0
        //             ? sectionData.cards.map((card: any) => ({
        //                 title: String(card.title || ''),
        //                 description: String(card.description || '')
        //             }))
        //             : [{ title: '', description: '' }]
        //     };

        // case 'multiPlatform':
        // case 'metaGateway':
        // case 'successStory':
        // case 'plan':
        // case 'weWorkWith':
        //     return {
        //         title: String(sectionData.title || ''),
        //         description: String(sectionData.description || ''),
        //         cards: Array.isArray(sectionData.cards) && sectionData.cards.length > 0
        //             ? sectionData.cards.map((card: any) => ({
        //                 title: String(card.title || ''),
        //                 description: String(card.description || '')
        //             }))
        //             : [{ title: '', description: '' }]
        //     };

        // case 'ourMission':


        default:
            return {};
    }
};
// Section configs for all 9 sections
const getSectionConfigs = (pageData: any) => [
    {
        key: "scale",
        label: "Scale  Your Business Section",
        fields: [
            { name: "title", label: "Title *", type: "text" },
            { name: "description", label: "Description *", type: "textarea" },
        ],
        initialValues: getInitialValuesFromData("scale", pageData),
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },
    {
        key: "why",
        label: "Why Advertisers Choose Section",
        fields: [
            { name: "title", label: "Title *", type: "text" },
            { name: "description", label: "Description *", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "title", label: "Card Title *", type: "text" },
                    { name: "description", label: "Card Description *", type: "textarea" },
                ],
            },
        ],
        initialValues: getInitialValuesFromData("why", pageData),
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },
    {
        key: "plan",
        label: "Choose your Growth Plan Section",
        fields: [
            { name: "title", label: "Title *", type: "text" },

            { name: "description", label: "Description *", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "title", label: "Card Title *", type: "text" },
                    { name: "subTitle", label: "Sub Title *", type: "text" },
                    {
                        name: "points",
                        label: "Card Points *",
                        type: "array", // must be an array of strings, not a string
                        itemType: "text", // each point is a text input
                        placeholder: 'Enter each point as a separate item'
                    },
                    { name: "description", label: "Card Description *", type: "textarea" },
                ],
            },
        ],
        initialValues: getInitialValuesFromData("plan", pageData),
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },

    {
        key: "getStarted",
        label: "How we get you started Section",
        fields: [
            { name: "title", label: "Title *", type: "text" },
            { name: "description", label: "Description *", type: "textarea" },
            {
                name: "cards",
                label: "Cards",
                type: "cards",
                cardFields: [
                    { name: "title", label: "Card Title *", type: "text" },
                    { name: "subTitle", label: "Card Sub Title *", type: "text" },
                    { name: "description", label: "Card Description *", type: "textarea" },
                ],
            },
        ],
        initialValues: getInitialValuesFromData("getStarted", pageData),
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },
    {
        key: "readyToScale",
        label: "Ready to Scale your business Section",
        fields: [
            { name: "title", label: "Title *", type: "text" },
            { name: "description", label: "Description *", type: "textarea" },

        ],
        initialValues: getInitialValuesFromData("readyToScale", pageData),
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
    },


    // {
    //     key: "successStory",
    //     label: "Success Story Section",
    //     fields: [
    //         { name: "title", label: "Title *", type: "text" },
    //         { name: "description", label: "Description *", type: "textarea" },
    //         {
    //             name: "cards",
    //             label: "Cards",
    //             type: "cards",
    //             cardFields: [
    //                 { name: "title", label: "Card Title *", type: "text" },
    //                 { name: "description", label: "Card Description *", type: "textarea" },
    //             ],
    //         },
    //     ],
    //     initialValues: getInitialValuesFromData("successStory", pageData),
    //     validationSchema: Yup.object({
    //         title: Yup.string().required("Title is required"),
    //         description: Yup.string().required("Description is required"),
    //         // cards: Yup.array()
    //         //     .of(
    //         //         Yup.object({
    //         //             title: Yup.string().required("Card title is required"),
    //         //             description: Yup.string().required("Card description is required"),
    //         //         })
    //         //     )
    //         //     .min(1, "At least one card is required"),
    //     }),
    // },

    
    {
        key: "clientSuccessStories",
        label: "Client Success Stories Section",
        fields: [],
        initialValues: {},
        validationSchema: Yup.object({}),
        noForm: true,
    },
];

// TypeScript types for better linting and safety
type FieldType = {
    name: string;
    label: string;
    type: "text" | "textarea" | "cards";
    cardFields?: FieldType[];
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
                                            size="sm"
                                            className={`
                                                mt-1
                                                bg-red-100 text-red-700
                                                hover:bg-red-200
                                                dark:bg-red-900 dark:text-red-200
                                                dark:hover:bg-red-800
                                                border border-red-200 dark:border-red-800
                                                transition-colors
                                            `}
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
                            size="sm"
                            className={`
                                mb-2
                                bg-gradient-to-r from-green-500 to-cyan-500
                                text-white
                                hover:from-green-600 hover:to-cyan-600
                                dark:from-green-400 dark:to-cyan-400
                                dark:hover:from-green-500 dark:hover:to-cyan-500
                                border-0
                                shadow
                                transition-colors
                            `}
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

const EditAdvertisersPage = () => {
    const { theme } = useTheme();
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const [advertisersPageData, setAdvertisersPageData] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await getAllAdvertisersPageSections();
                setAdvertisersPageData(res?.data);
            } catch (error) {
                // Optionally handle error
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Get section configs with fetched data
    const sectionConfigs = getSectionConfigs(advertisersPageData);


    const containerClass =
        "space-y-6 ";
    const darkInputClass =
        "dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-cyan-400"
    const lightInputClass =
        "bg-white/80 text-gray-900 placeholder-gray-500 border-gray-300 focus:border-green-500"
    const inputClass = `${lightInputClass} ${darkInputClass} dark:bg-gray-700`




    const handleSubmit = async (
        values: any,
        actions: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
        sectionKey: string
    ) => {
        const { setSubmitting, resetForm } = actions;

        console.log('values', values)
        console.log('sectionKey', sectionKey)
        try {
            let response = null;

            switch (sectionKey) {
                case 'scale':
                    response = await createOrUpdateScaleYourBusiness({
                        title: values.title,
                        description: values.description
                    });
                    break;

                case 'why':
                    response = await createOrUpdateWhyAdvertisers({
                        title: values.title,
                        description: values.description,
                        cards: values.cards
                    });
                    break;

                case 'plan':
                    response = await createOrUpdateChooseYourPlan({
                        title: values.title,
                        description: values.description,
                        cards: values.cards
                    });
                    break;
                case 'getStarted':
                    response = await createOrUpdateHowWeGetYouStarted({
                        title: values.title,
                        description: values.description,
                        cards: values.cards
                    });
                    break;

                // case 'successStory':
                //     response = await createOrUpdateMetaYourGateway({
                //         title: values.title,
                //         description: values.description,
                //         cards: values.cards
                //     });
                //     break;



                case 'readyToScale':
                    response = await createOrUpdateReadyToScaleYourBusiness({
                        title: values.title,
                        description: values.description,
                    });
                    break;

                // case 'clientSuccessStories':
                //     response = await createOrUpdateOurMission({
                //         title: values.title,
                //         description: values.description,
                //         cards: values.cards
                //     });
                //     break;



                default:
                    throw new Error(`Unknown section: ${sectionKey}`);
            }

            if (response) {
                // Show success message
                toast.success(`Successfully saved ${sectionKey} section!`)
            } else {
                throw new Error("Failed to save section");
            }

        } catch (error) {
            // Handle error
            toast.error(`Failed to save ${sectionKey} section. Please try again.`)
            console.error("Error saving section:", error);
        } finally {
            setSubmitting(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full">
                <Loader className="animate-spin" />
            </div>
        )
    }


    console.log("advertisersPageData", advertisersPageData)
    return (
        <DashboardLayout>
            <div className={containerClass}>
                {/* Page Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Advertisers Page</h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">Edit Advertisers Page Sections</p>
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
                                        // onSubmit={handleSubmit}
                                        onSubmit={(values, actions) => handleSubmit(values, actions, section.key)}

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
                                                        className={`
                                                            w-full sm:w-auto
                                                            px-6 py-2
                                                            rounded-md
                                                            font-semibold
                                                            transition-colors
                                                            bg-blue-600 text-white
                                                            hover:bg-blue-700
                                                            dark:bg-blue-500 dark:text-white
                                                            dark:hover:bg-blue-600
                                                            shadow
                                                            disabled:opacity-60
                                                        `}
                                                    >
                                                        {isSubmitting ? (
                                                            <span className="flex items-center gap-2">
                                                                <Loader className="animate-spin w-4 h-4" />
                                                                Saving...
                                                            </span>
                                                        ) : (
                                                            "Save Section"
                                                        )}
                                                    </Button>
                                                    <Button
                                                        type="reset"
                                                        variant="secondary"
                                                        disabled={isSubmitting}
                                                        className={`
                                                            w-full sm:w-auto
                                                            px-6 py-2
                                                            rounded-md
                                                            font-semibold
                                                            transition-colors
                                                            bg-gray-200 text-gray-800
                                                            hover:bg-gray-300
                                                            dark:bg-zinc-700 dark:text-gray-100
                                                            dark:hover:bg-zinc-600
                                                            shadow
                                                            disabled:opacity-60
                                                        `}
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

export default EditAdvertisersPage;