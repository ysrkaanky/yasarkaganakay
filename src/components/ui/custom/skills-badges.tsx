import { skills } from "@/data/skills"
import React from "react"
import { Badge } from "../badge"
import { cn } from "@/lib/utils"

interface SkillsBadgesProps {
  className?: string
}

export default function SkillsBadges(props: SkillsBadgesProps) {
  return (
    <div className={cn("mb-6 flex flex-wrap gap-2", props.className)}>
      {skills.map((skill) => {
        const Icon = skill.icon
        return (
          <Badge
            key={skill.name}
            variant="secondary"
            className="bg-card text-base font-light transition-colors duration-1000 animate-in fade-in zoom-in"
          >
            <Icon className="mr-2" size={"1em"} />
            {skill.name}
          </Badge>
        )
      })}
    </div>
  )
}
