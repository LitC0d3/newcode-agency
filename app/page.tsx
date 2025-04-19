"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Code,
  Cpu,
  Globe,
  Layers,
  MessageSquare,
  Users,
  Zap,
  Database,
  Shield,
  Smartphone,
  Monitor,
  Cloud,
  CheckCircle,
  ChevronRight,
  ArrowUpRight,
  Star,
  Circle,
  Square,
  Triangle,
  Plus,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { StartProjectDialog } from "@/components/start-project-dialog"
import { Toaster } from "@/components/toaster"
import { useToast } from "@/components/ui/use-toast"
import { submitContactForm } from "./actions"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [startDialogOpen, setStartDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Estado para el formulario de contacto
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: "",
    },
  })

  // Manejar cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
      errors: {
        ...prev.errors,
        [name]: "",
      },
    }))
  }

  // Validar formulario
  const validateForm = () => {
    let valid = true
    const errors = {
      name: "",
      email: "",
      message: "",
    }

    if (!formState.name.trim()) {
      errors.name = "El nombre es requerido"
      valid = false
    }

    if (!formState.email.trim()) {
      errors.email = "El email es requerido"
      valid = false
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formState.email)) {
        errors.email = "Email inválido"
        valid = false
      }
    }

    if (!formState.message.trim()) {
      errors.message = "El mensaje es requerido"
      valid = false
    } else if (formState.message.length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres"
      valid = false
    }

    setFormState((prev) => ({ ...prev, errors }))
    return valid
  }

  // Manejar envío del formulario de contacto
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrige los errores en el formulario.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm({}, formData)

      if (result.success) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarnos. Te responderemos pronto.",
        })

        // Resetear formulario
        setFormState({
          name: "",
          email: "",
          message: "",
          errors: {
            name: "",
            email: "",
            message: "",
          },
        })

        if (formRef.current) {
          formRef.current.reset()
        }
      } else if (result.errors) {
        // Mostrar errores
        const errorMessages = Object.values(result.errors).filter(Boolean).flat().join(", ")

        toast({
          title: "Error en el formulario",
          description: errorMessages || "Por favor, verifica los datos ingresados.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Servicios
  const services = [
    {
      title: t.services.items.webDev.title,
      description: t.services.items.webDev.description,
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: t.services.items.mobileDev.title,
      description: t.services.items.mobileDev.description,
      icon: <Smartphone className="h-5 w-5" />,
    },
    {
      title: t.services.items.softwareDev.title,
      description: t.services.items.softwareDev.description,
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: t.services.items.aiMl.title,
      description: t.services.items.aiMl.description,
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      title: t.services.items.cloudServices.title,
      description: t.services.items.cloudServices.description,
      icon: <Cloud className="h-5 w-5" />,
    },
    {
      title: t.services.items.consulting.title,
      description: t.services.items.consulting.description,
      icon: <MessageSquare className="h-5 w-5" />,
    },
  ]

  // Proyectos
  const projects = [
    {
      title: t.projects.items.ecommerce.title,
      description: t.projects.items.ecommerce.description,
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: <Monitor className="h-12 w-12 text-black/20" />,
    },
    {
      title: t.projects.items.healthApp.title,
      description: t.projects.items.healthApp.description,
      tags: ["React Native", "Firebase", "HIPAA Compliant"],
      icon: <Smartphone className="h-12 w-12 text-black/20" />,
    },
    {
      title: t.projects.items.financeDashboard.title,
      description: t.projects.items.financeDashboard.description,
      tags: ["Next.js", "D3.js", "PostgreSQL"],
      icon: <Database className="h-12 w-12 text-black/20" />,
    },
    {
      title: t.projects.items.aiGenerator.title,
      description: t.projects.items.aiGenerator.description,
      tags: ["Python", "TensorFlow", "OpenAI API"],
      icon: <Cpu className="h-12 w-12 text-black/20" />,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Elementos decorativos flotantes */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-8 border-black animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-40 h-40 border-8 border-black rotate-45 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 border-4 border-black rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-32 h-32 border-4 border-black rotate-12 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/2 w-24 h-24 border-2 border-black rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="relative">
              <Code className="h-6 w-6 relative z-10" />
              <div className="absolute -top-1 -left-1 w-8 h-8 bg-yellow-300 rounded-full -z-10 animate-pulse-slow"></div>
            </div>
            <span className="font-mono tracking-tighter">NewCode</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { key: "services", label: t.header.services },
              { key: "projects", label: t.header.projects },
              { key: "about", label: t.header.about },
              { key: "contact", label: t.header.contact },
            ].map((item, index) => (
              <Link
                key={item.key}
                href={`#${item.key.toLowerCase()}`}
                className="text-sm font-medium hover:text-gray-600 transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10 font-mono">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {
                    [
                      <Circle className="h-2 w-2" key="circle" />,
                      <Square className="h-2 w-2" key="square" />,
                      <Triangle className="h-2 w-2" key="triangle" />,
                      <Plus className="h-2 w-2" key="plus" />,
                    ][index]
                  }
                </span>
              </Link>
            ))}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </nav>
          <Button
            className="bg-black text-white hover:bg-gray-800 shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden group"
            onClick={() => setStartDialogOpen(true)}
          >
            <span className="relative z-10 font-mono">{t.header.start}</span>
            <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-black text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute top-3/4 left-1/2 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDuration: "5s", animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute top-2/3 left-2/3 w-1 h-1 bg-white rounded-full animate-ping"
                style={{ animationDuration: "3.5s", animationDelay: "1.5s" }}
              ></div>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
              <div className="w-[600px] h-[600px] border border-white/10 rounded-full absolute -top-[300px] -right-[300px]"></div>
              <div className="w-[400px] h-[400px] border border-white/10 rounded-full absolute -top-[200px] -right-[200px]"></div>
              <div className="w-[200px] h-[200px] border border-white/10 rounded-full absolute -top-[100px] -right-[100px]"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full overflow-hidden">
              <div className="w-[600px] h-[600px] border border-white/10 rounded-full absolute -bottom-[300px] -left-[300px]"></div>
              <div className="w-[400px] h-[400px] border border-white/10 rounded-full absolute -bottom-[200px] -left-[200px]"></div>
              <div className="w-[200px] h-[200px] border border-white/10 rounded-full absolute -bottom-[100px] -left-[100px]"></div>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]"></div>
          </div>

          <div className="container px-6 md:px-10 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm bg-white/5 backdrop-blur-sm shadow-sm">
                  <Zap className="mr-1 h-3 w-3 text-yellow-400" />
                  <span className="font-mono">{t.hero.tagline}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight font-mono relative">
                  <span className="absolute -top-6 -left-6 text-9xl opacity-10 font-serif">"</span>
                  {t.hero.title.part1}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-gradient">
                      {t.hero.title.highlight}
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      height="5"
                      viewBox="0 0 200 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 2.5C50 2.5 50 0 100 0C150 0 150 5 200 5H0V2.5Z" fill="white" fillOpacity="0.25" />
                    </svg>
                  </span>{" "}
                  {t.hero.title.part2}
                  <span className="absolute -bottom-6 -right-6 text-9xl opacity-10 font-serif">"</span>
                </h1>
                <p className="text-lg text-gray-400 md:text-xl max-w-[600px] font-light">{t.hero.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 hover:text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] relative overflow-hidden group"
                    onClick={() => {
                      const servicesSection = document.getElementById("servicios")
                      if (servicesSection) {
                        servicesSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <span className="relative z-10">{t.hero.services}</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-black relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-black/30 hover:bg-black/50 hover:text-white hover:border-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] relative overflow-hidden group"
                    onClick={() => {
                      const contactSection = document.getElementById("contacto")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    <span className="relative z-10">{t.hero.contactUs}</span>
                    <div className="absolute inset-0 border border-white/0 group-hover:border-white/50 transition-all duration-300 scale-90 group-hover:scale-100 rounded-md"></div>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg bg-gray-900 shadow-2xl group perspective">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:rotate-y-12">
                  <div className="grid grid-cols-3 gap-4 opacity-20">
                    {[Code, Database, Globe, Shield, Cpu, Cloud, Smartphone, Monitor, Layers].map((Icon, index) => (
                      <div key={index} className="relative">
                        <Icon className="h-16 w-16 text-white" strokeWidth={1} />
                        <div
                          className="absolute inset-0 bg-white/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"
                          style={{ transitionDelay: `${index * 100}ms` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent" />
                <div className="absolute bottom-6 right-6 bg-yellow-400 text-black rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5" />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute top-4 right-4 font-mono text-xs text-white/50">NewCode_v2.0</div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="py-20 bg-white relative">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-black/5 rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 border-8 border-black/5 rotate-45"></div>
            <svg
              className="absolute top-1/2 left-0 h-40 w-full"
              viewBox="0 0 1200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 50C200 50 200 0 400 0C600 0 600 100 800 100C1000 100 1000 50 1200 50"
                stroke="black"
                strokeOpacity="0.05"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="container px-6 md:px-10 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm shadow-sm">
                <Zap className="mr-1 h-3 w-3 text-yellow-500" />
                <span className="font-mono">{t.services.subtitle}</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono relative inline-block">
                  {t.services.title}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></div>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{t.services.description}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="flex flex-col space-y-3 border p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group relative overflow-hidden"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-md z-10 group-hover:scale-110 transition-transform duration-300 relative">
                    {service.icon}
                    <div className="absolute inset-0 bg-yellow-400 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold font-mono">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                  <div className="pt-2 mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-black hover:text-yellow-600 transition-colors duration-300 group-hover:underline"
                    >
                      <span className="relative">
                        {t.services.learnMore}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                      </span>
                      <ChevronRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Número decorativo */}
                  <div className="absolute bottom-3 right-3 font-mono text-4xl font-bold text-black/5 group-hover:text-black/10 transition-colors duration-300">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-20 bg-black text-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full"></div>
          </div>

          <div className="container px-6 md:px-10 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm bg-white/5 backdrop-blur-sm shadow-sm">
                  <Users className="mr-1 h-3 w-3 text-yellow-400" />
                  <span className="font-mono">{t.about.tagline}</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono">
                  {t.about.title.split("NewCode")[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-gradient">
                    NewCode
                  </span>
                  {t.about.title.split("NewCode")[1] || ""}
                </h2>
                <p className="text-gray-400">{t.about.description1}</p>
                <p className="text-gray-400">{t.about.description2}</p>
                <div className="space-y-3 pt-4">
                  {t.about.points.map((point, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="relative">
                        <CheckCircle className="h-5 w-5 mr-2 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-yellow-400/30 rounded-full transform scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 font-light">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="border-white text-white bg-black/30 hover:bg-black/50 hover:text-white hover:border-white mt-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] relative overflow-hidden group"
                >
                  <span className="relative z-10">{t.about.learnMore}</span>
                  <div className="absolute inset-0 bg-yellow-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 perspective">
                {aboutIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg relative group overflow-hidden transform"
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${index % 2 ? 5 : -5}deg) rotateX(${index < 2 ? 5 : -5}deg)`,
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
                    <div className="absolute bottom-3 right-3 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Elementos decorativos */}
                    <div className="absolute top-2 left-2 w-6 h-6 border border-white/10 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border border-white/10 rotate-45"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="absolute top-0 left-0 w-full h-20"
              viewBox="0 0 1200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1200 0L1200 100C1000 50 800 100 600 50C400 0 200 50 0 100L0 0Z"
                fill="black"
                fillOpacity="0.02"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-0 w-full h-20"
              viewBox="0 0 1200 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 100L1200 100L1200 0C1000 50 800 0 600 50C400 100 200 50 0 0L0 100Z"
                fill="black"
                fillOpacity="0.02"
              />
            </svg>
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-yellow-400/5 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-black/5 rounded-full"></div>
          </div>

          <div className="container px-6 md:px-10 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm shadow-sm">
                <Zap className="mr-1 h-3 w-3 text-yellow-500" />
                <span className="font-mono">{t.projects.tagline}</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono relative inline-block">
                  {t.projects.title}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></div>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{t.projects.description}</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-video w-full bg-gray-100 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="transform transition-transform duration-500 group-hover:scale-110 relative">
                      {project.icon}
                      <div className="absolute inset-0 bg-yellow-400/20 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>
                    <div className="absolute top-3 right-3 bg-yellow-400 text-black rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Star className="h-3 w-3" />
                    </div>

                    {/* Elementos decorativos */}
                    <div className="absolute top-3 left-3 flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-xs text-black/30">project_{index + 1}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold font-mono group-hover:text-black/80 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-500">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium transition-colors duration-300 hover:bg-yellow-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 mt-auto">
                      <Link
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-black hover:text-yellow-600 transition-colors duration-300 group"
                      >
                        <span className="relative">
                          {t.projects.viewProject}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
                        </span>
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 bg-white relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-full">
              <svg
                width="400"
                height="400"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 right-0 opacity-5"
              >
                <circle cx="200" cy="200" r="200" fill="black" />
                <circle cx="200" cy="200" r="150" fill="white" />
                <circle cx="200" cy="200" r="100" fill="black" />
                <circle cx="200" cy="200" r="50" fill="white" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full">
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 left-0 opacity-5"
              >
                <rect width="300" height="300" fill="black" />
                <rect x="50" y="50" width="200" height="200" fill="white" />
                <rect x="100" y="100" width="100" height="100" fill="black" />
              </svg>
            </div>
          </div>

          <div className="container px-6 md:px-10 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm shadow-sm">
                <MessageSquare className="mr-1 h-3 w-3 text-yellow-500" />
                <span className="font-mono">{t.contact.tagline}</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono relative inline-block">
                  {t.contact.title}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></div>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">{t.contact.description}</p>
              </div>
              <div className="w-full max-w-md space-y-4 mt-4">
                <form
                  ref={formRef}
                  onSubmit={handleContactSubmit}
                  className="space-y-4 bg-white p-6 rounded-lg shadow-lg relative"
                >
                  {/* Elementos decorativos */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400"></div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono"
                      >
                        {t.contact.form.name}
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`flex h-10 w-full rounded-md border ${
                          formState.errors.name ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300`}
                        placeholder={t.contact.form.namePlaceholder}
                      />
                      {formState.errors.name && <p className="text-xs text-red-500 mt-1">{formState.errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono"
                      >
                        {t.contact.form.email}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className={`flex h-10 w-full rounded-md border ${
                          formState.errors.email ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300`}
                        placeholder={t.contact.form.emailPlaceholder}
                      />
                      {formState.errors.email && <p className="text-xs text-red-500 mt-1">{formState.errors.email}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-mono"
                    >
                      {t.contact.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      className={`flex min-h-[120px] w-full rounded-md border ${
                        formState.errors.message ? "border-red-500" : "border-input"
                      } bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300`}
                      placeholder={t.contact.form.messagePlaceholder}
                    />
                    {formState.errors.message && (
                      <p className="text-xs text-red-500 mt-1">{formState.errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] relative overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span className="relative z-10">{t.contact.form.sending}</span>
                      </>
                    ) : (
                      <>
                        <span className="relative z-10 font-mono">{t.contact.form.send}</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-black text-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/5 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full">
            <svg width="100%" height="1" viewBox="0 0 1200 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.5H1200" stroke="white" strokeOpacity="0.1" strokeDasharray="8 8" />
            </svg>
          </div>
        </div>

        <div className="container py-10 px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="relative">
                  <Code className="h-5 w-5 relative z-10" />
                  <div className="absolute -top-1 -left-1 w-7 h-7 bg-yellow-400 rounded-full -z-10"></div>
                </div>
                <span className="font-mono tracking-tighter">NewCode</span>
              </div>
              <p className="text-sm text-gray-400">{t.footer.description}</p>
              <div className="flex space-x-4 pt-2">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Globe className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <MessageSquare className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                >
                  <Code className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium font-mono">{t.footer.company}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.about}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.careers}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{t.footer.blog}</span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium font-mono">{t.footer.services}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.webDev}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.mobileDev}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{t.footer.aiMl}</span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium font-mono">{t.footer.legal}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.terms}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.privacy}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {t.footer.cookies}
                    </span>
                    <ChevronRight className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-400 md:text-left font-mono">{t.footer.rights}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform"
              >
                <Code className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Diálogo para comenzar proyecto */}
      <StartProjectDialog open={startDialogOpen} onOpenChange={setStartDialogOpen} />

      {/* Sistema de notificaciones */}
      <Toaster />
    </div>
  )
}

const aboutIcons = [
  <Users key="users" className="h-12 w-12 text-white/60" />,
  <Cpu key="cpu" className="h-12 w-12 text-white/60" />,
  <Globe key="globe" className="h-12 w-12 text-white/60" />,
  <Layers key="layers" className="h-12 w-12 text-white/60" />,
]
