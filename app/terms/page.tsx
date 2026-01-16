import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Lucky Link LLC website and services. By using our website, you agree to these terms.",
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <PageWrapper>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using our website
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Last Updated: {currentDate}
              </p>
            </div>

            <Card>
              <CardContent className="prose prose-sm max-w-none p-8">
                <p className="mb-6">
                  Welcome to Lucky Link LLC (&quot;Company,&quot; &quot;we,&quot;
                  &quot;us,&quot; or &quot;our&quot;). By accessing or using our
                  website and services, you agree to be bound by these Terms of
                  Service (&quot;Terms&quot;). If you do not agree to these Terms,
                  please do not use our website.
                </p>

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using this website, you accept and agree to be
                    bound by these Terms and our Privacy Policy. If you do not agree
                    to abide by these Terms, you are not authorized to use or access
                    this website.
                  </p>
                  <p>
                    These Terms constitute a legally binding agreement between you
                    and Lucky Link LLC. We reserve the right to modify these Terms
                    at any time, and your continued use of the website following
                    any changes constitutes your acceptance of the modified Terms.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">2. Description of Services</h2>
                  <p className="mb-4">
                    Lucky Link LLC provides digital advertising and promotional
                    services through our website. Our services include:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Information about promotional marketing campaigns and
                      giveaways
                    </li>
                    <li>Campaign strategy and management services</li>
                    <li>Traffic acquisition and optimization</li>
                    <li>Analytics and reporting</li>
                    <li>Partner integrations</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    We reserve the right to modify, suspend, or discontinue any
                    aspect of our services at any time without prior notice.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">3. User Eligibility</h2>
                  <p className="mb-4">
                    You must be at least 18 years old to use this website. By using
                    this website, you represent and warrant that:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>You are at least 18 years of age</li>
                    <li>You are legally capable of entering into a binding contract</li>
                    <li>
                      You will comply with these Terms and all applicable laws and
                      regulations
                    </li>
                    <li>
                      You are not located in a country that is subject to U.S.
                      government sanctions
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">4. User Accounts</h2>
                  <p className="mb-4">
                    If you create an account on our website, you are responsible for:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Maintaining the confidentiality of your account credentials
                    </li>
                    <li>
                      All activities that occur under your account
                    </li>
                    <li>
                      Notifying us immediately of any unauthorized use of your account
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    You agree not to share your account with others or allow anyone
                    else to access your account. You are responsible for any damage
                    resulting from your failure to maintain account security.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    5. Acceptable Use Policy
                  </h2>
                  <p className="mb-4">You agree NOT to:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Use the website for any illegal purpose or in violation of any
                      laws
                    </li>
                    <li>
                      Attempt to gain unauthorized access to our systems or networks
                    </li>
                    <li>
                      Interfere with or disrupt the website or servers connected to
                      the website
                    </li>
                    <li>
                      Use automated means (bots, scrapers, etc.) to access the
                      website without permission
                    </li>
                    <li>
                      Transmit viruses, malware, or any code that could harm the
                      website
                    </li>
                    <li>
                      Impersonate any person or entity or misrepresent your affiliation
                    </li>
                    <li>
                      Collect or harvest personal information about other users
                    </li>
                    <li>
                      Use the website to send spam, unsolicited communications, or
                      promotional materials
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    6. Intellectual Property Rights
                  </h2>
                  <p className="mb-4">
                    All content on this website, including text, graphics, logos,
                    images, software, and other materials (&quot;Content&quot;) is
                    owned by Lucky Link LLC or its licensors and is protected by
                    copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="mb-4">
                    You may not reproduce, distribute, modify, create derivative works
                    of, publicly display, or otherwise use any Content without our
                    prior written consent.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The name, logo, and trade dress of Lucky Link LLC are trademarks
                    of Lucky Link LLC. You may not use these trademarks without our
                    prior written consent.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    7. Promotional Giveaways
                  </h2>
                  <p className="mb-4">
                    Participation in any promotional giveaway offered through our
                    website is subject to separate Official Rules. By participating
                    in a giveaway, you agree to be bound by those Official Rules,
                    which include:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>No purchase necessary to enter or win</li>
                    <li>Void where prohibited by law</li>
                    <li>Age and residency requirements</li>
                    <li>Alternative methods of entry (AMOE)</li>
                    <li>Winner selection and prize award procedures</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Please review the Official Rules for each giveaway before
                    participating.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    8. Privacy and Data Collection
                  </h2>
                  <p className="mb-4">
                    Your use of our website is also governed by our Privacy Policy,
                    which describes how we collect, use, and protect your personal
                    information.
                  </p>
                  <p className="mb-4">
                    By using our website, you consent to the collection and use of
                    your information as described in our Privacy Policy.
                  </p>
                  <p>
                    Please review our{" "}
                    <a
                      href="/privacy"
                      className="text-primary hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    for more information.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">9. Disclaimers</h2>
                  <p className="mb-4">
                    <strong>AS-IS, AS-AVAILABLE:</strong> The website and services
                    are provided &quot;as is&quot; and &quot;as available&quot;
                    without warranties of any kind, either express or implied.
                  </p>
                  <p className="mb-4">
                    <strong>NO WARRANTIES:</strong> We disclaim all warranties,
                    including but not limited to:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>MERCHANTABILITY</li>
                    <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                    <li>NON-INFRINGEMENT</li>
                    <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    We do not guarantee that the website will be secure, free of
                    viruses, or always available.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    10. Limitation of Liability
                  </h2>
                  <p className="mb-4">
                    To the maximum extent permitted by law, Lucky Link LLC shall not
                    be liable for:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      Indirect, incidental, special, consequential, or punitive
                      damages
                    </li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>
                      Damages resulting from use or inability to use the website
                    </li>
                    <li>
                      Damages resulting from unauthorized access to your account or
                      data
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Our total liability shall not exceed the amount you paid, if any,
                    for accessing the website.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">11. Indemnification</h2>
                  <p className="mb-4">
                    You agree to indemnify, defend, and hold harmless Lucky Link LLC
                    and its officers, directors, employees, and agents from any
                    claims, damages, losses, liabilities, and expenses arising from:
                  </p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Your use of the website</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>
                      Your violation of any applicable laws or regulations
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">12. Termination</h2>
                  <p className="mb-4">
                    We may terminate or suspend your account and access to the
                    website at any time, without prior notice, for:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Violation of these Terms</li>
                    <li>Engaging in fraudulent or illegal activities</li>
                    <li>
                      Any reason at our sole discretion
                    </li>
                  </ul>
                  <p>
                    Upon termination, your right to use the website will immediately
                    cease. All provisions of these Terms that by their nature should
                    survive termination shall survive.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">13. Dispute Resolution</h2>
                  <p className="mb-4">
                    <strong>Governing Law:</strong> These Terms shall be governed by
                    and construed in accordance with the laws of the State of
                    Wyoming, without regard to its conflict of law provisions.
                  </p>
                  <p className="mb-4">
                    <strong>Arbitration:</strong> Any disputes arising under these
                    Terms shall be resolved through binding arbitration, except
                    where prohibited by law.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You agree to resolve any disputes with Lucky Link LLC on an
                    individual basis and waive any right to participate in class
                    action lawsuits or class-wide arbitration.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">14. Modifications to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will
                    notify you of material changes by posting the new Terms on the
                    website and updating the &quot;Last Updated&quot; date.
                  </p>
                  <p className="mt-4">
                    Your continued use of the website after any modifications
                    constitutes your acceptance of the new Terms.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">15. Contact Information</h2>
                  <p className="mb-4">
                    If you have questions about these Terms, please contact us:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:support@luckylink.com"
                        className="text-primary hover:underline"
                      >
                        support@luckylink.com
                      </a>
                    </p>
                    <p>
                      <strong>Company:</strong> Lucky Link LLC, Wyoming, USA
                    </p>
                  </div>
                </section>

                <div className="mt-12 rounded-lg bg-muted/50 p-6">
                  <p className="text-center text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Lucky Link LLC. All rights
                    reserved.
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
