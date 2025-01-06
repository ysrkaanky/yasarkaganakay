"use client"

import { StaticImageData } from "next/image"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsGithub, BsLink } from "react-icons/bs"
import { imageDialogs } from "./image-dialog"
interface GalleryProps {
  desktopImage: StaticImageData
  mobileImage: StaticImageData
  projectTitle: string
  githubLink?: string
  liveLink: string
}

export default function ProjectDetailGallery({
  desktopImage,
  mobileImage,
  projectTitle,
  liveLink,
  githubLink,
}: GalleryProps) {
  return (
    <Container>
      <Heading className="mb-4">Featured Images</Heading>
      <Text variant="muted" className="mb-8">
        A deep dive into the project. Explore the desktop and mobile views of
        this responsive application, showcasing both the user interface and
        functionality.
      </Text>
      <div className="mx-auto mb-8 flex flex-col items-start gap-12 lg:flex-row lg:flex-wrap">
        <imageDialogs.desktop image={desktopImage} title={projectTitle} />
        <imageDialogs.mobile image={mobileImage} title={projectTitle} />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="min-w-[200px]">
          <Link href={liveLink} target="_blank" rel="noopener noreferrer">
            <BsLink className="mr-2 h-4 w-4" />
            View Live Project
          </Link>
        </Button>
        {githubLink && (
          <Button asChild size="lg" variant="outline" className="min-w-[200px]">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <BsGithub className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        )}
      </div>
    </Container>
  )
}
