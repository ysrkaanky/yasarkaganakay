import { IconType } from "react-icons"
import { DiMysql } from "react-icons/di"
import {
  FaNodeJs,
  FaReact,
  FaServer,
  FaGitAlt,
  FaShopify,
} from "react-icons/fa"
import { GrGraphQl } from "react-icons/gr"
import { MdOutlineDevices, MdPalette } from "react-icons/md"
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri"
import { SiTypescript } from "react-icons/si"

export interface Skill {
  name: string
  icon: IconType
}

export const skills: Skill[] = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Next.js",
    icon: RiNextjsLine,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssLine,
  },
  {
    name: "Rest APIs",
    icon: FaServer,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "UI/UX Design",
    icon: MdPalette,
  },
  {
    name: "Responsive Design",
    icon: MdOutlineDevices,
  },
  {
    name: "MySQL",
    icon: DiMysql,
  },
  {
    name: "GraphQL",
    icon: GrGraphQl,
  },
  {
    name: "Shopify",
    icon: FaShopify,
  },
]
