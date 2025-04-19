"use server"

import { z } from "zod"

// Esquema de validación para el formulario de contacto
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

export type ContactFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Extraer datos del formulario
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validar datos
  const validatedFields = ContactFormSchema.safeParse({
    name,
    email,
    message,
  })

  // Si hay errores de validación, retornarlos
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  try {
    // Aquí iría la lógica para enviar el email o guardar en base de datos
    // Por ahora simulamos un retraso para demostrar la funcionalidad
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Retornar éxito
    return {
      success: true,
    }
  } catch (error) {
    // Manejar errores
    return {
      errors: {
        _form: ["Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."],
      },
    }
  }
}
