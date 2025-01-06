import { Project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Heading } from "./heading"
import { Text } from "./text"
import { Badge } from "../badge"
import { Button } from "../button"
import { ChevronRight } from "lucide-react"

interface ProjectCardsProps {
  projects: Project[]
}

export function ProjectCards(props: ProjectCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {props.projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg"
        >
          <div className="aspect-video overflow-hidden rounded-md">
            <Image
              src={project.desktopImage}
              alt={project.title}
              width={project.desktopImage.width}
              height={project.desktopImage.height}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <Heading variant="h4" as="h3" className="">
              {project.title}
            </Heading>
            <Text variant="muted" className="mt-2 text-sm">
              {project.description}
            </Text>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} className="bg-primary" variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button className="mt-4 w-full" variant="outline">
              View Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Link>
      ))}
    </div>
  )
}
