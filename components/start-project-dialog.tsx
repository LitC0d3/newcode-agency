"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/contexts/language-context"

interface StartProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function StartProjectDialog({ open, onOpenChange }: StartProjectDialogProps) {
  const { t } = useLanguage()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step === 1) {
      // Validar campos del paso 1
      if (!formData.name || !formData.email || !formData.company) {
        toast({
          title: t.startProject.validation.requiredFields,
          description: t.startProject.validation.requiredFields,
          variant: "destructive",
        })
        return
      }

      // Validación básica de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        toast({
          title: t.startProject.validation.invalidEmail,
          description: t.startProject.validation.invalidEmail,
          variant: "destructive",
        })
        return
      }
    }

    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    // Validar campos del paso 2
    if (!formData.projectType || !formData.budget || !formData.timeline) {
      toast({
        title: t.startProject.validation.requiredFields,
        description: t.startProject.validation.requiredFields,
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    // Simulamos un envío de datos
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setLoading(false)
    setStep(3) // Paso de éxito

    toast({
      title: t.startProject.success.title,
      description: t.startProject.success.message,
    })
  }

  const handleClose = () => {
    // Resetear el formulario al cerrar
    if (step === 3) {
      setTimeout(() => {
        setStep(1)
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
        })
      }, 300)
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl flex items-center">
            {step === 1 && t.startProject.step1.title}
            {step === 2 && t.startProject.step2.title}
            {step === 3 && (
              <span className="flex items-center text-green-600">
                <Check className="mr-2 h-5 w-5" /> {t.startProject.step3.title}
              </span>
            )}
          </DialogTitle>
          <DialogDescription>
            {step === 1 && t.startProject.step1.description}
            {step === 2 && t.startProject.step2.description}
            {step === 3 && t.startProject.step3.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative">
          {/* Indicador de pasos */}
          {step < 3 && (
            <div className="flex justify-between mb-6">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? "bg-black text-white" : "bg-gray-200"}`}
                >
                  1
                </div>
                <div className={`h-1 w-10 ${step === 1 ? "bg-gray-300" : "bg-black"}`}></div>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? "bg-black text-white" : "bg-gray-200"}`}
                >
                  2
                </div>
              </div>
            </div>
          )}

          {/* Paso 1: Información personal */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium font-mono">
                  {t.startProject.step1.name}
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium font-mono">
                  {t.startProject.step1.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium font-mono">
                  {t.startProject.step1.company}
                </label>
                <input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>
          )}

          {/* Paso 2: Detalles del proyecto */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="projectType" className="text-sm font-medium font-mono">
                  {t.startProject.step2.projectType}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                >
                  <option value="">{t.startProject.step2.projectTypes.select}</option>
                  <option value="web">{t.startProject.step2.projectTypes.web}</option>
                  <option value="mobile">{t.startProject.step2.projectTypes.mobile}</option>
                  <option value="software">{t.startProject.step2.projectTypes.software}</option>
                  <option value="ai">{t.startProject.step2.projectTypes.ai}</option>
                  <option value="cloud">{t.startProject.step2.projectTypes.cloud}</option>
                  <option value="consulting">{t.startProject.step2.projectTypes.consulting}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium font-mono">
                  {t.startProject.step2.budget}
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                >
                  <option value="">{t.startProject.step2.budgets.select}</option>
                  <option value="small">{t.startProject.step2.budgets.small}</option>
                  <option value="medium">{t.startProject.step2.budgets.medium}</option>
                  <option value="large">{t.startProject.step2.budgets.large}</option>
                  <option value="enterprise">{t.startProject.step2.budgets.enterprise}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="timeline" className="text-sm font-medium font-mono">
                  {t.startProject.step2.timeline}
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                >
                  <option value="">{t.startProject.step2.timelines.select}</option>
                  <option value="urgent">{t.startProject.step2.timelines.urgent}</option>
                  <option value="short">{t.startProject.step2.timelines.short}</option>
                  <option value="medium">{t.startProject.step2.timelines.medium}</option>
                  <option value="long">{t.startProject.step2.timelines.long}</option>
                </select>
              </div>
            </div>
          )}

          {/* Paso 3: Confirmación */}
          {step === 3 && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium">{t.startProject.step3.thankYou}</h3>
              <p className="text-gray-500">{t.startProject.step3.message}</p>
              <div className="mt-4">
                <Button
                  onClick={handleClose}
                  className="bg-black text-white hover:bg-gray-800 relative overflow-hidden group"
                >
                  <span className="relative z-10">{t.startProject.step3.close}</span>
                  <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
              </div>
            </div>
          )}

          {/* Botones de navegación */}
          {step < 3 && (
            <div className="flex justify-between mt-6">
              {step > 1 ? (
                <Button variant="outline" onClick={handleBack} className="border-black text-black hover:bg-black/5">
                  {t.startProject.buttons.back}
                </Button>
              ) : (
                <div></div>
              )}
              {step === 1 ? (
                <Button
                  onClick={handleNext}
                  className="bg-black text-white hover:bg-gray-800 relative overflow-hidden group"
                >
                  <span className="relative z-10">{t.startProject.buttons.next}</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                  <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-black text-white hover:bg-gray-800 relative overflow-hidden group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>{t.startProject.buttons.processing}</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">{t.startProject.buttons.submit}</span>
                      <div className="absolute inset-0 bg-yellow-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
