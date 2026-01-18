import { PageWrapper } from "@/components/layout/page-wrapper";
import { ContactForm } from "@/components/forms/contact-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з Lucky Link LLC. Ми готові допомогти з вашими потребами у цифровій рекламі та промо-послугах.",
  alternates: {
    canonical: "/uk/contact",
    languages: {
      en: "/contact",
      uk: "/uk/contact",
      "x-default": "/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/ab.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
              <h1
                className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                style={{
                  color: "#0E0E0E",
                  WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                  textShadow: "0 8px 30px rgba(0,0,0,0.25)",
                  filter: "drop-shadow(0 0 1px rgba(255,255,255,0.25))",
                }}
              >
                Зв'язатися
              </h1>
              <p
                className="text-lg md:text-xl"
                style={{
                  color: "#3A3A3A",
                  textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                }}
              >
                Є запитання щодо наших послуг? Ми будемо раді допомогти.
                Надішліть повідомлення — відповімо якнайшвидше.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Інші способи зв'язку
              </h2>
              <p className="text-lg text-muted-foreground">
                Оберіть зручний для вас спосіб
              </p>
            </div>

            <div className="rounded-lg bg-background p-8">
              <h3 className="mb-4 text-xl font-bold text-center">Контактна інформація</h3>
              <div className="space-y-3 text-center">
                <p className="font-semibold">Lucky Link, LLC</p>
                <p className="text-sm text-muted-foreground">Адреса: Вайомінг, США</p>
                <div className="pt-2">
                  <p className="text-sm font-semibold">Email (Бізнес і комплаєнс):</p>
                  <a
                    href="/uk/contact#contact-form"
                    className="text-sm text-primary hover:underline"
                  >
                    seo@cchanse.life
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold">Email (Підтримка):</p>
                  <a
                    href="/uk/contact#contact-form"
                    className="text-sm text-primary hover:underline"
                  >
                    support@lucky1ink.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold">Телефон:</p>
                  <a
                    href="tel:+13072257838"
                    className="text-sm text-primary hover:underline"
                  >
                    +1 307 225 78 38
                  </a>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                Для загальних запитів, питань щодо відповідності або підтримки
                звертайтеся за контактами вище.
              </p>
            </div>

            <div className="mt-12 rounded-lg bg-background p-8">
              <h3 className="mb-4 text-xl font-bold">Поширені запитання</h3>
              <p className="mb-4 text-muted-foreground">
                Перш ніж звертатися, ви можете знайти відповідь у розділі FAQ на{" "}
                <Link href="/uk" className="text-primary hover:underline">
                  головній сторінці
                </Link>
                .
              </p>
              <p className="mb-4 text-muted-foreground">
                Для питань щодо конкретних промо-програм ознайомтесь з{" "}
                <Link href="/uk/rules" className="text-primary hover:underline">
                  Офіційними правилами
                </Link>
                .
              </p>
              <p className="text-muted-foreground">
                Для технічної підтримки або питань щодо облікового запису, будь ласка,
                додайте дані свого акаунта у повідомленні.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Чого очікувати
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Ми прагнемо забезпечити відмінний сервіс. Ось чого ви можете очікувати,
              звертаючись до нас:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-muted/50 p-6">
                <div className="mb-3 text-4xl font-bold text-primary">1-2</div>
                <p className="font-semibold">Робочі дні</p>
                <p className="text-sm text-muted-foreground">
                  Типовий час відповіді на email
                </p>
              </div>

              <div className="rounded-lg bg-muted/50 p-6">
                <div className="mb-3 text-4xl font-bold text-primary">24/7</div>
                <p className="font-semibold">Моніторинг</p>
                <p className="text-sm text-muted-foreground">
                  Моніторимо запити цілодобово
                </p>
              </div>

              <div className="rounded-lg bg-muted/50 p-6">
                <div className="mb-3 text-4xl font-bold text-primary">100%</div>
                <p className="font-semibold">Залученість</p>
                <p className="text-sm text-muted-foreground">
                  Повністю віддані вирішенню ваших запитів
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
