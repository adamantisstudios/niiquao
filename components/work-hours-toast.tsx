"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Clock } from "lucide-react"

export function WorkHoursToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    if (isDismissed) return

    // Show the toast after 10 seconds
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 10000)

    // Auto-hide after 10 seconds of showing
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 20000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="mx-auto max-w-2xl p-4">
        <div className="relative rounded-lg border border-primary/20 bg-card/95 p-4 shadow-lg backdrop-blur-sm">
          <Button size="icon" variant="ghost" className="absolute right-2 top-2 h-6 w-6" onClick={handleDismiss}>
            <X className="h-4 w-4" />
          </Button>

          <div className="flex gap-3 pr-8">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
              <Clock className="h-5 w-5 text-blue-500" />
            </div>

            <div className="flex-1 space-y-1.5">
              <h4 className="text-sm font-semibold text-foreground">Working Hours</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground">9:00 AM - 6:00 PM GMT.</strong> Please understand that due to time zone differences, we may not be available to respond to your request immediately. Please wait for a responds from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}