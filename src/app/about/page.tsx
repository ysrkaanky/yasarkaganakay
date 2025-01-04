import { AboutFunFacts, AboutHero, AboutJourney } from "@/components/about"
export const metadata = {
  title: "About Kagan - Web Developer",
  description:
    "Get to know Kagan, a passionate frontend developer with 4 years of experience.",
  keywords: "about Kagan, web developer, frontend developer, skills",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutJourney />
      <AboutFunFacts />
    </>
  )
}
