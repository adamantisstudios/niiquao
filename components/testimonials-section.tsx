import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Richard Bridge",
    role: "Software Engineer",
    location: "Accra, Ghana",
    image: "/professional-male-avatar.jpg",
    content:
      "Ernest Nii Quao transformed my CV completely. Within two weeks of using the new resume, I landed three interviews and got my dream job at a tech company in Accra!",
  },
  {
    name: "Kwasi Owusu Okyere",
    role: "Marketing Manager",
    location: "Kumasi, Ghana",
    image: "/african-professional-man-smiling.jpg",
    content:
      "The attention to detail was incredible. My new CV perfectly highlighted my marketing achievements and helped me secure a senior position. Worth every cedi!",
  },
  {
    name: "Chidi Okoro",
    role: "Data Analyst",
    location: "Lagos, Nigeria",
    image: "/professional-male-avatar-data.jpg",
    content:
      "Working with Ernest Nii Quao was seamless. The CV was delivered exactly on time and tailored perfectly to the data analytics field. Highly recommended!",
  },
  {
    name: "Fatima Diallo",
    role: "Financial Consultant",
    location: "London, UK",
    image: "/professional-female-avatar-finance.jpg",
    content:
      "Even from abroad, the service was excellent. My CV now stands out in the competitive London market. Ernest Nii Quao truly understands what employers look for.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background border-t border-border py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 p-8 bg-card rounded-lg border border-border/50">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <img
                src="/professional-african-man-headshot-business.jpg"
                alt="Ernest Nii Quao - Professional CV & LinkedIn Optimization Expert"
                className="h-32 w-32 rounded-full border-4 border-accent object-cover shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ernest Nii Quao</h3>
             <p className="text-lg font-semibold text-accent mb-3">
                  CV & LinkedIn Optimization Specialist | Career Transformation Expert
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 10 years of experience in recruitment and career development, Ernest Nii Quao has helped thousands transform their careers through professionally crafted, ATS-optimized CVs and strategic LinkedIn profiles. I combine deep industry insight with proven writing expertise to highlight your unique value to employers. My clients consistently land interviews and secure their dream roles across multiple industries and continents. Let's transform your career together.
                </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent"> 9,500+</div>
                  <p className="text-sm text-muted-foreground">CVs Delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">89%</div>
                  <p className="text-sm text-muted-foreground">Interview Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">10+ Years</div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Success Stories
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Real professionals who transformed their careers with winning CVs"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border hover:shadow-lg hover:border-accent/50 transition-all">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 leading-relaxed text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg?height=48&width=48&query=professional-avatar"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
