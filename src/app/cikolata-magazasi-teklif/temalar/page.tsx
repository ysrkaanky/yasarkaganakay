import { ThemeCard } from "@/components/ui/theme-card"

const themes = [
  {
    id: 1,
    name: "Caffeine",
    price: 360,
    image: "/chocalate-themes/caffeine.png",
    desktopImage: "/chocalate-themes/caffeine.png",
    mobileImage: "/chocalate-themes/caffeine_mobile.png",
    badge: "Shopify Onaylı Tema",
  },
  {
    id: 2,
    name: "Cocoa",
    price: 59,
    image: "/chocalate-themes/cocoa_theme.png",
    desktopImage: "/chocalate-themes/cocoa_theme.png",
    mobileImage: "/chocalate-themes/cocoa_theme_mobile.png",
  },
  {
    id: 3,
    name: "Chocolatier",
    price: 59,
    image: "/chocalate-themes/chocolatier.png",
    desktopImage: "/chocalate-themes/chocolatier.png",
    mobileImage: "/chocalate-themes/chocolatier_mobile.png",
    badge: null,
  },
  {
    id: 4,
    name: "Clane",
    price: 56,
    image: "/chocalate-themes/clane.png",
    desktopImage: "/chocalate-themes/clane.png",
    mobileImage: "/chocalate-themes/clane_mobile.png",
  },
  {
    id: 5,
    name: "Decaf",
    price: 59,
    image: "/chocalate-themes/decaf.png",
    desktopImage: "/chocalate-themes/decaf.png",
    mobileImage: "/chocalate-themes/decaf_mobile.png",
  },
  {
    id: 6,
    name: "Chocolate",
    price: 29,
    image: "/chocalate-themes/chocalate.png",
    desktopImage: "/chocalate-themes/chocalate.png",
    mobileImage: "/chocalate-themes/chocalate_mobile.png",
  }
]

export default function ThemesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Themes Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">Seçilen Temalar</h2>
            <p className="mt-1 text-sm text-muted-foreground">{themes.length} tema</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <ThemeCard key={theme.id} theme={theme} />
          ))}
        </div>
      </section>
    </div>
  )
}
