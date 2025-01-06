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
    title: "Murat Ülker's Portfolio",
    description:
      "A portfolio website designed to showcase Murat Ülker's extensive collection of illustration works. The website features a clean, custom theme with smooth animations to create a dynamic and engaging user experience.",
    desktopImage: projectImages.murat_ulker.desktopImage,
    mobileImage: projectImages.murat_ulker.mobileImage,
    detailDescription: [
      "Murat Ülker's portfolio is a comprehensive online showcase of his illustration work, built to reflect his artistic vision and style. The primary goal was to create a visually engaging platform that would effectively highlight his extensive collection of artworks.",
      "The website opens with smooth animations that set the tone for an immersive experience, capturing visitors' attention right from the start. At its core, the project gallery is designed to display his illustrations in an organized and aesthetically pleasing manner, allowing users to navigate seamlessly through his portfolio.",
      "The design of the site is entirely custom and tailored to Murat's preferences. As a beginner at the time, I coded the project from scratch only using jQuery to bring the design to life. This approach not only taught me foundational coding principles but also pushed me to learn problem-solving skills by actively seeking solutions on platforms like StackOverflow.",
      "Despite the simplicity of the tech stack, the website delivers an impactful user experience, thanks to the thoughtful integration of animations and a clean layout. The site's minimalistic design ensures that the focus remains on Murat's illustrations, giving his work the spotlight it deserves.",
      "Murat's positive feedback, combined with appreciation from users, underscores the success of this project. It stands as a testament to my ability to transform client requirements into functional and visually appealing digital experiences, even during the early stages of my development career.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    category: "Portfolio",
    slug: "murat-ulker-portfolio",
    tagline: "Portfolio of an Illustrator",
    client: "Murat Ülker",
    role: "Developer",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    duration: "1 Week",
    features: [
      {
        title: "Project Gallery",
        description:
          "An organized and visually appealing gallery that showcases Murat's illustrations in a structured layout.",
      },
      {
        title: "Smooth Animations",
        description:
          "Animations that enhance the user experience by adding a dynamic feel to the site, including transitions and page loading effects.",
      },
      {
        title: "Custom Design",
        description:
          "A fully customized theme designed based on Murat's requirements, ensuring the website aligns with his artistic style.",
      },
    ],
    liveUrl: "https://muratulker.co",
  },
  {
    title: "Kira Sözleşmecim",
    description:
      "A web platform designed to dynamically generate rental agreements for landlords and tenants across Turkey. The site features custom forms that collect user data to create downloadable PDF and Word files, tailored to individual needs.",
    desktopImage: projectImages.rental_contract.desktopImage,
    mobileImage: projectImages.rental_contract.mobileImage,
    detailDescription: [
      "Kirasözleşmecim.com was built to simplify the process of creating rental agreements for landlords and tenants. The platform dynamically generates agreements based on user input, collected through an intuitive, step-by-step form.",
      "The form adjusts dynamically to user responses, ensuring a personalized experience. Once all required information is provided, the system generates rental agreements in both PDF and Word formats, making it easy for users to download and use them.",
      "The development process included advanced features like session management, user authentication, and a virtual POS integration for payment processing. One of the main challenges was generating PDFs with Node.js. Initially, a headless browser library was tested successfully, but server restrictions led to adopting the HTML2PDF library as an alternative solution.",
      "The design of the site was completely custom-made, using Tailwind CSS for styling. Performance, SEO, and accessibility were optimized by analyzing Lighthouse and Semrush reports and addressing key issues.",
      "Although the site was technically successful, it became obsolete due to rental agreements being mandated through E-Devlet. Despite this, the project was a valuable learning experience, particularly in session management, user authentication, and payment gateway integrations.",
    ],
    tags: ["Next.js", "React Hook Form", "Tailwind CSS", "Node.js"],
    category: "Web Application",
    slug: "kirasozlesmecim",
    tagline: "Dynamic Rental Agreement Generator",
    client: "Company Product",
    role: "Full-Stack Developer",
    technologies: ["Next.js", "React Hook Form", "Node.js", "Tailwind CSS"],
    duration: "6 Weeks",
    features: [
      {
        title: "Dynamic Form",
        description:
          "A step-by-step form that dynamically adjusts questions based on user responses, ensuring a tailored experience.",
      },
      {
        title: "PDF & Word Generation",
        description:
          "Automatically generates rental agreements in PDF and Word formats, customized to the data provided by users.",
      },
      {
        title: "User Authentication",
        description:
          "Secure session management and authentication system to protect user data and ensure reliable access.",
      },
      {
        title: "Virtual POS Integration",
        description:
          "Integrated payment gateway for secure and seamless transactions during agreement creation.",
      },
    ],
    liveUrl: "https://kirasozlesmecim.com",
  },
  {
    title: "Sabır Teknik Hırdavat",
    description:
      "A website intended to showcase products, receive inquiries, and build brand identity for a hardware store. However, the development of the site was canceled before completion.",
    desktopImage: projectImages.sabirteknik.desktopImage,
    mobileImage: projectImages.sabirteknik.mobileImage,
    detailDescription: [
      "Sabır Teknik Hırdavat was envisioned as a platform to promote hardware products, gather customer inquiries, and help establish the store's brand identity. The website aimed to feature a product listing and quick inquiry system.",
      "The design was custom-made to reflect the company's branding, and the site included quick access buttons for inquiries via WhatsApp and a rapid search function for users.",
      "Despite the cancellation of the project, the development process was valuable for learning about quick feature implementation, such as integrating WhatsApp messaging and search functionalities.",
      "The website was intended to be responsive, ensuring a smooth user experience on both desktop and mobile devices. The tech stack used includes Next.js for the frontend, Tailwind CSS for styling, and MySQL for database management.",
      "Ultimately, the project was discontinued, and it never went live, but it served as a great learning opportunity for managing simple yet effective user interaction features.",
    ],
    tags: ["Next.js", "Tailwind CSS", "MySQL"],
    category: "Website",
    slug: "sabir-teknik-hirdavat",
    tagline: "Hardware Store Website",
    client: "Sabır Teknik Hırdavat",
    role: "Developer",
    technologies: ["Next.js", "Tailwind CSS", "MySQL"],
    duration: "3 Weeks",
    features: [
      {
        title: "Product Listing",
        description:
          "A simple interface to display hardware products, allowing users to browse quickly.",
      },
      {
        title: "WhatsApp Inquiry Button",
        description:
          "A button that allows users to quickly initiate contact via WhatsApp for inquiries.",
      },
      {
        title: "Search Functionality",
        description:
          "A basic search feature to help users find products or information easily.",
      },
    ],
    liveUrl: "https://sabirteknikhirdavat.com",
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
