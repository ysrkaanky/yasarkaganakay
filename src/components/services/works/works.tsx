import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { services } from "@/data/services"

export function ServicesWorks() {
  return (
    <Container className="">
      <Heading className="mb-8 text-center">Services I Provide</Heading>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:shadow-lg"
          >
            <CardContent className="p-6">
              <service.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  )
}
