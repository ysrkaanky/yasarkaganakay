import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Container from "@/components/ui/custom/container"
import SkillsBadges from "@/components/ui/custom/skills-badges"
import { socialLinks } from "@/data/social-links"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import Image from "next/image"

export function HomepageAbout() {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - 2021
  return (
    <Container className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Bio Card */}
          <Card className="relative overflow-hidden border-none bg-background dark:bg-primary/5">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src="/avatar.jpg"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="size-20 object-cover"
                  />
                </div>
                <div>
                  <Heading as="h3" className="text-2xl font-bold">
                    Yaşar Kağan AKAY
                  </Heading>
                  <Text className="text-primary">Full Stack Developer</Text>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <Text className="">
                  Hello! I&apos;m a passionate Full Stack Developer with{" "}
                  {yearsOfExperience} years of experience building web
                  applications. I specialize in creating responsive,
                  user-friendly interfaces and robust backend systems.
                </Text>
                <Text className="">
                  Currently, I&apos;m focused on building accessible,
                  human-centered developments and implementations at{" "}
                  <Link
                    href={"https://pedalcommander.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Pedal Commander
                  </Link>
                  . I enjoy turning complex problems into simple, beautiful, and
                  intuitive solutions.
                </Text>
              </div>

              <SkillsBadges />

              <div className="flex gap-4">
                {socialLinks.map((socialLink) => {
                  const { icon: Icon, link, name, linkFormatter } = socialLink
                  return (
                    <Link
                      key={name}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={linkFormatter ? linkFormatter(link) : link}
                      className="rounded-full p-2 transition-colors hover:bg-muted"
                      aria-label={name}
                    >
                      <Icon className="size-5" />
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Stats and Highlights */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-background dark:bg-primary/5">
                <CardContent className="p-6">
                  <Heading as="h3" className="mb-2 text-4xl font-bold">
                    {yearsOfExperience}
                  </Heading>
                  <Text className="">
                    Years of Frontend Development Experience
                  </Text>
                </CardContent>
              </Card>
              <Card className="bg-background dark:bg-primary/5">
                <CardContent className="p-6">
                  <Heading className="mb-2 text-4xl font-bold">10+</Heading>
                  <Text className="">Web Projects Delivered</Text>
                </CardContent>
              </Card>
              <Card className="bg-background dark:bg-primary/5">
                <CardContent className="p-6">
                  <Heading className="mb-2 text-4xl font-bold">5+</Heading>
                  <Text className="">Happy Clients</Text>
                </CardContent>
              </Card>
              <Card className="bg-background dark:bg-primary/5">
                <CardContent className="p-6">
                  <Heading className="mb-2 text-4xl font-bold">50+</Heading>
                  <Text className="">GitHub Contributions</Text>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-background dark:bg-primary/5">
              <CardContent className="p-6">
                <Heading as="h3" variant="h4" className="mb-4 font-semibold">
                  Career Highlights
                </Heading>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Integrated advanced Shopify CRM features for international
                    e-commerce
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Optimized website performance, achieving 95+ Lighthouse
                    scores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Designed and developed a portfolio site used by client
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Created a website with a dashboard, for a dental clinic
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  )
}
