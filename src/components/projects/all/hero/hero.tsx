import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import React from "react"

export function ProjectsHero() {
  return (
    <Container>
      <Heading className="text-center">My Projects</Heading>
      <Text maxWidth="prose" className="mx-auto mt-4 text-center">
        Explore some of the projects I&apos;ve worked on, showcasing my
        expertise in web development, UI/UX design, and performance
        optimization.
      </Text>
    </Container>
  )
}
