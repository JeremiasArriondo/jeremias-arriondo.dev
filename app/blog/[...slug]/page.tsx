import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Post, allPosts } from "contentlayer/generated";

import { absoluteUrl, formatDate } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";
import { Author } from "@/components/author";
import { RelatedPosts } from "@/components/related-posts";
import "@/styles/mdx.css";
import { getMDXComponent } from "next-contentlayer2/hooks";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: { slug: string[] }) {
  const slug = 
  params?.slug?.join("/");
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata | undefined> {
  const post = await getPostFromParams(params);
  if (!post) {
    return;
  }

  const { title, description, slug, image } = post;
  const ogImage = image
    ? `https://www.jeremias-arriondo.dev/${image}`
    : `https://www.jeremias-arriondo.dev/og?title=${title}`;

  return {
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
            {/* @ts-expect-error Server Component */}
            {post.author ? <Author username={post.author} /> : null}
          </div>
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="aspect-[1200/630] object-cover my-8 rounded-md transition-colors"
            priority
          />
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
