import { Metadata } from "next";
import { Suspense } from "react";
import { Hero } from "@/components/Hero";
import PostsList from "@/components/PostsList";
import { getAllPostsFromNotion } from "@/services/posts";

export const metadata: Metadata = {
  title: "Inicio - Jeremias Arriondo",
  description: "Bienvenid@ a mi web personal",
};

export default async function HomePage() {
  const allPosts = await getAllPostsFromNotion();
  return (
    <main>
      <Hero />
      <div className="container-section mt-8 md:mt-16">
        <Suspense fallback={<p>Loading...</p>}>
          <PostsList allPosts={allPosts} />
        </Suspense>
      </div>
    </main>
  );
}
