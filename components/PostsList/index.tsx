"use client";
import { Post } from "@/types/post";
import Link from "next/link";

const CANT_POSTS = 5;
export default function PostsList({ allPosts }: { allPosts: Post[] }) {
  const lastPosts = allPosts
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
    .slice(0, CANT_POSTS);

  return (
    <section className="my-8 md:mt-16 space-y-8">
      <div>
        <h2 className="text-xl pt-6 md:text-2xl dark:text-white">
          Últimos posteos:
        </h2>
      </div>
      <div>
        {lastPosts.length > 0 ? (
          <ol
            id="posts-grid"
            className="relative border-l border-gray-200 dark:border-gray-700"
          >
            {lastPosts.map((post) => (
              <li key={post.slug} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {post.date}
                </time>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                </Link>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blueSecondary dark:text-bluePrimary inline-flex items-center"
                >
                  Seguir leyendo{" "}
                  <svg
                    className="w-3 h-3 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-10 text-center text-lg">
            No se encontraron publicaciones
          </p>
        )}
      </div>
    </section>
  );
}
