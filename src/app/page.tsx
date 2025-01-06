import {
  HomepageAbout,
  HomepageCTA,
  HomepageHero,
  HomepageProjects,
  HomepageServices,
  HomepageWorkflow,
} from "@/components/homepage"
import { Metadata } from "next"

export const metadata = {
  title: "Kagan's Portfolio - Web Developer",
  description:
    "Explore Kagan's portfolio showcasing web development skills, projects, and services.",
  keywords: "web developer portfolio, Kagan, frontend developer, projects",
} satisfies Metadata

export default function Home() {
  return (
    <>
      <HomepageHero />
      <HomepageAbout />
      <HomepageProjects />
      <HomepageServices />
      <HomepageWorkflow />
      <HomepageCTA />
    </>
  )
}
