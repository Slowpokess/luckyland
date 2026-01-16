import Link from "next/link";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and best practices for promotional marketing, compliance, and customer engagement from Lucky Link LLC.",
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get unique categories
  const categories = Array.from(new Set(sortedPosts.map((post) => post.category)));

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-primary/10 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Blog
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Insights and best practices for promotional marketing, compliance,
              and customer engagement
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="border-b py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold">Categories:</span>
              <Badge variant="secondary">All</Badge>
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8">
              {sortedPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <Badge>{post.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
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
                        href={`/blog/${post.slug}`}
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
                        By {post.author}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Stay Updated
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get the latest insights on promotional marketing and compliance
              delivered to your inbox.
            </p>
            <div className="mx-auto max-w-md">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
