"use client"


import { useEffect, useState } from "react"
import { Hero } from "../Hero"
import { TrustedBy } from "../TrustedBy"
import { PlatformShowcase } from "../PlatformShowcase"
import { MetaShowcase } from "../MetaShowcase"
import { AboutGulshanAds } from "../AboutGulshanAds"
import { Testimonials } from "../Testimonials"
import { HowItWorks } from "../HowItWorks"
import { getAllTestimonials } from "@/app/api/auth/testimonials/testimonials.api"
import { Layout } from "../Layout"
import { getAllHomePageSections } from "@/app/api/homepage/homepage.Api"
import { Loader } from "lucide-react"

const HomePage = () => {
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [pageData, setPageData] = useState<any>(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const [testimonialsRes, pageDataRes] = await Promise.all([
                    getAllTestimonials(),
                    getAllHomePageSections()
                ])
                if (testimonialsRes?.statusCode === 200) {
                    setTestimonials(testimonialsRes?.data)
                }
                setPageData(pageDataRes?.data)
            } catch (error) {
                // Optionally handle error
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full">
                <Loader className="animate-spin" />
            </div>
        )
    }

    // console.log("pageData", pageData)
    return (
        <Layout>
            <Hero promoteYourBusiness={pageData?.promoteYourBusiness} />
            <TrustedBy trustedByLeading={pageData?.trustedByLeading} />
            <PlatformShowcase multiPlatform={pageData?.multiPlatform} />
            <MetaShowcase metaYourGateway={pageData?.metaYourGateway} />
            {/* <TelegramShowcase /> */}
            <AboutGulshanAds aboutBiggaponBd={pageData?.aboutBiggaponBd} weWorkWith={pageData?.weWorkWith} ourMission={pageData?.ourMission} />
            {/*  <Testimonials testimonials={testimonials} /> */}
            <HowItWorks howToGetStarted={pageData?.howToGetStarted} />
        </Layout>
    )
}

export default HomePage