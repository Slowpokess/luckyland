import { PageWrapper } from "@/components/layout/page-wrapper";
import { ContactForm } from "@/components/forms/contact-form";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Lucky Link LLC. We're here to help with your digital advertising and promotional service needs.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Get in Touch
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Have questions about our services? We&apos;d love to hear from you.
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Other Ways to Reach Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose the method that works best for you
              </p>
            </div>

            <div className="rounded-lg bg-background p-8">
              <h3 className="mb-4 text-xl font-bold text-center">Contact Information</h3>
              <div className="space-y-3 text-center">
                <p className="font-semibold">Lucky Link, LLC</p>
                <p className="text-sm text-muted-foreground">Business Address: Wyoming, United States</p>
                <div className="pt-2">
                  <p className="text-sm font-semibold">Email (Business & Compliance):</p>
                  <a
                    href="mailto:seo@cchanse.life"
                    className="text-sm text-primary hover:underline"
                  >
                    seo@cchanse.life
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold">Email (Support):</p>
                  <a
                    href="mailto:support@lucky1ink.com"
                    className="text-sm text-primary hover:underline"
                  >
                    support@lucky1ink.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold">Phone:</p>
                  <a
                    href="tel:+13072257838"
                    className="text-sm text-primary hover:underline"
                  >
                    +1 307 225 78 38
                  </a>
                </div>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                For general inquiries, compliance questions, or support requests,
                please contact us using the details above.
              </p>
            </div>

            <div className="mt-12 rounded-lg bg-background p-8">
              <h3 className="mb-4 text-xl font-bold">Frequently Asked Questions</h3>
              <p className="mb-4 text-muted-foreground">
                Before reaching out, you might find the answer you&apos;re looking
                for in our FAQ section on the{" "}
                <Link href="/" className="text-primary hover:underline">
                  home page
                </Link>
                .
              </p>
              <p className="mb-4 text-muted-foreground">
                For questions about specific promotional programs, please review
                our{" "}
                <Link href="/rules" className="text-primary hover:underline">
                  Official Rules
                </Link>
                .
              </p>
              <p className="text-muted-foreground">
                For technical support or account issues, please include your
                account details in your message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              What to Expect
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We strive to provide excellent customer service. Here&apos;s what you
              can expect when you contact us:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-muted/50 p-6">
                <div className="mb-3 text-4xl font-bold text-primary">1-2</div>
                <p className="font-semibold">Business Days</p>
                <p className="text-sm text-muted-foreground">
                  Typical response time for email inquiries
                </p>
              </div>

              <div className="rounded-lg bg-muted/50 p-6">
                <div className="mb-3 text-4xl font-bold text-primary">24/7</div>
                <p className="font-semibold">Monitoring</p>
                <p className="text-sm text-muted-foreground">
                  We monitor inquiries around the clock
                </p>
              </div>

              <div className="rounded-lg bg-muted/50 p-6">
                <div className="mb-3 text-4xl font-bold text-primary">100%</div>
                <p className="font-semibold">Commitment</p>
                <p className="text-sm text-muted-foreground">
                  Dedicated to resolving your inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
