import { IconType } from "react-icons"
import { AiOutlineCoffee } from "react-icons/ai"
import { FaBed, FaMotorcycle } from "react-icons/fa6"
import { HiOutlineViewGridAdd } from "react-icons/hi"
import { FaCode } from "react-icons/fa"
import { CgPacman } from "react-icons/cg"

export interface FunFact {
  title: string
  description: string
  icon: IconType
}

export const funFacts: FunFact[] = [
  {
    title: "Coffee Enthusiast",
    description: "I run on coffee and clean code",
    icon: AiOutlineCoffee,
  },
  {
    title: "Task Eater",
    description:
      "I devour tasks as quickly as they come – one commit at a time.",
    icon: CgPacman,
  },
  {
    title: "Clean Code Advocate",
    description:
      "Code should be as elegant as it is functional – that's my mantra.",
    icon: FaCode,
  },

  {
    title: "Motorcycle Rider",
    description:
      "When I'm not coding, you’ll find me on two wheels, chasing the wind.",
    icon: FaMotorcycle,
  },
  {
    title: "Pixel Perfectionist",
    description:
      "I’m always chasing the perfect pixel – attention to detail is in my DNA.",
    icon: HiOutlineViewGridAdd,
  },
  {
    title: "Lazy Mode",
    description:
      "I avoid unnecessary effort no matter what. There's no room for overcomplication!",
    icon: FaBed,
  },
]
