// Definición de tipos para las traducciones
export type Translation = {
  header: {
    services: string
    projects: string
    about: string
    contact: string
    start: string
  }
  hero: {
    tagline: string
    title: {
      part1: string
      highlight: string
      part2: string
    }
    description: string
    services: string
    contactUs: string
  }
  services: {
    title: string
    subtitle: string
    description: string
    learnMore: string
    items: {
      webDev: {
        title: string
        description: string
      }
      mobileDev: {
        title: string
        description: string
      }
      softwareDev: {
        title: string
        description: string
      }
      aiMl: {
        title: string
        description: string
      }
      cloudServices: {
        title: string
        description: string
      }
      consulting: {
        title: string
        description: string
      }
    }
  }
  about: {
    tagline: string
    title: string
    description1: string
    description2: string
    points: string[]
    learnMore: string
  }
  projects: {
    tagline: string
    title: string
    description: string
    viewProject: string
    items: {
      ecommerce: {
        title: string
        description: string
      }
      healthApp: {
        title: string
        description: string
      }
      financeDashboard: {
        title: string
        description: string
      }
      aiGenerator: {
        title: string
        description: string
      }
    }
  }
  contact: {
    tagline: string
    title: string
    description: string
    form: {
      name: string
      email: string
      message: string
      send: string
      sending: string
      namePlaceholder: string
      emailPlaceholder: string
      messagePlaceholder: string
    }
  }
  footer: {
    description: string
    company: string
    services: string
    legal: string
    about: string
    careers: string
    blog: string
    webDev: string
    mobileDev: string
    aiMl: string
    terms: string
    privacy: string
    cookies: string
    rights: string
  }
  startProject: {
    step1: {
      title: string
      description: string
      name: string
      email: string
      company: string
    }
    step2: {
      title: string
      description: string
      projectType: string
      budget: string
      timeline: string
      projectTypes: {
        select: string
        web: string
        mobile: string
        software: string
        ai: string
        cloud: string
        consulting: string
      }
      budgets: {
        select: string
        small: string
        medium: string
        large: string
        enterprise: string
      }
      timelines: {
        select: string
        urgent: string
        short: string
        medium: string
        long: string
      }
    }
    step3: {
      title: string
      description: string
      thankYou: string
      message: string
      close: string
    }
    buttons: {
      next: string
      back: string
      submit: string
      processing: string
    }
    validation: {
      requiredFields: string
      invalidEmail: string
    }
    success: {
      title: string
      message: string
    }
  }
}

