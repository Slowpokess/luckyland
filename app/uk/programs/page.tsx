import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_DISCLOSURES } from "@/lib/constants/legal";
import { FadeIn, StaggerChildren } from "@/components/animations/fade-in";
import { ParallaxVideo } from "@/components/animations/parallax-video";

export const metadata: Metadata = {
  title: "Програми",
  description:
    "Перегляньте наші програми промо-розіграшів та можливості залучення на основі винагород. Покупка не потрібна. Недійсно там, де заборонено.",
  alternates: {
    canonical: "/uk/programs",
    languages: {
      en: "/programs",
      uk: "/uk/programs",
      "x-default": "/programs",
    },
  },
};

export default function ProgramsPage() {
  const programs = [
    {
      id: "monthly-rewards",
      name: "Щомісячна програма винагород",
      description:
        "Взаємодійте з брендами-партнерами через промо-активності та отримуйте заявки на щомісячні розіграші призів.",
      eligibility:
        "Відкрита для законних резидентів 50 штатів США та округу Колумбія, віком від 18 років.",
      dates: "Щомісячна програма на постійній основі",
      status: "active" as const,
      prizes: "Подарункові картки, мерч і враження",
      rulesLink: "/uk/rules#monthly-rewards",
    },
    {
      id: "brand-ambassador",
      name: "Кампанія бренд-амбасадорів",
      description:
        "Беріть участь у промо-активностях партнерських брендів і отримуйте доступ до ексклюзивних винагород.",
      eligibility:
        "Відкрита для законних резидентів 50 штатів США та округу Колумбія, віком від 21 року.",
      dates: "Квартальні кампанії",
      status: "active" as const,
      prizes: "Преміальний мерч і враження",
      rulesLink: "/uk/rules#brand-ambassador",
    },
    {
      id: "customer-appreciation",
      name: "Розіграш подяки клієнтам",
      description:
        "Спеціальні промо-розіграші протягом року для винагороди за залучення.",
      eligibility:
        "Відкрита для законних резидентів 50 штатів США та округу Колумбія, віком від 18 років.",
      dates: "Різні дати протягом року",
      status: "upcoming" as const,
      prizes: "Залежить від події",
      rulesLink: "/uk/rules#customer-appreciation",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Активна</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Скоро</Badge>;
      case "ended":
        return <Badge variant="outline">Завершено</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <ParallaxVideo src="/program_up.mp4" overlayClassName="bg-white/30" />
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
                  Промо-програми
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
                  Промо-розіграші та програми винагород
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Дізнайтесь про наші програми залучення на основі винагород. Це
                  промо-маркетингові кампанії для підвищення впізнаваності бренду та
                  залучення клієнтів.
                </p>
              </div>
              <div className="mb-8 mt-8 rounded-lg bg-background/50 p-6 backdrop-blur-sm">
                <p
                  className="mb-2 font-semibold text-lg"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Важливо: покупка не потрібна
                </p>
                <p
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  {LEGAL_DISCLOSURES.uk.npn} Див. Офіційні правила щодо альтернативних
                  способів участі (AMOE).
                </p>
              </div>
              <Button size="lg" asChild>
                <Link href="/uk/rules">
                  Прочитати офіційні правила
                  <FileText className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-4 text-2xl font-bold">Розуміння промо-розіграшів</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Наші промо-розіграші — це <strong>маркетингові інструменти</strong>,{" "}
                  які бренди використовують для залучення клієнтів і підвищення
                  впізнаваності. Вони{" "}
                  <strong>
                    не є азартними іграми, ставками, лотереями чи будь-якою формою
                    &quot;pay to win&quot;
                  </strong>{" "}
                  схем.
                </p>
                <StaggerChildren className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-background p-4 transition-all duration-300 hover:shadow-lg">
                    <h3 className="mb-2 font-semibold text-foreground">
                      Покупка не потрібна
                    </h3>
                    <p className="text-sm">
                      Ви можете брати участь у розіграшах без покупки. Доступні
                      альтернативні способи участі.
                    </p>
                  </div>
                  <div className="rounded-lg bg-background p-4 transition-all duration-300 hover:shadow-lg">
                    <h3 className="mb-2 font-semibold text-foreground">
                      Маркетинговий інструмент
                    </h3>
                    <p className="text-sm">
                      Це легітимні промо-кампанії, які бренди використовують для
                      підвищення залучення клієнтів.
                    </p>
                  </div>
                  <div className="rounded-lg bg-background p-4 transition-all duration-300 hover:shadow-lg">
                    <h3 className="mb-2 font-semibold text-foreground">
                      Відповідність і прозорість
                    </h3>
                    <p className="text-sm">
                      Усі програми відповідають чинним законам і регуляціям. Офіційні
                      правила опубліковані чітко та прозоро.
                    </p>
                  </div>
                </StaggerChildren>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="mb-4 bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-3xl font-bold tracking-tight md:text-4xl">
                Доступні програми
              </h2>
              <p className="text-lg text-muted-foreground">
                Перегляньте поточні та майбутні промо-програми
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="mx-auto grid max-w-5xl gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <CardTitle className="text-2xl">{program.name}</CardTitle>
                        {getStatusBadge(program.status)}
                      </div>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Умови участі</p>
                        <p className="text-sm text-muted-foreground">
                          {program.eligibility}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Дати</p>
                        <p className="text-sm text-muted-foreground">
                          {program.dates}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4 transition-colors duration-300 group-hover:bg-muted/70">
                    <p className="mb-1 text-sm font-semibold">Призи</p>
                    <p className="text-sm text-muted-foreground">
                      {program.prizes}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      {LEGAL_DISCLOSURES.uk.npnShort}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={program.rulesLink}>
                        <FileText className="mr-2 h-4 w-4" />
                        Прочитати офіційні правила
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How to Enter Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Як взяти участь
              </h2>
              <p className="text-lg text-muted-foreground">
                Кілька способів участі в наших промо-програмах
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Платний спосіб участі</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Здійсніть відповідну покупку в одного з брендів-партнерів, щоб
                    отримати заявки в промо-розіграш. Це необов'язковий спосіб участі.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Примітка:</strong> Покупка не збільшує шанси на виграш.
                    Доступні альтернативні способи участі.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Альтернативний спосіб участі (AMOE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Беріть участь без покупки, дотримуючись інструкцій в Офіційних
                    правилах. Зазвичай це передбачає поштову заявку або онлайн-форму.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Важливо:</strong> Усі заявки (платні та AMOE) мають
                    рівні шанси на виграш.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/program_down.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-white/55" aria-hidden="true" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Є запитання щодо наших програм?
              </h2>
              <p className="text-lg text-muted-foreground">
                Ми готові допомогти. Звертайтеся за додатковою інформацією про
                промо-програми або щоб отримати Офіційні правила поштою.
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
                <Link href="/uk/rules">Переглянути офіційні правила</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
