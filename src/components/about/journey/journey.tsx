import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import SkillsBadges from "@/components/ui/custom/skills-badges"
import { Text } from "@/components/ui/custom/text"

export function AboutJourney() {
  return (
    <Container className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
      <div className="xl:w-1/2">
        <Heading className="mb-4">My Journey</Heading>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Text>
                My journey into web development began with curiosity and
                determination. As a self-taught developer, I started learning to
                code through online resources, documentation, and countless
                hours of practice.
              </Text>
              <Text>
                What started as a hobby quickly turned into a passion as I
                discovered the joy of building things from scratch and solving
                complex problems. The endless possibilities of web development
                and the rapidly evolving tech landscape keep me excited and
                motivated to learn something new every day.
              </Text>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-card text-sm">
                  Self-taught
                </Badge>
                <Badge variant="secondary" className="bg-card text-sm">
                  Problem Solver
                </Badge>
                <Badge variant="secondary" className="bg-card text-sm">
                  Continuous Learner
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="xl:w-1/2">
        <Heading as="h2" variant="h3" className="mb-4">
          Technical Skills
        </Heading>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6">
              <SkillsBadges className="mb-0" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
}
