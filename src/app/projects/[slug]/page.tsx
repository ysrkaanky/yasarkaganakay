import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import {
  ProjectDetailHero,
  ProjectDetailOverview,
  ProjectDetailFeatures,
  ProjectDetailNavigation,
} from "@/components/projects/detail"
import ProjectDetailGallery from "@/components/projects/detail/gallery/gallery"

// This would typically come from a database or CMS

export default async function ProjectPage(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const projectSlug = (await props.params).slug
  const projectIndex = projects.findIndex(
    (project) => project.slug === projectSlug,
  )
  const project = projects[projectIndex]
  if (!project) notFound()
  const nextProject = projects[(projectIndex + 1) % projects.length] || null
  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length] || null

  return (
    <div className="min-h-screen bg-background">
      <ProjectDetailHero project={project} />
      <ProjectDetailOverview project={project} />
      <ProjectDetailFeatures project={project} />
      <ProjectDetailGallery
        projectTitle={project.title}
        desktopImage={project.desktopImage}
        mobileImage={project.mobileImage}
        liveLink={project.liveUrl}
        githubLink={project.githubUrl}
      />
      <ProjectDetailNavigation
        slugs={{
          next: nextProject.slug,
          prev: previousProject.slug,
        }}
      />
    </div>
  )
}
