"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Translation, en, es } from "@/lib/translations"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Intentar obtener el idioma guardado en localStorage, o usar 'es' por defecto
  const [language, setLanguage] = useState("es")
  const [translations, setTranslations] = useState<Translation>(es)

  useEffect(() => {
    // Verificar si estamos en el navegador antes de acceder a localStorage
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "es"
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Actualizar las traducciones cuando cambia el idioma
    setTranslations(language === "en" ? en : es)

    // Guardar el idioma en localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language)
    }
  }, [language])

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
