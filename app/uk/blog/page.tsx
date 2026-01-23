import Link from "next/link";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";
import type { Metadata } from "next";
import { FadeIn, StaggerChildren } from "@/components/animations/fade-in";
import { LazyVideo } from "@/components/media/lazy-video";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Інсайти та найкращі практики промо-маркетингу, відповідності та залучення клієнтів від Lucky Link LLC.",
  alternates: {
    canonical: "/uk/blog",
    languages: {
      en: "/blog",
      uk: "/uk/blog",
      "x-default": "/blog",
    },
  },
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const localizedPosts = blogPosts.filter((post) => post.locale === "uk");
  const sortedPosts = [...localizedPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get unique categories
  const categories = Array.from(new Set(sortedPosts.map((post) => post.category)));

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
          <LazyVideo
            className="absolute inset-0 h-full w-full object-cover"
            src="/img/blog.mp4"
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
              <div className="mx-auto inline-block rounded-2xl border border-black/5 bg-background/50 px-6 py-5 backdrop-blur-sm">
                <h1
                  className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                  style={{
                    color: "#0E0E0E",
                    WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                    textShadow: "0 8px 30px rgba(0,0,0,0.25)",
                    filter: "drop-shadow(0 0 1px rgba(255,255,255,0.25))",
                  }}
                >
                  Блог
                </h1>
                <p
                  className="text-lg md:text-xl"
                  style={{
                    color: "#3A3A3A",
                    textShadow: "0 4px 14px rgba(0,0,0,0.18)",
                  }}
                >
                  Інсайти та найкращі практики промо-маркетингу, відповідності та
                  залучення клієнтів
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b bg-muted/30 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold">Категорії:</span>
                <Badge variant="secondary">Усі</Badge>
                {categories.map((category) => (
                  <Badge key={category} variant="outline" className="cursor-pointer transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-105">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggerChildren className="mx-auto max-w-5xl">
            <div className="grid gap-8">
              {sortedPosts.map((post) => (
                <Card key={post.slug} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Badge>{post.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("uk-UA", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">
                      <Link
                        href={`/uk/blog/${post.slug}`}
                        className="hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Автор: {post.author}
                      </p>
                      <Link
                        href={`/uk/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        Читати далі
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/about.jpeg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-white/30" aria-hidden="true" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="rounded-2xl border border-black/5 bg-background/50 p-8 backdrop-blur-sm">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Будьте в курсі
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Отримуйте найновіші інсайти з промо-маркетингу та відповідності на
                вашу пошту.
              </p>
              <div className="mx-auto max-w-md">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Введіть ваш email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Підписатися
                  </button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Ми поважаємо вашу приватність. Відписатися можна будь-коли.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
