import React from "react"

import {
  ServicesHero,
  ServicesWorks,
  ServicesTools,
  ServicesCTA,
} from "@/components/services"
export const metadata = {
  title: "Services - Web Development by Kagan",
  description:
    "Discover web development services offered by Kagan, from frontend solutions to API integrations.",
  keywords:
    "web development services, frontend solutions, API integration, Kagan",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesWorks />
      <ServicesTools />
      <ServicesCTA />
    </>
  )
}
