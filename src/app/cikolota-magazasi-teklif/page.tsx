import { Check } from "lucide-react"

const packages = [
  {
    id: "hazir-tema-ucretsiz",
    name: "Hazır Tema (Ücretsiz Shopify Tema)",
    emoji: "🟢",
    price: "18.000",
    duration: "5–7 iş günü",
    description: "Yeni markalar veya temel online satış hedefi olan işletmeler",
    features: [
      "Shopify'ın ücretsiz temalarından birinin kurulumu",
      "Ana sayfa, Ürünler, Hakkımızda, İletişim, Kargo & İade sayfaları",
      "PayTR veya iyzico ödeme sistemi kurulumu",
      "10 adede kadar ürün yükleme",
      "Temel kargo ayarları",
      "Mini eğitim",
      "3 ay ücretsiz destek",
    ],
  },
  {
    id: "hazir-tema-ucretli",
    name: "Hazır Tema (Ücretli Shopify veya Dış Kaynak Tema)",
    emoji: "🟡",
    price: "30.000",
    duration: "10–14 iş günü",
    description:
      "Profesyonel görünüm isteyen, marka kimliğine uygun özelleştirme talebi olan markalar",
    features: [
      "Ücretli Shopify tema veya dış kaynaklı tema kurulumu (tema ücreti alıcıya aittir)",
      "Renk, tipografi, görsel ve banner uyarlamaları",
      "10–30 ürün yükleme",
      "Koleksiyon yapısı kurulumu",
      "İndirim kuponu, bülten üyeliği, temel SEO ayarları",
      "PayTR / iyzico ödeme kurulumu",
      "Mini eğitim",
      "3 ay ücretsiz destek",
    ],
  },
  {
    id: "ozel-tema",
    name: "Sıfırdan Özel Tema (Özel Tasarım & Geliştirme)",
    emoji: "🔵",
    price: "70.000",
    duration: "3–5 hafta",
    description:
      "Premium görünüm, özel kullanıcı deneyimi ve yüksek özelleştirme isteyen markalar",
    features: [
      "Figma üzerinde özel UI/UX tasarımı",
      "Shopify Liquid ile sıfırdan tema geliştirme",
      "Mobil, tablet, masaüstü uyumlu yapı",
      "Gelişmiş ürün sayfası (örnek: aroma, kutu boyutu seçimi vb.)",
      "SEO optimizasyonu",
      "Çoklu dil desteği",
      "PayTR / iyzico ödeme kurulumu",
      "Mini eğitim",
      "3 ay ücretsiz destek",
    ],
  },
]

const optionalFeatures = [
  {
    feature: "Çoklu Dil Desteği",
    description: "Mağazaya ek dil eklenmesi",
    price: "7.500",
  },
  {
    feature: "Shopify POS Kurulumu",
    description: "Fiziksel mağaza entegrasyonu",
    price: "3.000",
  },
  {
    feature: "B2B / Toptan Satış Modülü",
    description: "Fiyat ve stok yönetimiyle toptan sistem",
    price: "10.000",
  },
  {
    feature: "Gelişmiş Analitik Entegrasyonu",
    description: "GA4, Meta Pixel, Klaviyo kurulumu",
    price: "4.000",
  },
  {
    feature: "Performans ve SEO Optimizasyonu",
    description: "Teknik hız, SEO, meta yapı düzeni",
    price: "3.000",
  },
  {
    feature: "Ek Ürün Girişi (30 üzeri)",
    description: "100 ürüne kadar manuel yükleme",
    price: "5.000",
  },
]

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function Page() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
            <span className="text-xs font-medium uppercase tracking-wider text-primary">
              Shopify Mağaza Kurulum
            </span>
          </div>
          <h1 className="mb-4 text-balance font-serif text-4xl font-normal sm:text-5xl">
            Paketler ve Fiyatlandırma
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Çikolata markanız için profesyonel Shopify e-ticaret çözümleri. Tüm
            paketlerde mini eğitim ve ilk 3 ay ücretsiz destek dahildir.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mb-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              {/* Package Header */}
              <div className="mb-4">
                <div className="mb-2 text-2xl">{pkg.emoji}</div>
                <h3 className="mb-2 text-balance font-serif text-lg font-normal leading-tight">
                  {pkg.name}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-4 border-b border-border pb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-normal text-primary">
                    {pkg.price}
                  </span>
                  <span className="ml-1 text-base text-muted-foreground">
                    ₺
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Teslim: {pkg.duration}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-xs leading-relaxed text-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5">
              <span className="text-xs font-medium uppercase tracking-wider">
                ⚙️ Eklenebilir Özellikler
              </span>
            </div>
            <h2 className="mb-3 text-balance font-serif text-3xl font-normal">
              Opsiyonel Özellikler
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
              Paketinize ekstra özellikler ekleyerek mağazanızı daha da
              güçlendirebilirsiniz
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="px-4 py-3 text-left font-serif text-base font-normal">
                        Özellik
                      </th>
                      <th className="px-4 py-3 text-left font-serif text-base font-normal">
                        Açıklama
                      </th>
                      <th className="px-4 py-3 text-right font-serif text-base font-normal">
                        Ek Ücret
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {optionalFeatures.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-border transition-colors last:border-0 hover:bg-secondary/20"
                      >
                        <td className="px-4 py-3 text-sm font-medium">
                          {item.feature}
                        </td>
                        <td className="px-4 py-3 text-xs text-muted-foreground">
                          {item.description}
                        </td>
                        <td className="px-4 py-3 text-right font-serif text-base text-primary">
                          {item.price} ₺
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-8 max-w-5xl">
          <div className="rounded-xl border border-border bg-secondary/50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal">
              🔧 Destek Sonrası Hizmet
            </h3>
            <div className="mb-4 space-y-3">
              <p className="text-xs leading-relaxed text-foreground/90">
                Tüm paketlerde 3 ay ücretsiz destek bulunur. Yazılımcı kaynaklı
                sorunlar destek kapsamında olmasa bile giderilir.
              </p>
              <p className="text-xs leading-relaxed text-foreground/90">
                Sonrasında isteğe bağlı olarak{" "}
                <span className="font-semibold text-primary">
                  aylık 6.000 ₺
                </span>{" "}
                karşılığında:
              </p>
            </div>
            <ul className="mb-4 space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-xs text-foreground/90">
                  Teknik sorunların çözümü
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-xs text-foreground/90">
                  Var olan tasarımlarla yeni sayfa veya ürün ekleme
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-xs text-foreground/90">
                  Kampanya & içerik güncellemeleri
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-xs text-foreground/90">
                  Küçük tasarım değişiklikleri
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="text-xs text-foreground/90">
                  Hız ve SEO optimizasyonu
                </span>
              </li>
            </ul>
            <p className="text-[10px] italic text-muted-foreground">
              * Büyük tasarım değişiklikleri bu kapsamın dışındadır.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-3 font-serif text-lg font-normal">
              Önemli Notlar
            </h3>
            <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>Yıl sonlarında destek ücretleri güncellenebilir.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>Tüm paketlerde mini eğitim dahildir.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>
                  Ödeme altyapısı olarak PayTR veya iyzico tercih edilir.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>Fiyatlara KDV dahil değildir.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>
                  Paketlerde yer almayan özellikler, ek ücretlendirme ile dahil
                  edilebilir. (Örneğin, hazır temaya dil desteği eklenmesi
                  gibi.)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <span>Kreatif tasarımları paketlere dahil değildir.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
