import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  Code,
  BarChart,
  Handshake,
  Shield,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_DISCLOSURES } from "@/lib/constants/legal";
import { FadeIn, StaggerChildren } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/scale-in";
import { ParallaxVideo } from "@/components/animations/parallax-video";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Комплексні послуги цифрової реклами та промоції для зростання вашого бізнесу: стратегія кампаній, залучення трафіку, розробка сайтів і аналітика.",
  alternates: {
    canonical: "/uk/services",
    languages: {
      en: "/services",
      uk: "/uk/services",
      "x-default": "/services",
    },
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Стратегія та управління кампаніями",
      description:
        "Розробляємо комплексні стратегії промо-кампаній, узгоджені з вашими цілями та аудиторією.",
      outcomes: [
        "Зростання впізнаваності бренду",
        "Вищі показники залучення клієнтів",
        "Вимірюваний ROI промо-бюджету",
        "Відповідність усім регуляціям",
      ],
      engagementModels: [
        "Фіксована оплата за планування проєкту",
        "Місячне управління кампаніями",
        "Оплата за результатом",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Залучення та оптимізація трафіку",
      description:
        "Приводимо цільовий трафік у ваші промо-кампанії через платні медіа, органічні канали та стратегічні партнерства.",
      outcomes: [
        "Досягнення цільової аудиторії",
        "Ефективне залучення клієнтів за вартістю",
        "Багатоканальне виконання кампаній",
        "Безперервна оптимізація ефективності",
      ],
      engagementModels: [
        "Управління PPC",
        "Місячний ретейнер",
        "Гібридні моделі оплати",
      ],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Розробка промо-сайтів",
      description:
        "Створюємо промо-лендінги та мікросайти, оптимізовані для конверсії та відповідності.",
      outcomes: [
        "Лендінги з високою конверсією",
        "Адаптивний дизайн",
        "Швидке завантаження",
        "Інтегрована аналітика",
      ],
      engagementModels: [
        "Проєктна оплата",
        "Погодинна розробка",
        "Пакети підтримки",
      ],
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Аналітика та звітність",
      description:
        "Надаємо детальну аналітику та звіти для вимірювання ефективності й оптимізації результатів.",
      outcomes: [
        "Дашборди кампаній у реальному часі",
        "Комплексні звіти про ефективність",
        "Інсайти на основі даних",
        "Аналіз ROI та оптимізація",
      ],
      engagementModels: [
        "Місячні пакети звітності",
        "Налаштування кастомної аналітики",
        "Квартальні бізнес-рев'ю",
      ],
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Інтеграції з партнерами",
      description:
        "Підключаємо вас до нашої мережі промо-партнерів, платформ і технологічних провайдерів.",
      outcomes: [
        "Доступ до промо-платформ",
        "Технологічні інтеграції",
        "Можливості co-marketing",
        "Партнерський супровід",
      ],
      engagementModels: [
        "Підбір партнерів",
        "Керовані інтеграції",
        "Моделі розподілу доходу",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Аудит відповідності та оцінка ризиків",
      description:
        "Аудитуємо механіку кампаній, дисклеймери та флоу участі, щоб зменшити регуляторні ризики.",
      outcomes: [
        "Чіткі дисклеймери та розміщення NPN",
        "Вирівнювання AMOE та документація",
        "Чек-листи готовності правил",
        "Рекомендації з мінімізації ризиків",
      ],
      engagementModels: [
        "Разовий аудит відповідності",
        "Передзапусковий огляд",
        "Постійний комплаєнс-супровід",
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <ParallaxVideo src="/service_down.mp4" overlayClassName="bg-white/30" />
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
                  Наші послуги
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
                  Комплексні рішення, що допомагають створювати залучаючі
                  промо-кампанії з дотриманням вимог і результатом для бізнесу.
                </p>
              </div>
              <Button
                size="lg"
                className="mt-8 bg-[#111111] text-white hover:bg-[#1A1A1A]"
                asChild
              >
                <Link href="/uk/contact">
                  Запросити консультацію
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Комплексні пропозиції послуг
              </h2>
              <p className="text-lg text-muted-foreground">
                Повний цикл промо-маркетингових послуг, адаптованих під ваші потреби
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30"
              >
                <div className="p-8 text-center">
                  {/* Icon with beautiful gradient background */}
                  <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {service.icon}
                  </div>

                  <CardTitle className="mb-3 text-xl">{service.title}</CardTitle>
                  <CardDescription className="mb-6 text-base">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-4 text-left">
                    <div>
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        Ключові результати
                      </h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 mt-1.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 flex items-center gap-2 font-semibold text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        Моделі співпраці
                      </h4>
                      <ul className="space-y-2">
                        {service.engagementModels.map((model, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50 mt-1.5" />
                            <span>{model}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Наш процес взаємодії
              </h2>
              <p className="text-lg text-muted-foreground">
                Чіткий і прозорий підхід до надання послуг промо-маркетингу
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl">
            <StaggerChildren className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Дослідження",
                  description: "Знайомимось з бізнесом, цілями та аудиторією",
                },
                {
                  step: "2",
                  title: "Стратегія",
                  description: "Формуємо план промо-кампанії під ваші задачі",
                },
                {
                  step: "3",
                  title: "Реалізація",
                  description: "Впроваджуємо та керуємо кампанією",
                },
                {
                  step: "4",
                  title: "Оптимізація",
                  description: "Постійно покращуємо на основі результатів",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground transition-transform duration-300 hover:scale-110">
                    {phase.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 text-white">
        <ParallaxVideo src="/reloop.mp4" overlayClassName="bg-black/45" />
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Готові запустити кампанію?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Зв'яжіться з нами, щоб обговорити, як Lucky Link LLC допоможе
                досягти ваших цілей у промо-маркетингу.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/uk/contact">
                    Запросити консультацію
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/uk/programs">Переглянути програми</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/80">
                {LEGAL_DISCLOSURES.uk.npn}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
