"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HomepageHero() {
  return (
    <Container tag="section" className="space-y-6 py-16 md:py-20 lg:py-32">
      <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Heading
          as="h1"
          variant="h1"
          className="text-4xl leading-none sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Full Stack Web Developer
        </Heading>

        <Text className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I build exceptional digital experiences that inspire and innovate.
          Focused on clean design and powerful functionality.
        </Text>
        <div className="space-x-4">
          <Button asChild className="gap-2">
            <Link href="/contact">
              Contact <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {/* <Button asChild className="gap-2">
            <Link href="/projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button> */}
        </div>
      </div>
    </Container>
  )
}
