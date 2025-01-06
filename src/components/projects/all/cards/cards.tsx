import Container from "@/components/ui/custom/container"
import { ProjectCards as ProjectCardsCommon } from "@/components/ui/custom/project-cards"
import { projects } from "@/data/projects"
import React from "react"

export function ProjectCards() {
  return (
    <Container>
      <ProjectCardsCommon projects={projects} />
    </Container>
  )
}
