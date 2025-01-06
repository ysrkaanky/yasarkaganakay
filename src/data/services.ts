import { IconType } from "react-icons"
import { IoCodeSlashSharp } from "react-icons/io5"
import { RiSpeedUpLine, RiPaletteLine } from "react-icons/ri"
import { FiDatabase } from "react-icons/fi"
import { TbBlocks } from "react-icons/tb"
import { BsShare } from "react-icons/bs"

interface Services {
  icon: IconType
  title: string
  description: string
}

export const services: Services[] = [
  {
    icon: IoCodeSlashSharp,
    title: "Website Development",
    description:
      "Building responsive, modern websites that provide seamless user experiences across all devices. Focused on clean code and optimal performance.",
  },
  {
    icon: RiPaletteLine,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction while maintaining brand consistency.",
  },
  {
    icon: RiSpeedUpLine,
    title: "Performance Optimization",
    description:
      "Improving website speed and performance through code optimization, caching strategies, and modern best practices.",
  },
  {
    icon: FiDatabase,
    title: "API Integration",
    description:
      "Seamlessly connecting your website with third-party services and databases to extend functionality and automate processes.",
  },
  {
    icon: TbBlocks,
    title: "Custom CMS Solutions",
    description:
      "Developing tailored content management systems that make it easy to update and maintain your website content.",
  },
  {
    icon: BsShare,
    title: "Web Application Development",
    description:
      "Building complex web applications with modern frameworks and technologies to solve specific business needs.",
  },
]
