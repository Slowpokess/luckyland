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

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lucky Link LLC - a Wyoming-based digital advertising and promotional services company committed to compliance and transparency.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance-First",
      description:
        "We prioritize regulatory compliance in all our promotional campaigns, ensuring transparency and legal adherence.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer-Centric",
      description:
        "Our clients and their customers are at the heart of everything we do. We build lasting relationships through trust and results.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results-Driven",
      description:
        "We focus on delivering measurable outcomes that drive business growth and customer engagement.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Integrity",
      description:
        "We operate with honesty and transparency, maintaining the highest ethical standards in all our business practices.",
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              About Us
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Digital Advertising & Promotional Services
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {BUSINESS_DESCRIPTION.primary}. We specialize in compliance-first
              promotional campaigns that drive engagement while maintaining
              transparency and regulatory adherence.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground">
                A trusted partner in digital advertising and promotional marketing
              </p>
            </div>

            <div className="mb-8 rounded-lg bg-muted/50 p-8">
              <p className="mb-4 text-lg leading-relaxed">
                <strong>Lucky Link LLC</strong> is a Wyoming limited liability
                company specializing in digital advertising and promotional services.
                We help businesses create and manage promotional campaigns that
                drive customer engagement through legitimate, lawful marketing
                strategies.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Founded with a commitment to{" "}
                <strong>compliance and transparency</strong>, we believe that
                promotional marketing should be clear, honest, and respectful of
                consumer protection laws. Our campaigns are designed to build
                brand awareness and customer loyalty while maintaining the highest
                standards of regulatory adherence.
              </p>
              <p className="text-lg leading-relaxed">
                Unlike gambling or betting schemes, our promotional giveaways are
                legitimate marketing tools that always offer{" "}
                <strong>alternative methods of entry</strong> (AMOE) and never
                require a purchase to participate. This commitment ensures our
                programs remain lawful promotional giveaways in all jurisdictions
                where we operate.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold">Company Details</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Location</p>
                      <p className="text-muted-foreground">
                        {SITE_CONFIG.company.state}, {SITE_CONFIG.company.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Support</p>
                      <p className="text-muted-foreground">
                        {SITE_CONFIG.company.supportEmail}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Our Mission
              </h2>
            </div>

            <div className="mb-8 rounded-lg bg-background p-8">
              <p className="mb-6 text-lg leading-relaxed">
                To provide businesses with{" "}
                <strong>
                  compliant, transparent, and effective promotional marketing
                  solutions
                </strong>{" "}
                that drive customer engagement while maintaining the highest
                standards of regulatory adherence and consumer protection.
              </p>

              <h3 className="mb-4 text-xl font-bold">What We Stand For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Transparency:</strong> Clear terms, honest
                    communication, and no hidden agendas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Compliance:</strong> Adherence to all applicable laws
                    and regulations in every campaign we manage
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Fairness:</strong> Equal opportunity for all
                    participants, with no purchase necessary and alternative
                    methods of entry always available
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Innovation:</strong> Creative, data-driven approaches
                    to promotional marketing that deliver measurable results
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <p>
                    <strong>Responsibility:</strong> Ethical business practices
                    that respect consumer privacy and data protection
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
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive promotional marketing services
              </p>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Campaign Strategy & Management
                  </h3>
                  <p className="text-muted-foreground">
                    We develop comprehensive promotional campaign strategies
                    aligned with your business objectives, managing execution from
                    start to finish.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Traffic Acquisition & Optimization
                  </h3>
                  <p className="text-muted-foreground">
                    We drive qualified traffic to your promotional campaigns through
                    paid media, organic channels, and strategic partnerships.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Promotional Website Development
                  </h3>
                  <p className="text-muted-foreground">
                    We build custom promotional landing pages and campaign
                    microsites optimized for conversion and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold">
                    Analytics & Reporting
                  </h3>
                  <p className="text-muted-foreground">
                    We provide detailed analytics and reporting to measure campaign
                    performance and optimize for better results.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Our Commitment to Compliance
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe in doing things the right way
              </p>
            </div>

            <div className="rounded-lg bg-primary/5 p-8">
              <p className="mb-6 text-lg leading-relaxed">
                At Lucky Link LLC, we understand that the promotional marketing
                industry requires careful attention to legal and regulatory
                requirements. We are committed to maintaining full compliance with
                all federal and state laws governing promotional giveaways,
                advertising practices, and consumer protection.
              </p>

              <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Compliance Practices</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Clear Official Rules for all promotions</li>
                    <li>✓ No purchase necessary (NPN) statements</li>
                    <li>✓ Alternative methods of entry (AMOE)</li>
                    <li>✓ Transparent winner selection processes</li>
                    <li>✓ Proper disclosure of all material terms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Our Standards</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Regular legal review of all campaigns</li>
                    <li>✓ Data protection and privacy compliance</li>
                    <li>✓ Honest and transparent marketing</li>
                    <li>✓ No deceptive or misleading practices</li>
                    <li>✓ Respect for consumer rights</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button variant="outline" asChild>
                  <Link href="/rules">View Official Rules</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/terms">Terms of Service</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Let&apos;s discuss how Lucky Link LLC can help you create
              engaging, compliant promotional campaigns that drive results.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
