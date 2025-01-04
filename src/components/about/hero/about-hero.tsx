import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import React from "react"

export function AboutHero() {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - 2021
  return (
    <Container>
      <Heading as="h1" className="mb-2 text-center">
        About Me
      </Heading>
      <Text
        maxWidth={"prose"}
        variant={"muted"}
        className="mx-auto text-center"
      >
        Hi, I’m Kağan – a passionate web developer with almost{" "}
        {yearsOfExperience} years of experience specializing in frontend
        technologies like ReactJS, Next.js, and Tailwind CSS. I enjoy crafting
        fast, responsive websites that provide seamless user experiences. My
        journey into web development began as a self-taught pursuit, and over
        the years, I’ve honed my skills through hands-on projects. I’m always
        looking for new challenges and opportunities to create engaging,
        high-performance websites that exceed client expectations.
      </Text>
    </Container>
  )
}
