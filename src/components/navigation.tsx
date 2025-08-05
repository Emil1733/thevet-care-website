"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Calendar } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">VC</span>
          </div>
          <span className="font-bold text-xl">Chicago Vet Clinic</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="tel:+15551234567" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="#contact" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="tel:+15551234567" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call (555) 123-4567
                  </Link>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <Link href="#contact" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}