import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Rules",
  description:
    "Official rules for all Lucky Link LLC promotional giveaways. No purchase necessary. Void where prohibited.",
  alternates: {
    canonical: "/rules",
    languages: {
      en: "/rules",
      uk: "/uk/rules",
      "x-default": "/rules",
    },
  },
};

export default function RulesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
                <h1
                  className="mb-4 text-4xl font-bold tracking-tight md:text-5xl"
                  style={{
                    color: "#0E0E0E",
                    WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                    textShadow: "0 8px 30px rgba(0,0,0,0.25)",
                    filter: "drop-shadow(0 0 1px rgba(255,255,255,0.25))",
                  }}
                >
                  Official Rules
                </h1>
                <p
                  className="text-lg"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Official rules for Lucky Link LLC promotional giveaways
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="prose prose-sm max-w-none p-8">
                {/* Table of Contents */}
                <div className="mb-8 rounded-lg bg-muted/50 p-6">
                  <h2 className="mb-4 text-xl font-bold">Table of Contents</h2>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <a href="#sponsor" className="text-primary hover:underline">
                        1. Sponsor
                      </a>
                    </li>
                    <li>
                      <a href="#eligibility" className="text-primary hover:underline">
                        2. Eligibility
                      </a>
                    </li>
                    <li>
                      <a
                        href="#no-purchase"
                        className="text-primary hover:underline"
                      >
                        3. No Purchase Necessary
                      </a>
                    </li>
                    <li>
                      <a href="#entry-period" className="text-primary hover:underline">
                        4. Entry Period
                      </a>
                    </li>
                    <li>
                      <a href="#how-to-enter" className="text-primary hover:underline">
                        5. How to Enter
                      </a>
                    </li>
                    <li>
                      <a
                        href="#winner-selection"
                        className="text-primary hover:underline"
                      >
                        6. Winner Selection
                      </a>
                    </li>
                    <li>
                      <a href="#prizes" className="text-primary hover:underline">
                        7. Prizes
                      </a>
                    </li>
                    <li>
                      <a href="#odds" className="text-primary hover:underline">
                        8. Odds of Winning
                      </a>
                    </li>
                    <li>
                      <a
                        href="#taxes-responsibilities"
                        className="text-primary hover:underline"
                      >
                        9. Taxes and Responsibilities
                      </a>
                    </li>
                    <li>
                      <a
                        href="#publicity-release"
                        className="text-primary hover:underline"
                      >
                        10. Publicity Release
                      </a>
                    </li>
                    <li>
                      <a href="#disputes" className="text-primary hover:underline">
                        11. Disputes & Governing Law
                      </a>
                    </li>
                    <li>
                      <a href="#privacy" className="text-primary hover:underline">
                        12. Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="text-primary hover:underline">
                        13. Contact & Rules Request
                      </a>
                    </li>
                  </ol>
                </div>

                <p className="mb-4 text-xs italic">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>

                {/* 1. Sponsor */}
                <section id="sponsor" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">1. Sponsor</h2>
                  <p className="mb-2">
                    <strong>Sponsor:</strong> Lucky Link LLC
                  </p>
                  <p className="mb-2">
                    <strong>Location:</strong> Wyoming, USA
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The promotional giveaways described in these Official Rules are
                    sponsored by Lucky Link LLC, a Wyoming limited liability company.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 2. Eligibility */}
                <section id="eligibility" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">2. Eligibility</h2>
                  <p className="mb-4">
                    These promotional giveaways are open only to legal residents of
                    the 50 United States and the District of Columbia who are 18
                    years of age or older as of the date of entry.
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">
                    Eligibility Restrictions:
                  </h3>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Employees, officers, directors, agents, and representatives
                      of Sponsor and its parent companies, affiliates, subsidiaries,
                      advertising, promotion, and fulfillment agencies, and legal
                      advisors are NOT eligible to participate.
                    </li>
                    <li>
                      Immediate family members (spouse, parent, child, sibling, and
                      their respective spouses, regardless of where they live) or
                      persons living in the same household of such individuals are
                      NOT eligible to participate.
                    </li>
                    <li>
                      Participation constitutes entrant&apos;s full and unconditional
                      agreement to these Official Rules and Sponsor&apos;s decisions,
                      which are final and binding in all matters related to the
                      giveaway.
                    </li>
                  </ul>
                  <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 dark:bg-yellow-900/20 dark:border-yellow-800">
                    <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200">
                      VOID WHERE PROHIBITED BY LAW
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                {/* 3. No Purchase Necessary */}
                <section id="no-purchase" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    3. No Purchase Necessary / Alternative Method of Entry
                  </h2>
                  <p className="mb-4">
                    <strong>NO PURCHASE IS NECESSARY TO ENTER OR WIN.</strong>{" "}
                    A purchase will not increase your chances of winning.
                  </p>
                  <p className="mb-4">
                    These promotional giveaways are NOT lotteries, gambling, betting
                    schemes, or any form of &quot;pay to win&quot; program. They are legitimate
                    promotional marketing tools used by brands to engage with
                    customers.
                  </p>
                  <h3 className="mb-2 text-lg font-semibold">
                    Alternative Method of Entry (AMOE):
                  </h3>
                  <p className="mb-4">
                    Sponsor provides an alternative method of entry that does not
                    require a purchase. To enter without making a purchase, follow
                    the mail-in instructions below:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2 font-semibold">Mail-in Entry:</p>
                    <ol className="list-inside list-decimal space-y-2 text-sm">
                      <li>Hand-print your name, complete address, email, and phone number on a 3&quot; x 5&quot; card</li>
                      <li>Mail the card in a sealed envelope to: Lucky Link LLC, Attn: Promotional Entries, [Address Placeholder]</li>
                      <li>
                        One entry per outer envelope. Multiple entries in the same
                        envelope will be disqualified.
                      </li>
                      <li>
                        Mail-in entries must be postmarked by the entry deadline and
                        received by the date specified in the specific giveaway
                        materials.
                      </li>
                    </ol>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    All entries (paid and AMOE) have equal chances of winning.
                    Duplicate entries from the same person will be disqualified.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 4. Entry Period */}
                <section id="entry-period" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">4. Entry Period</h2>
                  <p className="mb-4">
                    The entry period for each promotional giveaway will be specified
                    in the specific program materials. Entries received outside the
                    designated entry period will be disqualified.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sponsor&apos;s computer is the official time-keeping device for
                    the giveaway.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 5. How to Enter */}
                <section id="how-to-enter" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">5. How to Enter</h2>
                  <p className="mb-4">
                    There are two methods of entry. Choose one:
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">
                    Method 1: Purchase-Based Entry (Optional)
                  </h3>
                  <p className="mb-4">
                    Make a qualifying purchase from a participating partner brand
                    during the entry period. You will receive a specified number of
                    entries based on the purchase amount or product type. This is
                    an optional method of entry.
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">
                    Method 2: Alternative Method of Entry (AMOE) - No Purchase Required
                  </h3>
                  <p className="mb-4">
                    Follow the mail-in instructions in Section 3 above to enter
                    without making a purchase.
                  </p>

                  <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 dark:bg-blue-900/20 dark:border-blue-800">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                      IMPORTANT: Both methods of entry have equal chances of
                      winning. Purchasing does not increase your odds.
                    </p>
                  </div>
                </section>

                <Separator className="my-6" />

                {/* 6. Winner Selection */}
                <section id="winner-selection" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">6. Winner Selection</h2>
                  <p className="mb-4">
                    Winners will be selected in a random drawing from among all
                    eligible entries received. The random drawing will be conducted
                    under the supervision of Sponsor, whose decisions are final.
                  </p>
                  <p className="mb-4">
                    Odds of winning depend on the total number of eligible entries
                    received. The specific prize quantities and values will be
                    detailed in the individual giveaway materials.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Winners will be notified via email, phone, or mail within X days
                    of the drawing. Failure to respond to prize notification within
                    X days may result in disqualification and selection of an
                    alternate winner.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 7. Prizes */}
                <section id="prizes" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">7. Prizes</h2>
                  <p className="mb-4">
                    Prizes vary by specific promotional giveaway and will be detailed
                    in the program materials. Examples may include:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Gift cards</li>
                    <li>Merchandise</li>
                    <li>Experiences</li>
                    <li>Electronic devices</li>
                    <li>Cash equivalents</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Prize Conditions:</strong>
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Prizes are non-transferable and cannot be exchanged for cash
                      except at Sponsor&apos;s sole discretion.
                    </li>
                    <li>
                      Sponsor reserves the right to substitute a prize of equal or
                      greater value if the advertised prize becomes unavailable.
                    </li>
                    <li>
                      Prize details and availability are subject to change at
                      Sponsor&apos;s sole discretion.
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                {/* 8. Odds */}
                <section id="odds" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">8. Odds of Winning</h2>
                  <p className="mb-4">
                    Odds of winning depend on the total number of eligible entries
                    received for each specific promotional giveaway.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sponsor does not guarantee a minimum number of participants or
                    entries for any giveaway.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 9. Taxes */}
                <section id="taxes-responsibilities" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    9. Taxes and Responsibilities
                  </h2>
                  <p className="mb-4">
                    <strong>Taxes:</strong> Winners are solely responsible for all
                    federal, state, and local taxes, and any other costs or expenses
                    associated with prize acceptance and use.
                  </p>
                  <p className="mb-4">
                    <strong>Value Reporting:</strong> Winners may receive an IRS
                    Form 1099 for the prize value if required by law.
                  </p>
                  <p className="mb-4">
                    <strong>Verification:</strong> All prize claims are subject to
                    verification. Winner may be required to complete and return an
                    Affidavit of Eligibility, Liability Release, and (where legal) a
                    Publicity Release within X days of notification.
                  </p>
                  <p className="mb-4">
                    <strong>Disqualification:</strong> Sponsor reserves the right to
                    disqualify any winner who fails to comply with these Official
                    Rules or who provides false or misleading information.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 10. Publicity Release */}
                <section id="publicity-release" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">10. Publicity Release</h2>
                  <p className="mb-4">
                    Except where prohibited by law, participation in the giveaway
                    constitutes winner&apos;s consent to Sponsor&apos;s use of their
                    name, likeness, photograph, voice, opinions, and/or hometown and
                    state for promotional purposes in any media, worldwide, without
                    further payment or consideration.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 11. Disputes */}
                <section id="disputes" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    11. Disputes & Governing Law
                  </h2>
                  <p className="mb-4">
                    <strong>Governing Law:</strong> These Official Rules shall be
                    governed by and construed in accordance with the laws of the
                    State of Wyoming, without regard to its conflict of law
                    provisions.
                  </p>
                  <p className="mb-4">
                    <strong>Dispute Resolution:</strong> Any disputes arising under
                    or in connection with these Official Rules shall be resolved
                    through binding arbitration, except where prohibited by law.
                  </p>
                  <p className="mb-4">
                    <strong>Limitations:</strong> By entering, You agree that: (1)
                    any and all disputes, claims, and causes of action arising out of
                    or connected with the giveaway shall be resolved individually,
                    without resort to any form of class action; (2) any and all
                    claims, judgments, and awards shall be limited to actual out-of-
                    pocket costs incurred, but in no event attorney&apos;s fees; and
                    (3) under no circumstances will entrant be permitted to obtain
                    awards for, and entrant hereby waives all rights to claim,
                    indirect, punitive, incidental, and consequential damages.
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 12. Privacy */}
                <section id="privacy" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">12. Privacy</h2>
                  <p className="mb-4">
                    Information submitted with an entry is subject to the Privacy
                    Policy stated on the Sponsor website. By participating in the
                    giveaway, you agree to the collection and use of your personal
                    information as described in the Privacy Policy.
                  </p>
                  <p>
                    <Link href="/privacy" className="text-primary hover:underline">
                      View Privacy Policy
                    </Link>
                  </p>
                </section>

                <Separator className="my-6" />

                {/* 13. Contact */}
                <section id="contact" className="mb-8 scroll-mt-20">
                  <h2 className="mb-4 text-2xl font-bold">
                    13. Contact & Rules Request
                  </h2>
                  <p className="mb-4">
                    To request a copy of these Official Rules by mail, or to contact
                    Sponsor with questions about the giveaway:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2">
                      <strong>Email (Business & Compliance):</strong>{" "}
                      <a
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        sup@luckylink.click
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Email (Support):</strong>{" "}
                      <a
                        href="/contact"
                        className="text-primary hover:underline"
                      >
                        sup@luckylink.click
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Mail:</strong> Lucky Link LLC, [Address Placeholder],
                      Wyoming, USA
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Please allow 2-4 weeks for delivery of mailed rule requests.
                  </p>
                </section>

                {/* Footer Notice */}
                <div className="mt-12 rounded-lg bg-muted/50 p-6">
                  <p className="mb-2 text-center font-semibold">
                    NO PURCHASE NECESSARY TO ENTER OR WIN. VOID WHERE PROHIBITED.
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    &copy; {currentYear} Lucky Link LLC. All rights reserved.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
