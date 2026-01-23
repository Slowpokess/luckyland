import Link from "next/link";
import { ArrowRight, Check, Shield, Users, TrendingUp, Sparkles } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerChildren } from "@/components/animations/fade-in";
import { ParallaxVideo } from "@/components/animations/parallax-video";
import { LazyVideo } from "@/components/media/lazy-video";
import { LEGAL_DISCLOSURES, BUSINESS_DESCRIPTION } from "@/lib/constants/legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucky Link LLC - Digital Advertising & Promotional Services",
  description:
    "Digital advertising & promotional services platform providing rewards-based engagement programs and marketing solutions. No purchase necessary. Void where prohibited.",
  alternates: {
    canonical: "/",
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
      title: "Campaign Strategy",
      description: "Data-driven promotional campaign planning and execution",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Audience Engagement",
      description: "Build meaningful connections with your target audience",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance-First",
      description: "All campaigns adhere to regulatory requirements and best practices",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Consultation",
      description: "We understand your business goals and target audience",
    },
    {
      step: "02",
      title: "Strategy",
      description: "We design a custom promotional campaign tailored to your needs",
    },
    {
      step: "03",
      title: "Execution",
      description: "We launch and manage your campaign with continuous optimization",
    },
    {
      step: "04",
      title: "Results",
      description: "We provide detailed analytics and insights on campaign performance",
    },
  ];

  const testimonials = [
    {
      content: "Lucky Link LLC helped us create a promotional campaign that drove significant customer engagement while maintaining full compliance.",
      type: "Client Testimonial",
    },
    {
      content: "Professional, transparent, and results-driven. Their team understands the importance of lawful promotional marketing.",
      type: "Client Testimonial",
    },
  ];

  const faqs = [
    {
      question: "What services does Lucky Link LLC provide?",
      answer: "Lucky Link LLC provides digital advertising and promotional services, including campaign strategy, audience engagement programs, and compliance-first marketing solutions.",
    },
    {
      question: "What is a promotional giveaway?",
      answer: "A promotional giveaway is a marketing tool used to engage customers and build brand awareness. It is not a lottery or gambling - no purchase is necessary to enter or win. See our Official Rules for details.",
    },
    {
      question: "Is there a purchase required to participate?",
      answer: `No. ${LEGAL_DISCLOSURES.en.npnShort} Our programs always provide alternative methods of entry that don't require a purchase.`,
    },
    {
      question: "How do you ensure compliance?",
      answer: "We work with legal experts to ensure all promotional activities comply with federal and state regulations. Our official rules are clear, transparent, and accessible.",
    },
    {
      question: "Who can participate in promotional programs?",
      answer: "Eligibility varies by program. Generally, participants must be legal residents of eligible jurisdictions and meet minimum age requirements. See specific program rules for details.",
    },
    {
      question: "How are winners selected?",
      answer: "Winners are selected through random drawing or other fair methods as described in our Official Rules. The process is transparent and overseen by independent administrators when required.",
    },
    {
      question: "What happens to my personal data?",
      answer: "We take data privacy seriously. Please review our Privacy Policy for detailed information about how we collect, use, and protect your information.",
    },
    {
      question: "How can I contact Lucky Link LLC?",
      answer: "You can reach us through our Contact page. We're available to answer questions about our services and promotional programs.",
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <LazyVideo
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
                    Digital Advertising & Promotional Services
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
                    Promotional Marketing & Rewards Platform
                  </h1>
                  <p
                    className="text-lg md:text-xl"
                    style={{
                      color: "#3A3A3A",
                      textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                    }}
                  >
                    {BUSINESS_DESCRIPTION.en.primary}. We specialize in compliance-first
                    promotional campaigns that drive engagement while maintaining
                    transparency and regulatory adherence.
                  </p>
                </div>
                <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="group shadow-lg" asChild>
                    <Link href="/services">
                      Explore Programs
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="backdrop-blur-xl" asChild>
                    <Link href="/contact">Contact Sales</Link>
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
                    {LEGAL_DISCLOSURES.en.npn}
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
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive promotional marketing services designed to help your
                business grow
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
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                A simple, transparent process to launch your promotional campaign
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
                  Compliance & Transparency
                </h2>
                <p className="text-lg text-muted-foreground">
                  We believe in clear, honest promotional marketing
                </p>
              </div>
            </FadeIn>
            <StaggerChildren className="grid gap-6 md:grid-cols-2">
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Regulatory Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All our promotional campaigns adhere to federal and state
                    regulations, with clear official rules and transparent winner
                    selection processes.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    No Purchase Necessary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We always provide alternative methods of entry that don&apos;t
                    require a purchase, ensuring our programs remain lawful
                    promotional giveaways.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Clear Terms & Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our Terms of Service, Privacy Policy, and Official Rules are
                    easily accessible and written in plain language.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Data Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We take data privacy seriously and implement robust security
                    measures to protect participant information.
                  </p>
                </CardContent>
              </Card>
            </StaggerChildren>
            <div className="mt-8 text-center">
              <Button className="shadow-lg" asChild>
                <Link href="/rules">Read Official Rules</Link>
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
                What Our Clients Say
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
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions about our services and programs
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
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg opacity-90">
                Contact us today to learn how Lucky Link LLC can help you create
                engaging, compliant promotional campaigns.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="shadow-lg group" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
