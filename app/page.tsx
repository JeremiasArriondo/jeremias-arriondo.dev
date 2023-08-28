import { Metadata } from "next";
import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import { PostsList } from "@/components/post-list";
import { allPosts } from "@/.contentlayer/generated";

export const metadata: Metadata = {
  title: "Inicio - Jeremias Arriondo",
  description: "Bienvenid@ a mi web personal",
};

export default async function HomePage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return (
    <main>
      <Hero />
      <div className="container-section mt-8 md:mt-16">
        <Suspense fallback={<p>Loading...</p>}>
          <PostsList allPosts={posts} />
        </Suspense>
      </div>
    </main>
  );
}
