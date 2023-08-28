import { notFound } from "next/navigation";
import { Post, allPosts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx/mdx-components";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/mdx.css";

import { absoluteUrl, formatDate } from "@/lib/utils";
import { cn } from "@/lib/cn";
import { Author } from "@/components/author";
import RelatedPosts from "@/components/posts/related-posts";
// import { buttonVariants } from "@/components/ui/button"
// import { Icons } from "@/components/icons"

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return notFound();
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    // authors: post.author.map((author) => ({
    //   name: author,
    // })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
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
    <>
      <article className="container-section py-6 lg:py-10">
        <div>
          {post.date && (
            <time
              dateTime={post.date}
              className="block text-sm text-muted-foreground text-gray-600 dark:text-gray-400"
            >
              Publicado el {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-2 inline-block font-bold text-4xl leading-tight lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex space-x-4">
            {/* @ts-expect-error Server Component */}
            {post.author ? <Author username={post.author} /> : null}
          </div>
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={405}
            className="my-8 rounded-md transition-colors"
            priority
          />
        )}
        <Mdx code={post.body.code} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link href="/blog" className="">
            Volver a todos los post
          </Link>
        </div>
      </article>
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
