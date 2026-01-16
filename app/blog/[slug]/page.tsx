import Link from "next/link";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { blogPosts } from "@/lib/data/blog-posts";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageWrapper>
      <article className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-8">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
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

              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground">
                {post.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-y py-4">
                <div>
                  <p className="text-sm font-semibold">Written by</p>
                  <p className="text-sm text-muted-foreground">{post.author}</p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Share:</span>
                  <button className="rounded-md border p-2 hover:bg-muted">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {post.category.split(" ").map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 rounded-lg bg-muted/50 p-6">
              <h3 className="mb-2 font-semibold">About the Author</h3>
              <p className="text-sm text-muted-foreground">
                {post.author} is part of the {post.category.toLowerCase()} team at
                Lucky Link LLC, bringing expertise in promotional marketing and
                compliance.
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 text-2xl font-bold">Related Posts</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.slug} className="transition-shadow hover:shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="mb-2 text-lg font-semibold line-clamp-2">
                          <Link
                            href={`/blog/${relatedPost.slug}`}
                            className="hover:text-primary"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.description}
                        </p>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-sm font-semibold text-primary hover:underline"
                        >
                          Read More →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Launch Your Campaign?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Let Lucky Link LLC help you create compliant, engaging promotional
              campaigns that drive results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background text-foreground hover:bg-background/90 h-11 px-8"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
