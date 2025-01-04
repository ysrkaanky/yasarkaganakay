import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"

export function HomepageCTA() {
  return (
    <Container>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <Heading>Let&apos;s Work Together - Get in Touch!</Heading>
            <Text variant="muted">
              I&apos;m always open to exciting projects and new opportunities.
              Let&apos;s discuss how we can collaborate!
            </Text>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button
                className="group relative w-full py-6 text-lg transition-all duration-200 hover:translate-y-[-2px]"
                size="lg"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
