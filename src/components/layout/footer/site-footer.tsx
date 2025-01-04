"use client"

import Mountains from "./mountains"
import { Text } from "@/components/ui/custom/text"
import { useEffect, useState, useRef } from "react"

const HiThereTexts = [
  "Kagan!",
  "a Web Developer!",
  "a Tech Enthusiast!",
  "a Problem Solver!",
  "a Motorcycle Lover!",
  "a Team Player!",
  "a Lifelong Learner!",
  "a Mentor!",
  "a Coffee Lover!",
]

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const typewriterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = typewriterRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeout = setTimeout(
      () => {
        if (!isDeleting && letterIndex < texts[currentIndex].length) {
          setCurrentText((prev) => prev + texts[currentIndex][letterIndex])
          setLetterIndex(letterIndex + 1)
        } else if (isDeleting && letterIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1))
          setLetterIndex(letterIndex - 1)
        } else if (!isDeleting && letterIndex === texts[currentIndex].length) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && letterIndex === 0) {
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      },
      isDeleting ? 100 : 250,
    )

    return () => clearTimeout(timeout)
  }, [letterIndex, currentIndex, texts, isDeleting, isVisible])

  return (
    <span ref={typewriterRef} className="!text-white">
      {currentText}
      <span
        className={`cursor animate-fade-in-out ml-0.5 inline-block h-1 w-3 bg-white`}
      ></span>
    </span>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative border-t bg-blue-950">
      <div className="pointer-events-none absolute inset-0 bottom-0 h-auto w-full overflow-hidden">
        <Mountains className="absolute bottom-0 opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-y-2">
          <Text className="font-emphasize text-sm tracking-tighter text-white">
            Hi there!
          </Text>
          <Text className="font-emphasize relative text-sm tracking-tighter text-white">
            I&apos;m <Typewriter texts={HiThereTexts} />
          </Text>
        </div>
      </div>
    </footer>
  )
}
