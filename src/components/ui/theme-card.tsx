"use client"

import type React from "react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Smartphone } from "lucide-react"

interface Theme {
  id: number
  name: string
  price: number
  image: string
  desktopImage: string
  mobileImage: string
  badge?: string | null
}

interface ThemeCardProps {
  theme: Theme
}

export function ThemeCard({ theme }: ThemeCardProps) {
  const openDesktopView = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(theme.desktopImage, "_blank")
  }

  const openMobileView = (e: React.MouseEvent) => {
    e.stopPropagation()
    window.open(theme.mobileImage, "_blank")
  }

  return (
    <>
      <Card
        className="group overflow-hidden transition-all hover:shadow-lg"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={theme.image || "/placeholder.svg"}
            alt={theme.name}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          {theme.badge && (
            <div className="absolute right-3 top-3">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                {theme.badge}
              </Badge>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{theme.name}</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-foreground">{theme.price}$</span>
            </div>

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={openDesktopView}>
                <Monitor className="mr-2 h-4 w-4" />
                Masaüstü
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={openMobileView}>
                <Smartphone className="mr-2 h-4 w-4" />
                Mobil
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
