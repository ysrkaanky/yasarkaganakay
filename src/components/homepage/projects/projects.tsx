import React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectItem } from "./project-item"

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
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <ProjectItem
              className="sm:w-[calc(50%_-_.5rem)] xl:w-[calc(33.33%_-_.675rem)]"
              key={i}
              nth={i}
            />
          )
        })}
      </div>
      <div className="flex justify-center">
        <Button variant="outline" asChild className="animate">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </Container>
  )
}
