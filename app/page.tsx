import { Hero } from "@/components/Hero";
import PostsList from "@/components/PostsList";
import { getAllPostsFromNotion } from "@/services/posts";
import { Metadata } from "next";

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
        <PostsList allPosts={allPosts} />
      </div>
    </main>
  );
}
