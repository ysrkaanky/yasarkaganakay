import {
  ProjectCards,
  ProjectsFilters,
  ProjectsHero,
  ProjectsCTA,
} from "@/components/projects/all"

// Sample project data - in a real app, this would come from a database or CMS

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      {/* <ProjectsFilters /> */}
      <ProjectCards />
      <ProjectsCTA />
    </>
  )
}
