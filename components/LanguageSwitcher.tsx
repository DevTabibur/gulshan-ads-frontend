"use client"

import { useState } from "react"
import { useLanguage } from "../hooks/useLanguage"

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <span className="text-lg">{currentLang?.flag}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{currentLang?.code.toUpperCase()}</span>
        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 min-w-[150px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code)
                setIsOpen(false)
              }}
              className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
