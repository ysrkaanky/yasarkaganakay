import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectItem } from "./project-item"
import { projects } from "@/data/projects"
import { ProjectCards } from "@/components/ui/custom/project-cards"

gsap.registerPlugin(ScrollTrigger)

export function HomepageProjects() {
  return (
    <Container tag="section" className="space-y-6 py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <Heading as="h2" className="">
          Latest Projects
        </Heading>

        <Text as="p" maxWidth={"prose"} variant={"muted"}>
          Explore my recent work and see how I help businesses achieve their
          goals through thoughtful design and development.
        </Text>
      </div>
      <div className="xl: mx-auto flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:justify-start">
        <ProjectCards projects={projects.slice(0, 3)} />
      </div>
      <div className="flex justify-center">
        <Button variant="outline" asChild className="animate">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </Container>
  )
}
