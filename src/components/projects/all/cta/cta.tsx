import { Button } from "@/components/ui/button"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import React from "react"

export function ProjectsCTA() {
  return (
    <Container>
      <div className="rounded-lg p-8 text-center">
        <Heading>Have a project in mind?</Heading>
        <Text variant={"muted"} className="mt-2">
          Let&apos;s work together to bring your ideas to life.
        </Text>
        <Button className="mt-6" size="lg">
          Contact Me
        </Button>
      </div>
    </Container>
  )
}
