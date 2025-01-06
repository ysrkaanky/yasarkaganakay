import { Button } from "@/components/ui/button"
import Container from "@/components/ui/custom/container"
import { categories } from "@/data/projects"
import React from "react"

export function ProjectsFilters() {
  return (
    <Container>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            className="rounded-full"
            size="sm"
          >
            {category}
          </Button>
        ))}
      </div>
    </Container>
  )
}
