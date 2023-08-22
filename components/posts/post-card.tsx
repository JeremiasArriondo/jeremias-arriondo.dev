"use client";

import Image from "next/image";
import Link from "next/link";

import CategoryList from "@/components/category-list";
import { Post } from "@/types/post";
import { CardParallax } from "../Card";

export default function PostCard({
  post: { slug, title, date, cover, categories },
}: {
  post: Post;
}) {
  return (
    <CardParallax>
      <Link href={`/blog/${slug}`}>
        <article
          className="mx-auto flex
          flex-col overflow-hidden rounded-lg not-prose break-inside-avoid border border-gray-300 dark:border-gray-800
        bg-white/20 dark:bg-black/50 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter"
        >
          <div className="relative">
            <Image
              src={cover}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-full object-cover h-48"
            />
          </div>
          <div className="flex h-48 flex-col p-4">
            <h3 className="line-clamp-2 h-16 text-xl xs:text-2xl dark:text-white font-bold">
              {title}
            </h3>
            <time className="mb-4 mt-2 pl-2 text-sm text-gray-600 dark:text-gray-400">
              {date}
            </time>
            <CategoryList categories={categories} />
          </div>
        </article>
      </Link>
    </CardParallax>
  );
}
