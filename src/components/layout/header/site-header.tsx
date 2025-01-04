"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Container from "@/components/ui/custom/container"
import { routes } from "@/data"
import { HiOutlineMenu } from "react-icons/hi"
import Logo from "@/components/ui/custom/logo"
import { ThemeToggler } from "@/components/ui/custom/theme-toggler"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex items-center py-4" padding="none">
        <div className="mr-8">
          <Logo />
        </div>
        <div className="hidden md:flex">
          <nav className="flex items-center space-x-4 text-sm font-medium">
            {routes.map((route) => {
              const isActive = pathname === route.href
              return (
                <div
                  className={cn("rounded-sm px-2 text-base duration-75", {
                    "bg-primary": isActive,
                    "bg-background": !isActive,
                  })}
                  key={route.href}
                >
                  <Link
                    href={route.href}
                    className={cn(`text-foreground transition-colors`, {
                      "hover:text-foreground/80": !isActive,
                    })}
                  >
                    {route.label}
                  </Link>
                </div>
              )
            })}
          </nav>
        </div>
        <ThemeToggler className="ml-auto hidden md:flex" />
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="ml-auto">
              <HiOutlineMenu className="size-[.75cm]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="space-y-7">
            <SheetTitle className="flex justify-center">
              <Logo />
            </SheetTitle>
            <nav className="flex flex-col space-y-3">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`font-body text-xl transition-colors hover:text-foreground/80 ${
                    pathname === route.href
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
              <ThemeToggler />
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}
