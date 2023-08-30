import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { PostsList } from "@/components/post-list";
import { allPosts } from "@/.contentlayer/generated";

export const metadata: Metadata = {
  title: "Inicio - Jeremias Arriondo",
  description: "Bienvenid@ a mi web personal.",
};

export default async function HomePage() {
  const posts = await Promise.all(
    allPosts
      .sort((postA, postB) =>
        new Date(postA.date) > new Date(postB.date) ? -1 : 1
      )
      .slice(0, 5)
  );

  return (
    <main>
      <Hero />
      <div className="container-section mt-8 md:mt-16">
        <PostsList allPosts={posts} />
      </div>
    </main>
  );
}
