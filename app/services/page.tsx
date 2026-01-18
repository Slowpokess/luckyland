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
  title: "Services",
  description:
    "Comprehensive digital advertising and promotional services to help your business grow. Campaign strategy, traffic acquisition, web development, and analytics.",
  alternates: {
    canonical: "/services",
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
      title: "Campaign Strategy & Management",
      description:
        "We develop comprehensive promotional campaign strategies aligned with your business objectives and target audience.",
      outcomes: [
        "Increased brand awareness",
        "Higher customer engagement rates",
        "Measurable ROI on promotional spend",
        "Compliance with all regulations",
      ],
      engagementModels: [
        "Fixed-fee project planning",
        "Monthly campaign management",
        "Performance-based pricing",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Traffic Acquisition & Optimization",
      description:
        "We drive qualified traffic to your promotional campaigns through paid media, organic channels, and strategic partnerships.",
      outcomes: [
        "Targeted audience reach",
        "Cost-effective customer acquisition",
        "Multi-channel campaign execution",
        "Continuous performance optimization",
      ],
      engagementModels: [
        "Pay-per-click management",
        "Monthly retainer",
        "Hybrid pricing models",
      ],
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Promotional Website Development",
      description:
        "We build custom promotional landing pages and campaign microsites optimized for conversion and compliance.",
      outcomes: [
        "High-converting landing pages",
        "Mobile-responsive design",
        "Fast loading times",
        "Integrated analytics tracking",
      ],
      engagementModels: [
        "Project-based pricing",
        "Hourly development rates",
        "Ongoing maintenance packages",
      ],
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description:
        "We provide detailed analytics and reporting to measure campaign performance and optimize for better results.",
      outcomes: [
        "Real-time campaign dashboards",
        "Comprehensive performance reports",
        "Data-driven insights",
        "ROI analysis and optimization",
      ],
      engagementModels: [
        "Monthly reporting packages",
        "Custom analytics setup",
        "Quarterly business reviews",
      ],
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Partner Integrations",
      description:
        "We connect you with our network of promotional partners, platforms, and technology providers.",
      outcomes: [
        "Access to promotional platforms",
        "Technology integrations",
        "Co-marketing opportunities",
        "White-glove partnership management",
      ],
      engagementModels: [
        "Partnership introductions",
        "Managed integration services",
        "Revenue-sharing models",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance Audits & Risk Review",
      description:
        "We audit campaign mechanics, disclosures, and entry flows to reduce regulatory risk.",
      outcomes: [
        "Clear disclosures and NPN placement",
        "AMOE alignment and documentation",
        "Rules readiness checklists",
        "Risk mitigation recommendations",
      ],
      engagementModels: [
        "One-time compliance audit",
        "Pre-launch review",
        "Ongoing compliance advisory",
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
                  Our Services
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
                  Digital Advertising & Promotional Services
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Comprehensive solutions to help your business create engaging,
                  compliant promotional campaigns that drive results.
                </p>
              </div>
              <Button
                size="lg"
                className="mt-8 bg-[#111111] text-white hover:bg-[#1A1A1A]"
                asChild
              >
                <Link href="/contact">
                  Request a Consultation
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
                Comprehensive Service Offerings
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end promotional marketing services tailored to your business
                needs
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
                        Key Outcomes
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
                        Engagement Models
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
                Our Engagement Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A clear, transparent approach to delivering promotional marketing
                services
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto max-w-4xl">
            <StaggerChildren className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description: "We learn about your business, goals, and audience",
                },
                {
                  step: "2",
                  title: "Strategy",
                  description: "We create a tailored promotional campaign plan",
                },
                {
                  step: "3",
                  title: "Execution",
                  description: "We implement and manage your campaign",
                },
                {
                  step: "4",
                  title: "Optimization",
                  description: "We continuously improve based on performance",
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
                Ready to Launch Your Campaign?
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Contact us today to discuss how Lucky Link LLC can help you achieve
                your promotional marketing goals.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/programs">View Programs</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/80">
                {LEGAL_DISCLOSURES.en.npn}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  );
}
