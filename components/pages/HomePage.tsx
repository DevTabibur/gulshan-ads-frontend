"use client"


import { useState } from "react"
import { Hero } from "../Hero"
import { TrustedBy } from "../TrustedBy"
import { PlatformShowcase } from "../PlatformShowcase"
import { MetaShowcase } from "../MetaShowcase"
import { AboutGulshanAds } from "../AboutGulshanAds"
import { HowItWorks } from "../HowItWorks"
import { Layout } from "../Layout"


const HomePage = () => {
    
    return (
        <Layout>
            
            <Hero/>
            <TrustedBy/>
            <PlatformShowcase />
            <MetaShowcase  />
            {/* <TelegramShowcase /> */}
            <AboutGulshanAds  />
            {/*  <Testimonials testimonials={testimonials} /> */}
            <HowItWorks />
        </Layout>
    )
}

export default HomePage