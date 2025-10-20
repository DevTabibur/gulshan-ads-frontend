"use client"

import { useState, useEffect } from "react"
import { languages } from "../data/languages"
import { translations } from "../data/translations"

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"
    setCurrentLanguage(savedLanguage)

    const language = languages.find((lang) => lang.code === savedLanguage)
    if (language) {
      document.documentElement.dir = language.dir
      document.documentElement.lang = language.code
    }
  }, [])

  const changeLanguage = (languageCode: string) => {
    setCurrentLanguage(languageCode)
    localStorage.setItem("language", languageCode)

    const language = languages.find((lang) => lang.code === languageCode)
    if (language) {
      document.documentElement.dir = language.dir
      document.documentElement.lang = language.code
    }
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[currentLanguage]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  const currentLang = languages.find((lang) => lang.code === currentLanguage)
  const isRTL = currentLang?.dir === "rtl"

  return { currentLanguage, changeLanguage, t, languages, isRTL }
}
