import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { LEGAL_DISCLOSURES } from "@/lib/constants/legal";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore our promotional giveaway programs and rewards-based engagement opportunities. No purchase necessary. Void where prohibited.",
};

export default function ProgramsPage() {
  const programs = [
    {
      id: "monthly-rewards",
      name: "Monthly Rewards Program",
      description:
        "Engage with our partner brands through promotional activities and earn entries into monthly prize drawings.",
      eligibility: "Open to legal residents of the 50 United States and D.C., 18 years or older.",
      dates: "Ongoing monthly program",
      status: "active" as const,
      prizes: "Gift cards, merchandise, and experiences",
      rulesLink: "/rules#monthly-rewards",
    },
    {
      id: "brand-ambassador",
      name: "Brand Ambassador Campaign",
      description:
        "Participate in promotional activities for partner brands and qualify for exclusive reward opportunities.",
      eligibility: "Open to legal residents of the 50 United States and D.C., 21 years or older.",
      dates: "Quarterly campaigns",
      status: "active" as const,
      prizes: "Premium merchandise and experiences",
      rulesLink: "/rules#brand-ambassador",
    },
    {
      id: "customer-appreciation",
      name: "Customer Appreciation Giveaway",
      description:
        "Special promotional giveaways hosted throughout the year to reward customer engagement.",
      eligibility: "Open to legal residents of the 50 United States and D.C., 18 years or older.",
      dates: "Various dates throughout the year",
      status: "upcoming" as const,
      prizes: "Varies by event",
      rulesLink: "/rules#customer-appreciation",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active Now</Badge>;
      case "upcoming":
        return <Badge variant="secondary">Coming Soon</Badge>;
      case "ended":
        return <Badge variant="outline">Ended</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4" variant="secondary">
              Promotional Programs
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Promotional Giveaways & Rewards Programs
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Discover our reward-based engagement programs. These are promotional
              marketing campaigns designed to increase brand awareness and customer
              engagement.
            </p>
            <div className="mb-8 rounded-lg bg-background/50 p-6">
              <p className="mb-2 font-semibold text-lg">
                Important: No Purchase Necessary
              </p>
              <p className="text-muted-foreground">
                {LEGAL_DISCLOSURES.npn} See Official Rules for alternative
                methods of entry (AMOE).
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/rules">
                Read Official Rules
                <FileText className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-2xl font-bold">Understanding Promotional Giveaways</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our promotional giveaways are <strong>marketing tools</strong>{" "}
                used by brands to engage with customers and build awareness. They
                are{" "}
                <strong>
                  not gambling, betting, lotteries, or any form of &quot;pay to win&quot;
                </strong>{" "}
                scheme.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-background p-4">
                  <h3 className="mb-2 font-semibold text-foreground">
                    No Purchase Required
                  </h3>
                  <p className="text-sm">
                    You can enter any giveaway without making a purchase. Alternative
                    methods of entry are available.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <h3 className="mb-2 font-semibold text-foreground">
                    Marketing Tool
                  </h3>
                  <p className="text-sm">
                    These are legitimate promotional campaigns used by brands to
                    increase customer engagement.
                  </p>
                </div>
                <div className="rounded-lg bg-background p-4">
                  <h3 className="mb-2 font-semibold text-foreground">
                    Compliant & Transparent
                  </h3>
                  <p className="text-sm">
                    All programs follow applicable laws and regulations. Official
                    rules are clearly posted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Available Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse our current and upcoming promotional programs
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="overflow-hidden">
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
                        <p className="text-sm font-semibold">Eligibility</p>
                        <p className="text-sm text-muted-foreground">
                          {program.eligibility}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Dates</p>
                        <p className="text-sm text-muted-foreground">
                          {program.dates}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-1 text-sm font-semibold">Prizes</p>
                    <p className="text-sm text-muted-foreground">
                      {program.prizes}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      {LEGAL_DISCLOSURES.npnShort}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={program.rulesLink}>
                        <FileText className="mr-2 h-4 w-4" />
                        Read Official Rules
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Enter Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                How to Enter
              </h2>
              <p className="text-lg text-muted-foreground">
                Multiple ways to participate in our promotional programs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Paid Method of Entry</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make a qualifying purchase from one of our partner brands to
                    receive entries into the promotional giveaway. This is an
                    optional method of entry.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Note:</strong> Purchasing does not increase your chances
                    of winning. Alternative methods of entry are available.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alternative Method of Entry (AMOE)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enter without making a purchase by following the instructions in
                    the Official Rules. This typically involves submitting a mail-in
                    entry or online form.
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    <strong>Important:</strong> All entries (paid and AMOE) have
                    equal chances of winning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Questions About Our Programs?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We&apos;re here to help. Contact us for more information about our
              promotional programs or to request Official Rules by mail.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/rules">View Official Rules</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
