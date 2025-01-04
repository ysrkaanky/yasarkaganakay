import { IconType } from "react-icons"
import { FiMail } from "react-icons/fi"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"

interface SocialLink {
  name: string
  link: string
  icon: IconType
  linkFormatter?: (value: string) => string
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    link: "ysrkaanky@gmail.com",
    icon: FiMail,
    linkFormatter: (value) => `mailto:${value}`,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ysrkaanky/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/ysrkaanky",
    icon: FaGithub,
  },
  {
    name: "Phone Number",
    link: "+90 531 221 87 47",
    icon: FaPhone,
    linkFormatter: (value) => `tel:${value.replace(/\s/g, "")}`,
  },
]
