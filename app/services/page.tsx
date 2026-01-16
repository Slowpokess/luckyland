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
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_DISCLOSURES } from "@/lib/constants/legal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive digital advertising and promotional services to help your business grow. Campaign strategy, traffic acquisition, web development, and analytics.",
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
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Our Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Digital Advertising & Promotional Services
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Comprehensive solutions to help your business create engaging,
              compliant promotional campaigns that drive results.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Comprehensive Service Offerings
            </h2>
            <p className="text-lg text-muted-foreground">
              End-to-end promotional marketing services tailored to your business
              needs
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto,1fr]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary md:h-20 md:w-20">
                    {service.icon}
                  </div>
                  <div className="space-y-4 p-6">
                    <div>
                      <CardTitle className="mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="mb-2 font-semibold text-sm">
                          Key Outcomes
                        </h4>
                        <ul className="space-y-1">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-2 font-semibold text-sm">
                          Engagement Models
                        </h4>
                        <ul className="space-y-1">
                          {service.engagementModels.map((model, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                              <span>{model}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Our Engagement Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A clear, transparent approach to delivering promotional marketing
              services
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-4">
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
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {phase.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Launch Your Campaign?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
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
            <p className="mt-8 text-sm text-muted-foreground">
              {LEGAL_DISCLOSURES.npn}
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
