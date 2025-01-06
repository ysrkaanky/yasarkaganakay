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
        return (
          <Badge
            key={skill.name}
            variant="secondary"
            className="text-base font-light transition-colors"
          >
            <skill.icon className="mr-2" size={"1em"} />
            {skill.name}
          </Badge>
        )
      })}
    </div>
  )
}
