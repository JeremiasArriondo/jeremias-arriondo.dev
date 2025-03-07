"use client";

import Link from "next/link";

import { Post } from "@/.contentlayer/generated";
import CategoryList from "@/components/category-list";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";
import { CardParallax } from "./card-parallax";

export default function PostCard({
  post: { slug, title, description, date, image, categories, _raw },
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
            <ViewTransition name={_raw.flattenedPath}>
              <Image
                src={image}
                alt={title}
                width={804}
                height={452}
                className="aspect-[1200/630] object-cover rounded-t-md transition-colors"
                priority={index <= 1}
              />
            </ViewTransition>
          )}
          <div className="flex flex-1 flex-col justify-between p-4">
            <div>
              <h3 className="h-16 line-clamp-2 text-2xl dark:text-white font-extrabold">
                {title}
              </h3>
              {description && (
                <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
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
