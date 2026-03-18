"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CVTemplate {
  id: string
  title: string
  description: string
  image: string
  pdfSample: string
  features: string[]
}

const templates: CVTemplate[] = [
  {
    id: "with-headshot",
    title: "Resume/CV with Headshot",
    description:
      "Professional CV featuring a professional headshot for a personal touch. Perfect for roles where appearance matters like client-facing positions.",
    image: "/cv-with-headshot.jpg",
    pdfSample: "/cv-samples/cv-with-headshot.pdf",
    features: ["Professional Photo Integration", "ATS-Optimized", "Modern Design", "Easy Updates"],
  },
  {
    id: "no-headshot",
    title: "With No Headshot",
    description:
      "Clean and professional CV without a headshot. Ideal for technical roles and positions where a photo is not necessary or preferred.",
    image: "/cv-no-headshot.jpg",
    pdfSample: "/cv-samples/cv-no-headshot.pdf",
    features: ["Minimalist Design", "Content-Focused", "ATS-Friendly", "Quick Scanning"],
  },
  {
    id: "minimal",
    title: "Minimal Design Style",
    description:
      "Elegantly simple CV with minimal design elements. Perfect for creative professionals who want their work to speak for itself.",
    image: "/cv-minimal.jpg",
    pdfSample: "/cv-samples/cv-minimal.pdf",
    features: ["Clean Layout", "Modern Aesthetics", "Professional", "Versatile Format"],
  },
]

export function CVTemplatesShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4 text-foreground">
            Choose Your Perfect CV Template
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Select from our professionally designed CV templates. Each is tailored to showcase your qualifications effectively and impress recruiters.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full flex justify-center bg-muted">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.title}
                  className="w-full max-w-[300px] md:max-w-full h-auto object-contain"
                />

                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-2">
                  <Button variant="secondary" className="flex-1 gap-2" asChild>
                    <Link href="/order">
                      Order Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href={template.pdfSample} target="_blank" rel="noopener noreferrer">
                      View Sample <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{template.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{template.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mt-4">
                  <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Features</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {template.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order & Sample Buttons */}
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1 gap-2" asChild>
                    <Link href="/order">
                      Order Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" asChild>
                    <a href={template.pdfSample} target="_blank" rel="noopener noreferrer">
                      View Sample <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}