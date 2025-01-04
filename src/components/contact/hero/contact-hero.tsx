import React from "react"
import Image from "next/image"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import { socialLinks } from "@/data/social-links"
import Link from "next/link"
import { IconType } from "react-icons"
export function ContactHero() {
  return (
    <Container className="">
      <div className="mx-auto max-w-4xl">
        <Heading as="h1" className="mb-3 text-center">
          Get in Touch
        </Heading>

        <Text
          variant={"muted"}
          maxWidth={"prose"}
          className="mx-auto mb-12 text-center"
        >
          I&apos;m always open to discussing new projects or opportunities. Feel
          free to reach out if you have a question or want to collaborate.
        </Text>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-y-4">
            {socialLinks.map((socialLink) => {
              const { icon, link, name, linkFormatter } = socialLink
              return (
                <ContactItem
                  text={link.replace("https://", "").replace("http://", "")}
                  icon={icon}
                  key={socialLink.link}
                  link={linkFormatter ? linkFormatter(link) : link}
                />
              )
            })}
          </div>
          <div className="flex h-full items-center justify-center">
            <Image
              src="/binary.jpg"
              alt="Binary code"
              width={900}
              height={900}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function ContactItem({
  icon,
  text,
  link,
}: {
  icon: IconType
  text: string
  link: string
}) {
  const Icon = icon
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-3"
    >
      <Icon className="text-primary" />
      <Text as="span" variant={"muted"}>
        {text}
      </Text>
    </Link>
  )
}
