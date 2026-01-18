import Link from "next/link";
import { ArrowRight, Check, Shield, Users, TrendingUp, Sparkles } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren } from "@/components/animations/fade-in";
import { ParallaxVideo } from "@/components/animations/parallax-video";
import { LEGAL_DISCLOSURES, BUSINESS_DESCRIPTION } from "@/lib/constants/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucky Link LLC - Цифрова реклама та промо-послуги",
  description:
    "Платформа цифрової реклами та промо-послуг з програмами залучення на основі винагород і маркетинговими рішеннями. Покупка не потрібна. Недійсно там, де заборонено.",
  alternates: {
    canonical: "/uk",
    languages: {
      en: "/",
      uk: "/uk",
      "x-default": "/",
    },
  },
};

export default function HomePage() {
  const services = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Стратегія кампанії",
      description: "Планування та реалізація промо-кампаній на основі даних",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Залучення аудиторії",
      description: "Створюємо змістовні зв'язки з вашою цільовою аудиторією",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Відповідність понад усе",
      description: "Усі кампанії відповідають вимогам регуляторів і best practices",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Консультація",
      description: "З'ясовуємо ваші бізнес-цілі та цільову аудиторію",
    },
    {
      step: "02",
      title: "Стратегія",
      description: "Проєктуємо промо-кампанію, адаптовану під ваші потреби",
    },
    {
      step: "03",
      title: "Запуск",
      description: "Запускаємо та ведемо кампанію з постійною оптимізацією",
    },
    {
      step: "04",
      title: "Результати",
      description: "Надаємо детальну аналітику та інсайти щодо ефективності",
    },
  ];

  const testimonials = [
    {
      content:
        "Lucky Link LLC допомогла нам створити промо-кампанію, що суттєво підвищила залучення клієнтів при повній відповідності.",
      type: "Відгук клієнта",
    },
    {
      content:
        "Професійно, прозоро та з фокусом на результат. Команда розуміє важливість законного промо-маркетингу.",
      type: "Відгук клієнта",
    },
  ];

  const faqs = [
    {
      question: "Які послуги надає Lucky Link LLC?",
      answer:
        "Lucky Link LLC надає послуги цифрової реклами та промоції, включно зі стратегією кампаній, програмами залучення аудиторії та рішеннями з фокусом на відповідність.",
    },
    {
      question: "Що таке промо-розіграш?",
      answer:
        "Промо-розіграш — це маркетинговий інструмент для залучення клієнтів і підвищення впізнаваності бренду. Це не лотерея і не азартна гра — покупка не потрібна для участі або виграшу. Див. Офіційні правила для деталей.",
    },
    {
      question: "Чи потрібна покупка для участі?",
      answer: `Ні. ${LEGAL_DISCLOSURES.uk.npnShort} Наші програми завжди мають альтернативні способи участі без покупки.`,
    },
    {
      question: "Як ви забезпечуєте відповідність?",
      answer:
        "Ми співпрацюємо з юридичними експертами, щоб усі промо-активності відповідали федеральним і штатним нормам. Наші офіційні правила чіткі, прозорі та доступні.",
    },
    {
      question: "Хто може брати участь у промо-програмах?",
      answer:
        "Умови участі залежать від програми. Зазвичай учасники мають бути законними резидентами дозволених юрисдикцій і відповідати мінімальним віковим вимогам. Див. правила конкретної програми для деталей.",
    },
    {
      question: "Як обираються переможці?",
      answer:
        "Переможців обирають шляхом випадкового відбору або іншими чесними методами, описаними в Офіційних правилах. Процес прозорий і за потреби контролюється незалежними адміністраторами.",
    },
    {
      question: "Що відбувається з моїми персональними даними?",
      answer:
        "Ми серйозно ставимося до захисту даних. Ознайомтеся з Політикою конфіденційності для детальної інформації про те, як ми збираємо, використовуємо та захищаємо ваші дані.",
    },
    {
      question: "Як зв'язатися з Lucky Link LLC?",
      answer:
        "Звертайтеся через сторінку Контактів. Ми готові відповісти на запитання щодо наших послуг і промо-програм.",
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/home.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero.png"
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
              <div className="-mt-6">
                <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
                  <Badge
                    className="mb-4 border border-black/10 bg-white/85 text-[#1A1A1A] backdrop-blur-xl"
                    variant="secondary"
                  >
                    <Sparkles className="mr-2 h-3 w-3" />
                    Цифрова реклама та промо-послуги
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
                    Платформа промо-маркетингу та винагород
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
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group shadow-lg" asChild>
                    <Link href="/uk/services">
                      Переглянути програми
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="backdrop-blur-xl" asChild>
                    <Link href="/uk/contact">Зв'язатися з відділом продажів</Link>
                  </Button>
                </div>
                <div className="mt-6 inline-block rounded-xl border border-black/5 bg-background/50 px-4 py-3 backdrop-blur-sm">
                  <p
                    className="text-sm"
                    style={{
                      color: "#3A3A3A",
                      textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                    }}
                  >
                    {LEGAL_DISCLOSURES.uk.npn}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Що ми робимо
              </h2>
              <p className="text-lg text-muted-foreground">
                Комплексні послуги промо-маркетингу для зростання вашого бізнесу
              </p>
            </div>
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Як це працює
              </h2>
              <p className="text-lg text-muted-foreground">
                Простий і прозорий процес запуску промо-кампанії
              </p>
            </div>
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4 bg-linear-to-br from-primary/20 to-accent/20 bg-clip-text text-4xl font-bold text-transparent">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Compliance & Transparency Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                  Відповідність і прозорість
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ми віримо в чесний і прозорий промо-маркетинг
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Відповідність регуляціям
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Усі наші промо-кампанії відповідають федеральним і штатним
                    нормам, мають чіткі офіційні правила та прозорий процес
                    обрання переможців.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Покупка не потрібна
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ми завжди надаємо альтернативні способи участі без покупки,
                    щоб наші програми залишалися законними промо-розіграшами.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Чіткі умови
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Наші Умови використання, Політика конфіденційності та
                    Офіційні правила легко доступні та написані простою мовою.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Захист даних
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ми серйозно ставимося до приватності даних і впроваджуємо
                    надійні заходи безпеки для захисту інформації учасників.
                  </p>
                </CardContent>
              </Card>
            </StaggerChildren>
            <div className="mt-8 text-center">
              <Button className="shadow-lg" asChild>
                <Link href="/uk/rules">Прочитати офіційні правила</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Що кажуть наші клієнти
              </h2>
            </div>
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardContent className="pt-6">
                  <p className="mb-4 text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <Badge variant="secondary">{testimonial.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Поширені запитання
              </h2>
              <p className="text-lg text-muted-foreground">
                Відповіді на типові запитання про наші послуги та програми
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-card/50 px-6 backdrop-blur-sm transition-all duration-300 hover:bg-card/70">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 text-primary-foreground">
        <ParallaxVideo src="/hero.mp4" overlayClassName="bg-black/55" />
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Готові почати?
              </h2>
              <p className="mb-8 text-lg opacity-90">
                Зв'яжіться з нами, щоб дізнатися, як Lucky Link LLC допоможе вам
                створювати залучаючі промо-кампанії з дотриманням вимог.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="shadow-lg group" asChild>
                  <Link href="/uk/contact">
                    Зв'язатися
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/uk/services">Дізнатися більше</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