// Traducciones en español
export const es: Translation = {
  header: {
    services: "Servicios",
    projects: "Proyectos",
    about: "Nosotros",
    contact: "Contacto",
    start: "Comenzar",
  },
  hero: {
    tagline: "Soluciones Innovadoras para Empresas Modernas",
    title: {
      part1: "Construimos ",
      highlight: "soluciones digitales",
      part2: " que impulsan el crecimiento",
    },
    description:
      "NewCode es una agencia de programación especializada en desarrollo de software personalizado, aplicaciones web y transformación digital.",
    services: "Nuestros Servicios",
    contactUs: "Contáctanos",
  },
  services: {
    title: "Nuestros Servicios",
    subtitle: "Lo Que Ofrecemos",
    description:
      "Ofrecemos una amplia gama de servicios de programación y desarrollo para ayudar a tu empresa a prosperar en el mundo digital.",
    learnMore: "Saber más",
    items: {
      webDev: {
        title: "Desarrollo Web",
        description: "Sitios web y aplicaciones web personalizadas construidas con las últimas tecnologías.",
      },
      mobileDev: {
        title: "Aplicaciones Móviles",
        description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
      },
      softwareDev: {
        title: "Desarrollo de Software",
        description: "Soluciones de software a medida adaptadas a las necesidades de tu empresa.",
      },
      aiMl: {
        title: "IA & Machine Learning",
        description: "Soluciones inteligentes que aprovechan el poder de la inteligencia artificial.",
      },
      cloudServices: {
        title: "Servicios en la Nube",
        description: "Infraestructura en la nube escalable y soluciones de implementación.",
      },
      consulting: {
        title: "Consultoría",
        description: "Asesoramiento experto sobre estrategia tecnológica e implementación.",
      },
    },
  },
  about: {
    tagline: "Nuestra Historia",
    title: "Sobre NewCode",
    description1:
      "Fundada en 2023, NewCode se ha establecido rápidamente como una agencia de programación líder, entregando soluciones innovadoras para empresas de todos los tamaños.",
    description2:
      "Nuestro equipo de desarrolladores, diseñadores y estrategas expertos trabajan juntos para crear software personalizado que resuelve problemas empresariales reales e impulsa el crecimiento.",
    points: [
      "Más de 10 años de experiencia combinada",
      "Equipo dedicado de desarrolladores expertos",
      "Metodología de desarrollo ágil",
      "Enfoque en calidad y rendimiento",
      "Soporte y mantenimiento continuo",
    ],
    learnMore: "Conoce Más Sobre Nosotros",
  },
  projects: {
    tagline: "Nuestro Trabajo",
    title: "Proyectos Destacados",
    description:
      "Echa un vistazo a algunos de nuestros trabajos recientes que muestran nuestra experiencia y capacidades.",
    viewProject: "Ver proyecto",
    items: {
      ecommerce: {
        title: "Plataforma de E-commerce",
        description:
          "Una plataforma de comercio electrónico completa con gestión de inventario y procesamiento de pagos.",
      },
      healthApp: {
        title: "App de Salud",
        description:
          "Una aplicación móvil para proveedores de atención médica para gestionar registros y citas de pacientes.",
      },
      financeDashboard: {
        title: "Dashboard Financiero",
        description: "Un panel interactivo para visualización y análisis de datos financieros.",
      },
      aiGenerator: {
        title: "Generador de Contenido IA",
        description:
          "Una herramienta impulsada por IA para generar contenido de marketing y publicaciones en redes sociales.",
      },
    },
  },
  contact: {
    tagline: "Contáctanos",
    title: "Ponte en Contacto",
    description: "¿Listo para comenzar tu próximo proyecto? Contáctanos hoy para una consulta gratuita.",
    form: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Ingresa tu mensaje",
    },
  },
  footer: {
    description: "Construyendo soluciones digitales innovadoras para empresas modernas.",
    company: "Empresa",
    services: "Servicios",
    legal: "Legal",
    about: "Nosotros",
    careers: "Carreras",
    blog: "Blog",
    webDev: "Desarrollo Web",
    mobileDev: "Aplicaciones Móviles",
    aiMl: "IA & Machine Learning",
    terms: "Términos",
    privacy: "Privacidad",
    cookies: "Cookies",
    rights: "© 2024 NewCode. Todos los derechos reservados.",
  },
  startProject: {
    step1: {
      title: "Comienza tu proyecto",
      description: "Cuéntanos sobre ti para comenzar tu proyecto con NewCode.",
      name: "Nombre completo",
      email: "Email",
      company: "Empresa",
    },
    step2: {
      title: "Detalles del proyecto",
      description: "Proporciona algunos detalles sobre el proyecto que tienes en mente.",
      projectType: "Tipo de proyecto",
      budget: "Presupuesto estimado",
      timeline: "Plazo de tiempo",
      projectTypes: {
        select: "Selecciona una opción",
        web: "Desarrollo Web",
        mobile: "Aplicación Móvil",
        software: "Software a Medida",
        ai: "IA & Machine Learning",
        cloud: "Servicios en la Nube",
        consulting: "Consultoría",
      },
      budgets: {
        select: "Selecciona una opción",
        small: "Menos de $5,000",
        medium: "$5,000 - $15,000",
        large: "$15,000 - $50,000",
        enterprise: "Más de $50,000",
      },
      timelines: {
        select: "Selecciona una opción",
        urgent: "Urgente (menos de 1 mes)",
        short: "Corto plazo (1-3 meses)",
        medium: "Medio plazo (3-6 meses)",
        long: "Largo plazo (más de 6 meses)",
      },
    },
    step3: {
      title: "Solicitud enviada",
      description: "Gracias por tu interés. Nos pondremos en contacto contigo pronto.",
      thankYou: "¡Gracias por tu solicitud!",
      message:
        "Hemos recibido los detalles de tu proyecto. Un miembro de nuestro equipo se pondrá en contacto contigo en las próximas 24-48 horas para discutir los siguientes pasos.",
      close: "Cerrar",
    },
    buttons: {
      next: "Siguiente",
      back: "Atrás",
      submit: "Enviar solicitud",
      processing: "Procesando...",
    },
    validation: {
      requiredFields: "Por favor completa todos los campos para continuar.",
      invalidEmail: "Por favor ingresa un email válido.",
    },
    success: {
      title: "¡Solicitud enviada!",
      message: "Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.",
    },
  },
}

