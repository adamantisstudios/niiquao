import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Zap, Target, Users, Clock, FileText } from "lucide-react"

const benefits = [
  {
    icon: Target,
    title: "Industry-Specific",
    description: "Your CV is customized for your target role, industry, and employer expectations",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "Get your professional CV completed in under 3 hours, guaranteed",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    description: "Receive PDF and Word versions for easy sharing and editing",
  },
  {
    icon: Lightbulb,
    title: "Expert Writers",
    description: "Professional CV experts with knowledge across all career levels and industries",
  },
  {
    icon: Users,
    title: "Interview Coaching",
    description: "Combine with interview prep packages to master your interview preparation",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Reach us on WhatsApp anytime for questions or revisions",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Complete CV Solution</h2>
          <p className="text-lg text-muted-foreground">Everything you need to stand out and land your dream job interview</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <Card key={idx} className="border-border hover:shadow-lg transition-shadow hover:border-accent/50">
                <CardHeader>
                  <div className="mb-3 inline-flex rounded-lg bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
