'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, CheckCircle2, FileText, Zap, Users } from 'lucide-react'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { BenefitsSection } from '@/components/benefits-section'
import { Testimonials } from '@/components/testimonials-section'
import { CVTemplatesShowcase } from '@/components/cv-templates-showcase'
import { WorkHoursToast } from '@/components/work-hours-toast'

const heroSlides = [
  {
    title: 'Land Your Dream Job With a Winning CV',
    subtitle: 'Expert ATS-optimized CVs that get you noticed by top recruiters. Backed by 89% interview success rate.',
  },
  {
    title: 'Get Past Applicant Tracking Systems',
    subtitle: 'Strategic keyword placement and formatting that ensures recruiters see your best qualifications',
  },
  {
    title: 'Accelerate Your Career With Ernest Nii Quao',
    subtitle: '9,500+ professionals hired. 10+ years of expertise. Your success is our mission.',
  },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
            Ernest Nii Quao
          </div>
          <Link href="/submit">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Slider */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-40" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated slide content */}
            <div className="min-h-40">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === currentSlide
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 absolute'
                  }`}
                >
                  <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 justify-center mb-12">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-muted'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/submit">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg"
              >
                Get Your Professional CV
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground">Professional CV writing that gets results</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Expert Writing',
                description: 'Our professional writers craft CVs that highlight your strengths and achievements.',
              },
              {
                icon: Zap,
                title: 'Fast Turnaround',
                description: 'Quick processing and delivery of your professionally written CV.',
              },
              {
                icon: Users,
                title: 'Industry Tailored',
                description: 'CVs customized for your specific industry and target roles.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Simple steps to get your professional CV</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { number: '1', title: 'Submit Information', desc: 'Fill your details or upload existing CV' },
              { number: '2', title: 'Provide Details', desc: 'Share your target role and preferences' },
              { number: '3', title: 'Expert Writing', desc: 'Our writers craft your perfect CV' },
              { number: '4', title: 'Receive CV', desc: 'Get your professional CV instantly' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-background border border-border rounded-xl p-6 text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-accent/30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What You Get</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              'ATS-optimized CV format for applicant tracking systems',
              'Tailored content for your target industry and role',
              'Professional formatting and design',
              'Strategic keyword placement',
              'Achievement-focused descriptions',
              'LinkedIn profile optimization recommendations',
            ].map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent mt-1" />
                </div>
                <p className="text-foreground text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* CV Templates */}
      <CVTemplatesShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Transform Your CV?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your journey to landing more interviews today.
          </p>
          <Link href="/submit">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-lg"
            >
              Get Started Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent mb-4">
                Ernest Nii Quao
              </div>
              <p className="text-muted-foreground">ATS CV Writing & LinkedIn Optimization Expert</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Service</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/submit" className="hover:text-accent transition">Submit CV</Link></li>
                <li><Link href="/submit" className="hover:text-accent transition">Fill Form</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-muted-foreground">
                WhatsApp: <a href="https://wa.me/233543662424" className="hover:text-accent transition">+233 54 366 2424</a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quality</h4>
              <p className="text-muted-foreground">100% professional writing</p>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground">
              &copy; 2026 Ernest Nii Quao. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />

      {/* Work Hours Toast */}
      <WorkHoursToast />
    </div>
  )
}