// Traducciones en inglés
export const en: Translation = {
  header: {
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    start: "Get Started",
  },
  hero: {
    tagline: "Innovative Solutions for Modern Businesses",
    title: {
      part1: "We build ",
      highlight: "digital solutions",
      part2: " that drive growth",
    },
    description:
      "NewCode is a programming agency specializing in custom software development, web applications, and digital transformation.",
    services: "Our Services",
    contactUs: "Contact Us",
  },
  services: {
    title: "Our Services",
    subtitle: "What We Offer",
    description:
      "We offer a wide range of programming and development services to help your business thrive in the digital world.",
    learnMore: "Learn more",
    items: {
      webDev: {
        title: "Web Development",
        description: "Custom websites and web applications built with the latest technologies.",
      },
      mobileDev: {
        title: "Mobile Applications",
        description: "Native and cross-platform mobile applications for iOS and Android.",
      },
      softwareDev: {
        title: "Software Development",
        description: "Custom software solutions tailored to your business needs.",
      },
      aiMl: {
        title: "AI & Machine Learning",
        description: "Intelligent solutions that leverage the power of artificial intelligence.",
      },
      cloudServices: {
        title: "Cloud Services",
        description: "Scalable cloud infrastructure and deployment solutions.",
      },
      consulting: {
        title: "Consulting",
        description: "Expert advice on technology strategy and implementation.",
      },
    },
  },
  about: {
    tagline: "Our Story",
    title: "About NewCode",
    description1:
      "Founded in 2023, NewCode has quickly established itself as a leading programming agency, delivering innovative solutions for businesses of all sizes.",
    description2:
      "Our team of expert developers, designers, and strategists work together to create custom software that solves real business problems and drives growth.",
    points: [
      "Over 10 years of combined experience",
      "Dedicated team of expert developers",
      "Agile development methodology",
      "Focus on quality and performance",
      "Continuous support and maintenance",
    ],
    learnMore: "Learn More About Us",
  },
  projects: {
    tagline: "Our Work",
    title: "Featured Projects",
    description: "Take a look at some of our recent work that showcases our expertise and capabilities.",
    viewProject: "View project",
    items: {
      ecommerce: {
        title: "E-commerce Platform",
        description: "A complete e-commerce platform with inventory management and payment processing.",
      },
      healthApp: {
        title: "Health App",
        description: "A mobile application for healthcare providers to manage patient records and appointments.",
      },
      financeDashboard: {
        title: "Financial Dashboard",
        description: "An interactive dashboard for financial data visualization and analysis.",
      },
      aiGenerator: {
        title: "AI Content Generator",
        description: "An AI-powered tool for generating marketing content and social media posts.",
      },
    },
  },
  contact: {
    tagline: "Contact Us",
    title: "Get in Touch",
    description: "Ready to start your next project? Contact us today for a free consultation.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Enter your message",
    },
  },
  footer: {
    description: "Building innovative digital solutions for modern businesses.",
    company: "Company",
    services: "Services",
    legal: "Legal",
    about: "About",
    careers: "Careers",
    blog: "Blog",
    webDev: "Web Development",
    mobileDev: "Mobile Applications",
    aiMl: "AI & Machine Learning",
    terms: "Terms",
    privacy: "Privacy",
    cookies: "Cookies",
    rights: "© 2024 NewCode. All rights reserved.",
  },
  startProject: {
    step1: {
      title: "Start your project",
      description: "Tell us about yourself to start your project with NewCode.",
      name: "Full name",
      email: "Email",
      company: "Company",
    },
    step2: {
      title: "Project details",
      description: "Provide some details about the project you have in mind.",
      projectType: "Project type",
      budget: "Estimated budget",
      timeline: "Timeline",
      projectTypes: {
        select: "Select an option",
        web: "Web Development",
        mobile: "Mobile Application",
        software: "Custom Software",
        ai: "AI & Machine Learning",
        cloud: "Cloud Services",
        consulting: "Consulting",
      },
      budgets: {
        select: "Select an option",
        small: "Less than $5,000",
        medium: "$5,000 - $15,000",
        large: "$15,000 - $50,000",
        enterprise: "More than $50,000",
      },
      timelines: {
        select: "Select an option",
        urgent: "Urgent (less than 1 month)",
        short: "Short term (1-3 months)",
        medium: "Medium term (3-6 months)",
        long: "Long term (more than 6 months)",
      },
    },
    step3: {
      title: "Request submitted",
      description: "Thank you for your interest. We will contact you soon.",
      thankYou: "Thank you for your request!",
      message:
        "We have received your project details. A member of our team will contact you within the next 24-48 hours to discuss next steps.",
      close: "Close",
    },
    buttons: {
      next: "Next",
      back: "Back",
      submit: "Submit request",
      processing: "Processing...",
    },
    validation: {
      requiredFields: "Please complete all fields to continue.",
      invalidEmail: "Please enter a valid email.",
    },
    success: {
      title: "Request submitted!",
      message: "We have received your request. We will contact you soon.",
    },
  },
}
