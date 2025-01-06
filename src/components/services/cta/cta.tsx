import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"

export function ServicesCTA() {
  return (
    <Container className="">
      <div className="container mx-auto px-4 text-center">
        <Heading className="mb-4">Ready to Bring Your Vision to Life?</Heading>
        <Text className="mx-auto mb-8" maxWidth={"prose"}>
          I craft clean, high-performing websites and user interfaces designed
          to meet your unique needs. I’m here to help bring your vision to life.
        </Text>
        <Button size="lg" asChild className="bg-primary">
          <Link href="/contact">Contact Me Today</Link>
        </Button>
      </div>
    </Container>
  )
}
