"use client";

import { useRef } from "react";

import Paginate from "@/components/paginate";
import PostCard from "@/components/posts/post-card";
import usePosts from "@/hooks/use-post";
import { Post } from "@/.contentlayer/generated";

export default function PostsGrid({ allPosts }: { allPosts: Post[] }) {
  const { posts, totalPages } = usePosts(allPosts);
  // const posts = allPosts;
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={rootRef}
      className="flex my-8 flex-col items-center space-y-16"
    >
      {posts.length > 0 ? (
        <ul
          id="posts-grid"
          className="grid w-full grid-cols-1 gap-x-8 gap-y-32 md:grid-cols-2 xl:grid-cols-3"
        >
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 text-center text-lg">
          No se encontraron publicaciones
        </p>
      )}
      <Paginate totalPages={totalPages} elementToScroll={rootRef.current} />
    </section>
  );
}
