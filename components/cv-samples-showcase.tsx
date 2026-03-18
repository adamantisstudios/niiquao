"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"
import Image from "next/image"

const cvSamples = [
  {
    id: 1,
    title: "CV Without Headshot",
    description: "Professional CV format without photo - ideal for international applications",
    image: "/cv-samples/cv-no-headshot.jpg",
    pdf: "/cv-samples/cv-no-headshot.pdf",
  },
  {
    id: 2,
    title: "CV With Headshot",
    description: "Complete CV with professional photo - perfect for local job applications",
    image: "/cv-samples/cv-with-headshot.jpg",
    pdf: "/cv-samples/cv-with-headshot.pdf",
  },
  {
    id: 3,
    title: "Minimal CV",
    description: "Clean and minimal design - highlights your skills and experience effectively",
    image: "/cv-samples/cv-minimal.jpg",
    pdf: "/cv-samples/cv-minimal.pdf",
  },
]

export function CVSamplesShowcase() {
  const handleViewSample = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank")
  }

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Sample CV Templates
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Explore our professionally designed CV templates and choose the style that best represents you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cvSamples.map((sample) => (
            <Card key={sample.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={sample.image || "/placeholder.svg"}
                    alt={sample.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{sample.title}</h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{sample.description}</p>
                  <Button onClick={() => handleViewSample(sample.pdf)} className="w-full" variant="default">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View PDF Sample
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}