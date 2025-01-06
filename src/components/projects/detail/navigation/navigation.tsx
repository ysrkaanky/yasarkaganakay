import { Button } from "@/components/ui/button"
import Container from "@/components/ui/custom/container"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import React from "react"

interface NavigationProps {
  slugs: {
    next: string
    prev: string
  }
}

export function ProjectDetailNavigation(props: NavigationProps) {
  return (
    <div className="border-t">
      <Container className="px-4 py-12">
        <div className="flex justify-between">
          <Button variant="ghost" asChild>
            <Link href={`/projects/${props.slugs.prev}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous Project
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href={`/projects/${props.slugs.next}`}>
              Next Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  )
}
