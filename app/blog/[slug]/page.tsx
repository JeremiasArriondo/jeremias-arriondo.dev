import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Post, allPosts } from "contentlayer/generated";

import { Author } from "@/components/author";
import { Mdx } from "@/components/mdx-components";
import { RelatedPosts } from "@/components/related-posts";
import { absoluteUrl, formatDate } from "@/lib/utils";
import "@/styles/mdx.css";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";

type Params = Promise<{
  slug: string;
}>;

async function getPostFromParams(params: { slug: string }) {
  const slug = params.slug;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = await getPostFromParams(params);
  if (!post) {
    return;
  }

  const { title, description, slug, image } = post;
  const ogImage = image
    ? `https://www.jeremias-arriondo.dev/${image}`
    : `https://www.jeremias-arriondo.dev/og?title=${title}`;

  return {
    metadataBase: new URL("https://www.jeremias-arriondo.dev"),
    title: title,
    description: description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(slug),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export default async function PostPage(props: { params: Params }) {
  const params = await props.params;
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }

  const relatedPosts: Post[] = allPosts.filter(
    (p) =>
      p.slug !== post.slug &&
      p.categories.some((v) => post.categories.includes(v))
  );

  return (
    <main>
      <article className="container-section py-6 lg:py-10" data-mdx-container>
        <div>
          {post.date && (
            <time
              dateTime={post.date}
              className="block text-sm text-muted-foreground text-gray-600 dark:text-gray-400"
            >
              Publicado el {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-2 font-heading inline-block font-bold text-4xl leading-tight lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex space-x-4">
            {post.author ? (
              <ViewTransition name="hero-image" exit="duration-100">
                <Author username={post.author} />
              </ViewTransition>
            ) : null}
          </div>
        </div>
        {post.image && (
          <ViewTransition name={post._raw.flattenedPath}>
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="aspect-[1200/630] object-cover my-8 rounded-md transition-colors"
              priority
            />
          </ViewTransition>
        )}
        <Mdx code={post.body.code} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className="p-2 transition-colors bg-violetPrimary/10 hover:bg-violetPrimary/30 dark:bg-violetPrimary/30 dark:hover:bg-violetPrimary/40 rounded-md"
          >
            Volver a todos los post
          </Link>
        </div>
      </article>
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </main>
  );
}
