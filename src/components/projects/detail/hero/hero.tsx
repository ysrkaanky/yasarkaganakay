import { Button } from "@/components/ui/button"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { Project } from "@/data/projects"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface HeroProps {
  project: Project
}

export function ProjectDetailHero({ project }: HeroProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
      <Image
        src={project.desktopImage}
        alt={project.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
      <Container>
        <div className="container absolute bottom-0 left-1/2 right-0 -translate-x-1/2 px-4 py-8">
          <Button asChild size={"sm"} className="mb-4">
            <Link href="/projects" className="inline-flex items-center text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <Heading as="h1" variant={"h2"}>
            {project.title}
          </Heading>
          <Text variant="muted" className="mt-4">
            {project.tagline}
          </Text>
        </div>
      </Container>
    </div>
  )
}
