"use client"
import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

type FadeInOnIntersectProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  animationType?:
    | "fadeIn"
    | "fadeInBottom"
    | "fadeInLeft"
    | "fadeInRight"
    | "zoomIn"
}

function AnimateOnIntersect({
  children,
  animationType,
  delay,
  duration,
}: FadeInOnIntersectProps) {
  const elementRef = useRef<HTMLElement>(null as unknown as HTMLElement)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible && elementRef.current) {
      switch (animationType) {
        case "fadeIn":
          fadeIn({ element: elementRef.current, delay, duration })
          break
        case "fadeInBottom":
          fadeInBottom({ element: elementRef.current, delay, duration })
          break
        case "fadeInLeft":
          fadeInLeft({ element: elementRef.current, delay, duration })
          break
        case "fadeInRight":
          fadeInRight({ element: elementRef.current, delay, duration })
          break
        case "zoomIn":
          zoomIn({ element: elementRef.current, delay, duration })
          break
        default:
          fadeInBottom({ element: elementRef.current, delay, duration })
          break
      }
    }
  }, [isVisible, animationType, delay, duration])

  return (
    <>
      {React.isValidElement(children) &&
        React.cloneElement(
          children as React.ReactElement<{ ref: React.RefObject<HTMLElement> }>,
          { ref: elementRef },
        )}
    </>
  )
}

export default AnimateOnIntersect

// Animation functions:

function zoomIn(payload: {
  element: HTMLElement
  duration?: number
  delay?: number
}) {
  const { element, delay, duration } = payload
  gsap.set(element, { scale: 0.8, opacity: 0 })
  gsap.to(element, {
    opacity: 1,
    scale: 1,
    delay: delay,
    duration: duration || 1,
    ease: "power2.out",
  })
}

function fadeInRight(payload: {
  element: HTMLElement
  duration?: number
  delay?: number
}) {
  const { element, delay, duration } = payload
  gsap.set(element, { opacity: 0, x: 50 })
  gsap.to(element, {
    opacity: 1,
    x: 0,
    delay: delay,
    duration: duration || 1,
    ease: "power2.out",
  })
}

function fadeInLeft(payload: {
  element: HTMLElement
  duration?: number
  delay?: number
}) {
  const { element, delay, duration } = payload
  gsap.set(element, { opacity: 0, x: -50 })
  gsap.to(element, {
    opacity: 1,
    x: 0,
    delay: delay,
    duration: duration || 1,
    ease: "power2.out",
  })
}

function fadeInBottom(payload: {
  element: HTMLElement
  duration?: number
  delay?: number
}) {
  const { element, delay, duration } = payload
  gsap.set(element, { opacity: 0, y: 50 })
  gsap.to(element, {
    opacity: 1,
    y: 0,
    delay: delay,
    duration: duration || 1,
    ease: "power2.out",
  })
}

function fadeIn(payload: {
  element: HTMLElement
  duration?: number
  delay?: number
}) {
  const { element, delay, duration } = payload
  gsap.set(element, { opacity: 0 })
  gsap.to(element, {
    opacity: 1,
    delay: delay,
    duration: duration || 1,
    ease: "power2.out",
  })
}
