import { CVSubmissionForm } from '@/components/cv-submission-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-background pt-20 pb-12">
      {/* Header */}
      <div className="border-b border-border bg-background/50 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-muted-foreground hover:text-foreground">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Submit Your CV Information</h1>
          <p className="text-lg text-muted-foreground">
            Share your career details with Ernest Nii Quao. Fill out your information or submit an existing CV, and we'll create a strategic, ATS-optimized resume that gets you interviews.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CVSubmissionForm />
      </div>

      {/* Footer Section */}
      <div className="border-t border-border bg-card/50 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-muted-foreground">
            Questions? Reach out to Ernest Nii Quao via WhatsApp:{' '}
            <a href="https://wa.me/233543662424" className="text-accent hover:underline font-semibold">
              +233 54 366 2424
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
