import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Lucky Link LLC. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
    languages: {
      en: "/privacy",
      uk: "/uk/privacy",
      "x-default": "/privacy",
    },
  },
};

export default function PrivacyPage() {
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
                  Privacy Policy
                </h1>
                <p
                  className="text-lg"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  How we collect, use, and protect your information
                </p>
                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            <Card>
              <CardContent className="prose prose-sm max-w-none p-8">
                <p className="mb-6">
                  Lucky Link LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                  is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    1. Information We Collect
                  </h2>

                  <h3 className="mb-2 text-lg font-semibold">
                    Personal Information
                  </h3>
                  <p className="mb-4">
                    We may collect personally identifiable information (&quot;Personal
                    Information&quot;) that you voluntarily provide to us, including:
                  </p>
                  <ul className="mb-6 list-inside list-disc space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Name, email address,
                      phone number, mailing address
                    </li>
                    <li>
                      <strong>Account Information:</strong> Username, password,
                      profile information
                    </li>
                    <li>
                      <strong>Demographic Information:</strong> Age, gender,
                      location, preferences
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Credit card details
                      (processed securely through third-party payment processors)
                    </li>
                    <li>
                      <strong>Communications:</strong> Messages, inquiries, feedback,
                      support requests
                    </li>
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">
                    Automatically Collected Information
                  </h3>
                  <p className="mb-4">
                    When you visit our website, we automatically collect certain
                    information:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Device Information:</strong> IP address, browser type,
                      operating system, device identifiers
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages viewed, time spent, links
                      clicked, navigation paths
                    </li>
                    <li>
                      <strong>Cookies and Tracking:</strong> Cookie data, tracking
                      pixel information
                    </li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    2. How We Collect Information
                  </h2>
                  <p className="mb-4">We collect information through:</p>
                  <ul className="list-inside list-disc space-y-2">
                    <li>Direct interactions with you (forms, email, phone)</li>
                    <li>Automated technologies (cookies, web beacons, analytics)</li>
                    <li>Third-party sources (partners, service providers)</li>
                    <li>Promotional giveaway entries</li>
                  </ul>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    3. How We Use Your Information
                  </h2>
                  <p className="mb-4">We use your information for:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Service Delivery:</strong> Providing and improving our
                      services
                    </li>
                    <li>
                      <strong>Communication:</strong> Responding to inquiries,
                      sending updates and promotional materials
                    </li>
                    <li>
                      <strong>Account Management:</strong> Creating and managing your
                      account
                    </li>
                    <li>
                      <strong>Promotional Giveaways:</strong> Processing entries,
                      selecting winners, awarding prizes
                    </li>
                    <li>
                      <strong>Analytics:</strong> Analyzing usage patterns to improve
                      our website
                    </li>
                    <li>
                      <strong>Security:</strong> Detecting, preventing, and addressing
                      technical issues and fraud
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> Complying with legal
                      obligations
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>Legal Basis:</strong> We process your information based on
                    your consent, legitimate business interests, and legal
                    obligations.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    4. Information Sharing
                  </h2>

                  <h3 className="mb-2 text-lg font-semibold">
                    We DO NOT Sell Your Personal Information
                  </h3>
                  <p className="mb-4">
                    We do not sell, rent, or trade your Personal Information to third
                    parties for marketing purposes.
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">
                    When We Share Information
                  </h3>
                  <p className="mb-4">We may share your information with:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Service Providers:</strong> Third parties who perform
                      services on our behalf (payment processors, email services,
                      analytics)
                    </li>
                    <li>
                      <strong>Business Partners:</strong> Partner brands for
                      promotional campaigns (only with your consent)
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law,
                      court order, or government request
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with a
                      merger, acquisition, or sale of assets
                    </li>
                    <li>
                      <strong>With Your Consent:</strong> When you explicitly
                      authorize the sharing
                    </li>
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">
                    Promotional Giveaways
                  </h3>
                  <p className="mb-4">
                    For promotional giveaways, winner information (name, likeness,
                    location) may be publicly disclosed for promotional purposes,
                    unless prohibited by law. You may opt-out of publicity release
                    by declining the prize.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">5. Cookies and Tracking</h2>

                  <h3 className="mb-2 text-lg font-semibold">What Are Cookies?</h3>
                  <p className="mb-4">
                    Cookies are small text files stored on your device that remember
                    your preferences and track website usage.
                  </p>

                  <h3 className="mb-2 text-lg font-semibold">Types of Cookies We Use</h3>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> Required for the website to
                      function properly
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how
                      visitors use our website
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Track visitor engagement
                      with our marketing campaigns
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your settings
                      and preferences
                    </li>
                  </ul>

                  <h3 className="mb-2 text-lg font-semibold">Third-Party Analytics</h3>
                  <p className="mb-4">
                    We use Google Analytics and Meta Pixel to analyze website traffic.
                    These services collect anonymous usage data. You can opt-out of
                    Google Analytics using the{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Google Analytics Opt-out Browser Add-on
                    </a>
                    .
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">6. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational measures to
                    protect your information:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Encryption:</strong> SSL/TLS encryption for data
                      transmission
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Restricted access to personal
                      information
                    </li>
                    <li>
                      <strong>Secure Storage:</strong> Secure servers and databases
                    </li>
                    <li>
                      <strong>Regular Audits:</strong> Periodic security assessments
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    <strong>No method of transmission is 100% secure.</strong> While
                    we strive to protect your information, we cannot guarantee
                    absolute security.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    7. Your Privacy Rights
                  </h2>
                  <p className="mb-4">You have the right to:</p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>
                      <strong>Access:</strong> Request a copy of your Personal
                      Information
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of inaccurate
                      information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your Personal
                      Information
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your
                      information
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request restriction of processing
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of your data
                    </li>
                    <li>
                      <strong>Opt-Out:</strong> Unsubscribe from marketing
                      communications
                    </li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, contact us at{" "}
                    <a
                      href="mailto:seo@cchanse.life"
                      className="text-primary hover:underline"
                    >
                      seo@cchanse.life
                    </a>
                    {" "}or{" "}
                    <a
                      href="mailto:support@lucky1ink.com"
                      className="text-primary hover:underline"
                    >
                      support@lucky1ink.com
                    </a>
                    .
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We will respond to your request within 30 days, subject to
                    applicable legal requirements and exceptions.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    8. Data Retention
                  </h2>
                  <p className="mb-4">
                    We retain your Personal Information for as long as necessary to:
                  </p>
                  <ul className="mb-4 list-inside list-disc space-y-2">
                    <li>Provide our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                  </ul>
                  <p>
                    When you request deletion, we will remove your information from
                    our active systems, but may retain it in backup or archival
                    storage where required by law or for legitimate business purposes.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    9. Children&apos;s Privacy
                  </h2>
                  <p className="mb-4">
                    Our website and services are not intended for children under 18
                    years of age. We do not knowingly collect Personal Information
                    from children under 18.
                  </p>
                  <p>
                    If we discover that we have inadvertently collected information
                    from a child under 18, we will take steps to delete such
                    information immediately.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    10. International Data Transfers
                  </h2>
                  <p className="mb-4">
                    Your information may be transferred to and processed in countries
                    other than your country of residence. We ensure appropriate
                    safeguards are in place to protect your information in accordance
                    with this Privacy Policy.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">
                    11. Changes to This Privacy Policy
                  </h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by:
                  </p>
                  <ul className="mb-4 mt-4 list-inside list-disc space-y-2">
                    <li>Posting the new policy on our website</li>
                    <li>Updating the &quot;Last Updated&quot; date</li>
                    <li>Sending you an email notification (if you have an account)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Your continued use of the website after any changes constitutes
                    acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <Separator className="my-6" />

                <section className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions, concerns, or requests regarding this
                    Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="mb-4 rounded-lg bg-muted/50 p-4">
                    <p className="mb-2">
                      <strong>Email (Business & Compliance):</strong>{" "}
                      <a
                        href="mailto:seo@cchanse.life"
                        className="text-primary hover:underline"
                      >
                        seo@cchanse.life
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Email (Support):</strong>{" "}
                      <a
                        href="mailto:support@lucky1ink.com"
                        className="text-primary hover:underline"
                      >
                        support@lucky1ink.com
                      </a>
                    </p>
                    <p>
                      <strong>Company:</strong> Lucky Link LLC, Wyoming, USA
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We will respond to your inquiry within 30 days.
                  </p>
                </section>

                <div className="mt-12 rounded-lg bg-muted/50 p-6">
                  <p className="mb-2 text-center font-semibold">
                    Your Privacy Matters to Us
                  </p>
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
