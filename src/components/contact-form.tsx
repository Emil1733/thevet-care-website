"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Appointment Requested!</h3>
          <p className="text-muted-foreground text-center">
            Thank you! We'll contact you within 24 hours to confirm your appointment.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Book an Appointment
        </CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you within 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="petName">Pet's Name *</Label>
              <Input id="petName" name="petName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ownerName">Your Name *</Label>
              <Input id="ownerName" name="ownerName" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">Service Needed *</Label>
            <Select name="service" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wellness">Wellness Exam</SelectItem>
                <SelectItem value="emergency">Emergency Care</SelectItem>
                <SelectItem value="dental">Dental Care</SelectItem>
                <SelectItem value="vaccination">Vaccinations</SelectItem>
                <SelectItem value="surgery">Surgery</SelectItem>
                <SelectItem value="grooming">Grooming</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Please describe your pet's condition or any specific concerns..."
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Appointment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}