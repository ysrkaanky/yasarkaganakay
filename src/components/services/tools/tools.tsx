import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import SkillsBadges from "@/components/ui/custom/skills-badges"
import React from "react"

export function ServicesTools() {
  return (
    <Container className="">
      <div className="container mx-auto px-4">
        <Heading className="mb-8 text-center">Tools & Technologies</Heading>
        <div className="flex flex-wrap justify-center gap-2">
          <SkillsBadges />
        </div>
      </div>
    </Container>
  )
}
