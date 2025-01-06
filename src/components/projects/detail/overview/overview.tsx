import { Badge } from "@/components/ui/badge"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { Project } from "@/data/projects"
import React from "react"
import { castArray } from "@/lib/js-utils"

interface OverviewProps {
  project: Project
}

export function ProjectDetailOverview({ project }: OverviewProps) {
  return (
    <Container>
      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <Heading variant="h3" className="">
            Project Overview
          </Heading>
          {castArray(project.detailDescription).map((description, i) => {
            return (
              <Text variant="muted" key={i}>
                {description}
              </Text>
            )
          })}
        </div>
        <div className="space-y-4">
          <div>
            <Heading variant="h5" className="font-medium">
              Client
            </Heading>
            <Text variant="muted">{project.client}</Text>
          </div>
          <div>
            <Heading variant="h5" className="font-medium">
              Role
            </Heading>
            <Text variant="muted">{project.role}</Text>
          </div>
          <div>
            <Heading variant="h5" className="font-medium">
              Duration
            </Heading>
            <Text variant="muted">{project.duration}</Text>
          </div>
          <div>
            <Heading variant="h5" className="font-medium">
              Technologies
            </Heading>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
