"use client"

import Head from "next/head"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { TrustedBy } from "../components/TrustedBy"
import { PlatformShowcase } from "../components/PlatformShowcase"
import { MetaShowcase } from "../components/MetaShowcase"
import { TelegramShowcase } from "../components/TelegramShowcase"
import {  AboutGulshanAds } from "../components/AboutGulshanAds"
import { Testimonials } from "../components/Testimonials"
import { HowItWorks } from "../components/HowItWorks"
import { useLanguage } from "../hooks/useLanguage"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Head>
        <title>Gulshan Ads - Promote your business in Meta, TikTok and Telegram</title>
        <meta
          name="description"
          content="Find clients on booming platforms with Gulshan Ads — easy payment and ad launch in one interface"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <TrustedBy />
        <PlatformShowcase />
        <MetaShowcase />
        {/* <TelegramShowcase /> */}
        <AboutGulshanAds/>
        <Testimonials />
        <HowItWorks />
      </Layout>
    </>
  )
}
