import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { Project } from "@/data/projects"
import React from "react"

interface FeaturesProps {
  project: Project
}

export function ProjectDetailFeatures({ project }: FeaturesProps) {
  return (
    <Container>
      <Heading className="mb-8">Key Features</Heading>
      <div className="grid gap-6 md:grid-cols-3">
        {project.features.map((feature, index) => (
          <div key={index} className="rounded-lg border bg-card p-6">
            <Heading as="h3" variant="h5" className="font-semibold">
              {feature.title}
            </Heading>
            <Text variant="muted" className="mt-1.5">
              {feature.description}
            </Text>
          </div>
        ))}
      </div>
    </Container>
  )
}
