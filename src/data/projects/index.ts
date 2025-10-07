import { StaticImageData } from "next/image"
import { projectImages } from "./images"
type Category =
  | "Portfolio"
  | "Fun Project"
  | "Web Application"
  | "Website"
  | "Utility Tool"
export const categories: Category[] = [
  "Fun Project",
  "Portfolio",
  "Web Application",
  "Utility Tool",
  "Website",
]

type ProjectFeature = {
  title: string
  description: string
}
export interface Project {
  title: string
  description: string
  detailDescription: string | string[]
  desktopImage: StaticImageData
  tags: string[]
  category: Category
  slug: string
  tagline: string
  client: string
  role: string
  technologies: string[]
  duration: string
  features: ProjectFeature[]
  mobileImage: StaticImageData
  liveUrl: string
  githubUrl?: string
}

// EMPTY
// {
//   title: "Murat Ülker's Portfolio",
//   description: "",
//   detailDescription:"",
//   coverImage: projectImages.murat_ulker.coverImage,
//   tags: ["HTML", "CSS", "Javascript"],
//   category: "Portfolio",
//   slug: "murat-ulker-portfolio",
//   tagline: "Portfolio of A Illustrator",
//   client: "Murat Ülker",
//   role: "Developer",
//   technologies: ["HTML", "CSS", "Javascript"],
//   duration: "1 Week",
//   features: [],
//   images: projectImages.murat_ulker.detailImages,
//   liveUrl: "https://muratulker.co",
// },

export const projects: Project[] = [
  {
    title: "iksor",
    description:"Shopify store for a premium honey brand, featuring custom design and seamless user experience.",
    desktopImage: projectImages.iksor.desktopImage,
    mobileImage: projectImages.iksor.mobileImage,
    detailDescription: [
      "iksor is a Shopify store designed for a premium honey brand, featuring a custom design and a seamless user experience.",
      "The website showcases the brand's products beautifully, with a focus on high-quality images and an intuitive layout.",
      "Built using Shopify's Liquid templating language, along with HTML, CSS, and JavaScript to create a responsive and engaging online store.",
      "The project involved close collaboration with the client to ensure the final product met their vision and requirements.",
      "The website is fully responsive, providing an optimal shopping experience on both desktop and mobile devices.",
    ],
    tags: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    category: "Website",
    slug: "iksor",
    tagline: "Premium Honey Brand Store",
    client: "iksor",
    role: "Developer",
    technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    duration: "12 Weeks",
    features: [
      {
        title: "Custom Design",
        description:
          "A unique and visually appealing design tailored to the brand's identity.",
      },
      {
        title: "Responsive Layout",
        description:
          "Ensures a seamless shopping experience across all devices.",
      },
      {
        title: "User-Friendly Navigation",
        description:
          "Easy-to-use navigation to help customers find products quickly.",
      },
    ],
    liveUrl: "https://iksor.com.tr/",
  },
  {
    title: "Neşeli Dişler",
    description:
      "A dental clinic website designed to provide information about treatments, make online appointments, and allow users to access patient registration forms. It focuses on families with children in the surrounding area.",
    desktopImage: projectImages.neseli_disler.desktopImage,
    mobileImage: projectImages.neseli_disler.mobileImage,
    detailDescription: [
      "Neşeli Dişler is a dental clinic website aimed at educating patients about various dental treatments, offering a platform for online appointment booking, and providing essential information about the clinic's services.",
      "The design was tailored to children and families, using pastel colors and soft corners to create a welcoming and friendly environment for younger patients. It also features a blog to provide educational content and updates.",
      "Technologies used for the website include Next.js, Tailwind CSS for styling, Node.js for backend functionality, and MySQL for managing patient data and appointments.",
      "An admin panel with authorization was developed for the clinic staff to manage content, track appointments, and handle patient registration securely.",
      "Although the website is still in development and has not gone live yet, it aims to streamline the clinic's patient management and improve the overall user experience.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
    category: "Website",
    slug: "neseli-disler",
    tagline: "Dental Clinic for Children and Families",
    client: "Neşeli Dişler",
    role: "Developer",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MySQL"],
    duration: "Ongoing",
    features: [
      {
        title: "Online Appointment System",
        description:
          "A feature that allows patients to book appointments online through a simple and easy-to-use interface.",
      },
      {
        title: "Blog and Educational Content",
        description:
          "A blog section to provide informative content related to dental health and clinic news.",
      },
      {
        title: "Patient Registration and Admin Panel",
        description:
          "An admin panel for clinic staff to manage patient registrations, appointments, and clinic content.",
      },
    ],
    liveUrl: "https://clinic-front-roan.vercel.app/",
  },

  {
    title: "Word Counter",
    description:
      "A simple tool that counts the number of words, characters, and removes whitespace from a given text.",
    desktopImage: projectImages.word_counter.desktopImage,
    mobileImage: projectImages.word_counter.mobileImage,
    detailDescription: [
      "The Word Counter is a straightforward tool designed to count words and characters in a text, as well as remove unnecessary whitespace. It is a simple, user-friendly tool aimed at helping writers and students.",
      "The interface is very basic, focusing solely on the functionality of counting and cleaning the input text. Users can type in their text or paste it, and by clicking the appropriate buttons, the tool shows the word and character count, along with the cleaned-up version of the text.",
      "Developed using basic HTML, CSS, and JavaScript, the tool doesn't rely on any external libraries and is built to perform efficiently with minimal complexity.",
      "This project was a personal tool and was not publicly released. It was developed in a short period of time as a practical exercise to understand text manipulation in JavaScript.",
    ],

    tags: ["HTML", "CSS", "JavaScript"],
    category: "Utility Tool",
    slug: "word-counter",
    tagline: "Count Words and Clean Text",
    client: "Personal",
    role: "Developer",
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "4 Hours",
    features: [
      {
        title: "Word & Character Count",
        description:
          "Counts the number of words and characters in a given text.",
      },
      {
        title: "Whitespace Removal",
        description: "Removes unnecessary whitespace from the input text.",
      },
    ],
    liveUrl: "https://ysrkaanky.github.io/WordCounter/",
    githubUrl: "https://github.com/ysrkaanky/WordCounter/",
  },
]
