import { Card, CardContent } from "@/components/ui/card"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { funFacts } from "@/data/fun-facts"
import React from "react"

export function AboutFunFacts() {
  return (
    <Container>
      <Heading as="h2" variant="h3" className="mb-4">
        Fun Facts
      </Heading>
      <div className="grid gap-6 sm:grid-cols-2">
        {funFacts.map((fact) => {
          return (
            <Card key={fact.title}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <fact.icon className="h-8 w-8 text-primary" />
                  <div>
                    <Heading as="h4" className="mb-1 text-xl font-medium">
                      {fact.title}
                    </Heading>
                    <Text variant={"muted"} className="text-sm">
                      {fact.description}
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Container>
  )
}
