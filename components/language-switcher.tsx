"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = (lang: string) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm font-medium hover:text-gray-600 transition-colors relative group overflow-hidden"
        aria-label="Cambiar idioma"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase font-mono">{language}</span>
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-50 border border-gray-200">
          <div className="py-1">
            <button
              onClick={() => toggleLanguage("es")}
              className={cn(
                "flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors",
                language === "es" && "font-medium bg-gray-50",
              )}
            >
              <span className="mr-2">🇪🇸</span> Español
            </button>
            <button
              onClick={() => toggleLanguage("en")}
              className={cn(
                "flex items-center w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors",
                language === "en" && "font-medium bg-gray-50",
              )}
            >
              <span className="mr-2">🇺🇸</span> English
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
