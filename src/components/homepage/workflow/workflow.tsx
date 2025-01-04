import Container from "@/components/ui/custom/container"
import { Heading } from "@/components/ui/custom/heading"
import { Text } from "@/components/ui/custom/text"
import {
  Search,
  ClipboardList,
  Paintbrush,
  Code2,
  TestTube2,
  Rocket,
} from "lucide-react"

export function HomepageWorkflow() {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discovery",
      description:
        "Understanding your goals, target audience, and project requirements through in-depth consultation.",
    },
    {
      icon: <ClipboardList className="h-8 w-8" />,
      title: "Planning",
      description:
        "Creating detailed project roadmap, architecture planning, and setting clear milestones.",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Design",
      description:
        "Crafting intuitive user interfaces and engaging user experiences that align with your brand.",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development",
      description:
        "Building your solution using modern technologies and best practices for optimal performance.",
    },
    {
      icon: <TestTube2 className="h-8 w-8" />,
      title: "Testing",
      description:
        "Rigorous testing across devices and platforms to ensure a bug-free experience.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Delivery",
      description:
        "Deploying your project with careful attention to performance and security.",
    },
  ]

  return (
    <Container className="">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Heading>My Workflow</Heading>
            <Text maxWidth="prose" variant="muted">
              A systematic approach to bringing your ideas to life
            </Text>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center p-6 text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                  Step {index + 1}
                </div>
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {step.icon}
                </div>
                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

//  {/* Connector Lines */}
//  {index !== steps.length - 1 && (
//     <>
//       {/* Horizontal line (desktop) */}
//       <div className="absolute right-0 top-12 hidden h-[2px] w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent lg:block" />
//       {/* Vertical line (mobile) */}
//       <div className="absolute bottom-0 left-1/2 h-8 w-[2px] translate-y-full bg-gradient-to-b from-border to-transparent lg:hidden" />
//     </>
//   )}
