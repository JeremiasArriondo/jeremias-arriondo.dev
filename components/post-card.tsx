"use client";

import Image from "next/image";
import Link from "next/link";

import CategoryList from "@/components/category-list";
import { CardParallax } from "./card-parallax";
import { Post } from "@/.contentlayer/generated";
import { formatDate } from "@/lib/utils";

export default function PostCard({
  post: { slug, title, description, date, image, categories },
  index,
}: {
  post: Post;
  index: number;
}) {
  return (
    <CardParallax>
      <Link href={slug}>
        <article
          className="mx-auto flex
          flex-col rounded-lg not-prose break-inside-avoid border border-gray-300 dark:border-gray-800
        bg-white/20 dark:bg-black/50 bg-clip-padding backdrop-blur-lg backdrop-filter"
        >
          {image && (
            <Image
              src={image}
              alt={title}
              width={804}
              height={452}
              className="aspect-[1200/630] object-cover rounded-t-md transition-colors"
              priority={index <= 1}
            />
          )}
          <div className="flex flex-col p-4">
            <h3 className="line-clamp-1 text-2xl dark:text-white font-extrabold">
              {title}
            </h3>
            {description && (
              <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            )}
            <div className="mt-2 space-y-2">
              {date && (
                <time className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(date)}
                </time>
              )}
              <CategoryList categories={categories} />
            </div>
          </div>
        </article>
      </Link>
    </CardParallax>
  );
}
