import { Code2, Layout, Palette, Search, Shield, Zap } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

export function HomepageServices() {
  const services = [
    {
      icon: <Layout className="h-12 w-12" />,
      title: "Website Development",
      description:
        "Custom websites built with modern frameworks and best practices for optimal performance.",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description:
        "Intuitive and engaging user interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Code2 className="h-12 w-12" />,
      title: "Full-Stack Development",
      description:
        "End-to-end solutions combining powerful backends with responsive frontends.",
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO Optimization",
      description:
        "Improve your site's visibility and ranking with modern SEO strategies.",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Security Solutions",
      description:
        "Implement robust security measures to protect your web applications.",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description:
        "Speed up your website with advanced optimization techniques.",
    },
  ]

  return (
    <Container className="">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Heading as="h2">What I Offer</Heading>
            <Text variant={"muted"} maxWidth={"prose"}>
              Comprehensive web development services tailored to your needs.
              From concept to deployment, I&apos;ve got you covered.
            </Text>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-slate-900/5" />
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          {/* <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href={"/contact"}>Get in Touch</Link>
          </Button> */}
        </div>
      </div>
    </Container>
  )
}
