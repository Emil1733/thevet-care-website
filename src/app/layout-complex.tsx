import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Chicago Veterinary Clinic | Trusted Pet Care Since 2009 | Call (555) 123-4567",
  description: "Trusted veterinary care in Chicago. 15 years of experience serving Chicago pets. Emergency services available 24/7. Call (555) 123-4567 for same-day appointments.",
  keywords: ["veterinarian Chicago", "vet clinic Chicago", "emergency vet Chicago", "pet care Chicago", "animal hospital Chicago", "dog vet", "cat vet", "veterinary services"],
  authors: [{ name: "Chicago Veterinary Clinic" }],
  creator: "Chicago Veterinary Clinic",
  publisher: "Chicago Veterinary Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chicagovetclinic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chicago Veterinary Clinic | Trusted Pet Care",
    description: "Professional veterinary care for Chicago pets since 2009. Emergency services available 24/7.",
    url: "https://chicagovetclinic.com",
    siteName: "Chicago Veterinary Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chicago Veterinary Clinic - Professional Pet Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicago Veterinary Clinic | Trusted Pet Care",
    description: "Professional veterinary care for Chicago pets since 2009. Emergency services available 24/7.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Chicago Veterinary Clinic",
  image: "https://chicagovetclinic.com/images/clinic-exterior.jpg",
  "@id": "https://chicagovetclinic.com",
  url: "https://chicagovetclinic.com",
  telephone: "+15551234567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "60601",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.8781,
    longitude: -87.6298
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "247"
  },
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Veterinary Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Veterinary Care",
          description: "24/7 emergency veterinary services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wellness Examinations",
          description: "Comprehensive health checkups for pets"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dental Care",
          description: "Professional dental cleanings and oral health"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vaccinations",
          description: "Essential vaccines for pet health"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Surgery",
          description: "Safe surgical procedures"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostic Services",
          description: "X-rays, ultrasound, and laboratory testing"
        }
      }
    ]
  },
  founder: {
    "@type": "Person",
    name: "Dr. Sarah Johnson"
  },
  employees: [
    {
      "@type": "Person",
      name: "Dr. Sarah Johnson",
      jobTitle: "Lead Veterinarian"
    }
  ],
  areaServed: {
    "@type": "City",
    name: "Chicago",
    "@id": "https://en.wikipedia.org/wiki/Chicago"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}