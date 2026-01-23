import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  Target,
  Award,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants/site";
import { BUSINESS_DESCRIPTION } from "@/lib/constants/legal";
import { FadeIn, StaggerChildren } from "@/components/animations/fade-in";
import { LazyVideo } from "@/components/media/lazy-video";

export const metadata: Metadata = {
  title: "Про нас",
  description:
    "Дізнайтеся про Lucky Link LLC — компанію з Вайомінгу у сфері цифрової реклами та промо-послуг, що дотримується принципів відповідності та прозорості.",
  alternates: {
    canonical: "/uk/about",
    languages: {
      en: "/about",
      uk: "/uk/about",
      "x-default": "/about",
    },
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Відповідність понад усе",
      description:
        "Ми ставимо відповідність регуляціям у пріоритет для всіх промо-кампаній, забезпечуючи прозорість і дотримання закону.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Орієнтація на клієнта",
      description:
        "Наші клієнти та їхні клієнти — в центрі всього, що ми робимо. Ми будуємо довготривалі відносини через довіру та результат.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Фокус на результат",
      description:
        "Ми зосереджені на вимірюваних результатах, що сприяють зростанню бізнесу та залученню клієнтів.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Чесність",
      description:
        "Ми діємо чесно та прозоро, дотримуючись найвищих етичних стандартів у всіх практиках.",
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <LazyVideo
            className="absolute inset-0 h-full w-full object-cover"
            src="/abouut.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/about.jpeg"
          />
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 animate-float rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-float rounded-full bg-accent/10 blur-3xl animation-delay-2000" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
                <Badge
                  className="mb-4 border border-black/10 bg-white/85 text-[#1A1A1A] backdrop-blur-xl"
                  variant="secondary"
                >
                  Про нас
                </Badge>
                <h1
                  className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                  style={{
                    color: "#0E0E0E",
                    WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                    textShadow: "0 8px 30px rgba(0,0,0,0.25)",
                    filter: "drop-shadow(0 0 1px rgba(255,255,255,0.25))",
                  }}
                >
                  Цифрова реклама та промо-послуги
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  {BUSINESS_DESCRIPTION.uk.primary}. Ми спеціалізуємося на
                  промо-кампаніях із фокусом на відповідність, що підвищують
                  залучення та зберігають прозорість і дотримання вимог.
                </p>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/uk/contact">
                    Зв'язатися
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/uk/services">Наші послуги</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="mb-12">
                <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                  Хто ми
                </h2>
                <p className="text-lg text-muted-foreground">
                  Надійний партнер у цифровій рекламі та промо-маркетингу
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mb-8 rounded-lg bg-muted/50 p-8 transition-all duration-300 hover:shadow-lg">
                <p className="mb-4 text-lg leading-relaxed">
                  <strong>Lucky Link LLC</strong> — компанія з обмеженою
                  відповідальністю у Вайомінгу, що спеціалізується на цифровій рекламі
                  та промо-послугах. Ми допомагаємо бізнесу створювати й керувати
                  промо-кампаніями, що підвищують залучення клієнтів через законні
                  маркетингові стратегії.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                  Засновані з фокусом на{" "}
                  <strong>відповідність і прозорість</strong>, ми вважаємо, що
                  промо-маркетинг має бути чітким, чесним і відповідати законам
                  захисту споживачів. Наші кампанії підвищують впізнаваність бренду та
                  лояльність клієнтів, зберігаючи найвищі стандарти відповідності.
                </p>
                <p className="text-lg leading-relaxed">
                  На відміну від азартних ігор або ставок, наші промо-розіграші —
                  це легітимні маркетингові інструменти, які завжди мають{" "}
                  <strong>альтернативні способи участі</strong> (AMOE) і ніколи не
                  вимагають покупки. Це гарантує законність наших програм у всіх
                  юрисдикціях, де ми працюємо.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-8">
                <h3 className="mb-4 text-2xl font-bold">Дані компанії</h3>
                <StaggerChildren className="grid gap-4 md:grid-cols-2">
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Локація</p>
                        <p className="text-muted-foreground">
                          {SITE_CONFIG.company.state}, {SITE_CONFIG.company.country}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Підтримка</p>
                        <p className="text-muted-foreground">
                          {SITE_CONFIG.company.supportEmail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </StaggerChildren>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Наша місія
              </h2>
            </div>

            <div className="mb-8 rounded-lg bg-background p-8">
              <p className="mb-6 text-lg leading-relaxed">
                Надавати бізнесу{" "}
                <strong>
                  відповідні, прозорі та ефективні рішення промо-маркетингу
                </strong>{" "}
                для підвищення залучення клієнтів із дотриманням найвищих стандартів
                відповідності та захисту споживачів.
              </p>

              <h3 className="mb-4 text-xl font-bold">На чому ми стоїмо</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Прозорість:</strong> чіткі умови, чесна комунікація та
                    відсутність прихованих намірів
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Відповідність:</strong> дотримання всіх чинних законів і
                    регуляцій у кожній кампанії
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Справедливість:</strong> рівні можливості для всіх
                    учасників, без покупки та з альтернативними способами участі
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Інновації:</strong> креативні підходи на основі даних, що
                    дають вимірювані результати
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Відповідальність:</strong> етичні практики, що поважають
                    приватність і захист даних споживачів
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Наші цінності
              </h2>
              <p className="text-lg text-muted-foreground">
                Принципи, які керують усім, що ми робимо
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-primary/5 text-primary transition-transform duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                  Що ми робимо
                </h2>
                <p className="text-lg text-muted-foreground">
                  Комплексні послуги промо-маркетингу
                </p>
              </div>
            </div>
          </FadeIn>

          <StaggerChildren className="mx-auto max-w-4xl">
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Стратегія та управління кампаніями
                  </h3>
                  <p className="text-muted-foreground">
                    Розробляємо стратегії промо-кампаній, узгоджені з вашими цілями,
                    і керуємо реалізацією від початку до завершення.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Залучення та оптимізація трафіку
                  </h3>
                  <p className="text-muted-foreground">
                    Приводимо цільовий трафік через платні медіа, органічні канали та
                    стратегічні партнерства.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Розробка промо-сайтів
                  </h3>
                  <p className="text-muted-foreground">
                    Створюємо промо-лендінги та мікросайти, оптимізовані для конверсії
                    та відповідності.
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Аналітика та звітність
                  </h3>
                  <p className="text-muted-foreground">
                    Надаємо детальну аналітику та звітність для вимірювання
                    ефективності й оптимізації.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/uk/services">
                  Переглянути всі послуги
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Commitment to Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Наша відданість відповідності
              </h2>
              <p className="text-lg text-muted-foreground">
                Ми віримо в правильний підхід
              </p>
            </div>

            <div className="rounded-lg bg-primary/5 p-8">
              <p className="mb-6 text-lg leading-relaxed">
                У Lucky Link LLC ми розуміємо, що промо-маркетинг вимагає ретельної
                уваги до юридичних і регуляторних вимог. Ми підтримуємо повну
                відповідність федеральним і штатним законам щодо промо-розіграшів,
                рекламних практик і захисту споживачів.
              </p>

              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Ключові практики відповідності</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Чіткі Офіційні правила для всіх промоцій</li>
                    <li>✓ Формулювання "покупка не потрібна" (NPN)</li>
                    <li>✓ Альтернативні способи участі (AMOE)</li>
                    <li>✓ Прозорий відбір переможців</li>
                    <li>✓ Коректне розкриття всіх суттєвих умов</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Наші стандарти</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Регулярний юридичний перегляд кампаній</li>
                    <li>✓ Відповідність захисту даних і приватності</li>
                    <li>✓ Чесний і прозорий маркетинг</li>
                    <li>✓ Відсутність оманливих практик</li>
                    <li>✓ Повага до прав споживачів</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="outline" asChild>
                  <Link href="/uk/rules">Переглянути офіційні правила</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/uk/terms">Умови використання</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/uk/privacy">Політика конфіденційності</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 text-primary-foreground">
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <LazyVideo
            className="absolute inset-0 h-full w-full object-cover"
            src="/reloop.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero.png"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-black/40" aria-hidden="true" />
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 animate-float rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-float rounded-full bg-primary-foreground/10 blur-3xl animation-delay-2000" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto inline-block rounded-2xl border border-white/10 bg-background/30 px-6 py-5 backdrop-blur-sm">
                <h2 className="mb-4 bg-linear-to-br from-primary-foreground to-primary-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                  Готові працювати разом?
                </h2>
                <p className="text-lg opacity-90">
                  Обговорімо, як Lucky Link LLC може допомогти вам створити
                  залучаючі промо-кампанії з дотриманням вимог та результатом.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/uk/contact">
                    Зв'язатися сьогодні
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
