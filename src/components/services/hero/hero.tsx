import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import React from "react"

export function ServicesHero() {
  return (
    <Container className="relative overflow-hidden bg-gradient-to-t">
      <div className="container mx-auto px-4 py-24 text-center">
        <Heading as="h1">What I Can Do for You</Heading>
        <Text variant="muted" maxWidth={"prose"} className="mx-auto mt-4">
          I specialize in creating digital solutions that bring ideas to life,
          combining technical expertise with creative problem-solving.
        </Text>
      </div>
    </Container>
  )
}
