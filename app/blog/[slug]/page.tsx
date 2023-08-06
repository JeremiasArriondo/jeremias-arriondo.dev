import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import "katex/dist/katex.min.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion-x/src/styles.css";

import NotionPage from "@/components/NotionPage";
import RelatedPosts from "@/components/posts/related-posts";
import { getRecordMap } from "@/lib/notion";
import { getAllPostsFromNotion } from "@/services/posts";
import { Post } from "@/types/post";

export default async function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const allPosts = await getAllPostsFromNotion();

  const post = allPosts.find((p) => p.slug === slug);
  if (!post) {
    return notFound();
  }

  if (!post.published) {
    return (
      <article
        data-revalidated-at={new Date().getTime()}
        className="mx-auto mt-40 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold">Post no encontrado</h2>
        <Link href="/blog">
          <span className="mr-2">&larr;</span>
          <span>Volver a todos los blogs</span>
        </Link>
      </article>
    );
  }

  const relatedPosts: Post[] = allPosts.filter(
    (p) =>
      p.slug !== slug && p.categories.some((v) => post.categories.includes(v))
  );

  const recordMap = await getRecordMap(post.id);

  return (
    <>
      <article
        data-revalidated-at={new Date().getTime()}
        className="flex flex-col items-center"
      >
        <div className="background-gradient w-full flex justify-center">
          {/* <div className="inline">
            <Link href="/blog" className="pt-4">
              <span className="mr-2">&larr;</span>
              <span>Volver al blog</span>
            </Link>
          </div> */}
          <div className="relative aspect-[3/2] w-[75vw] max-w-[900px]">
            <Image
              src={post.cover}
              alt="cover"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <NotionPage post={post} recordMap={recordMap} />
      </article>

      <RelatedPosts posts={relatedPosts} />
    </>
  );
}

export async function generateStaticParams() {
  const allPosts = await getAllPostsFromNotion();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const allPosts = await getAllPostsFromNotion();
  const post = allPosts.find((p) => p.slug === slug);

  return post
    ? {
        title: `${post.title} - Jeremias Arriondo`,
        openGraph: {
          images: [
            {
              url: post.cover,
              width: 400,
              height: 300,
            },
          ],
        },
      }
    : {};
}
