import { CategoryFilter } from "@/components/category-filter";
import { PostsGrid } from "@/components/posts-grid";
import { SearchBar } from "@/components/search-bar";
import { toUniqueArray } from "@/lib/to-unique-array";
import { allPosts } from "contentlayer/generated";
import { unstable_ViewTransition as ViewTransition } from "react";
export const metadata = {
  title: "Blog",
  description: "Posteos sobre desarrollo de software, diseño y más.",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  const allCategories = toUniqueArray(
    allPosts.map((post) => post.categories).flat()
  ).sort();

  return (
    <main>
      <section className="background-gradient">
        <div className="container-section pt-8 md:pt-16">
          <ViewTransition name="title-post">
            <h1 className="title dark:text-white mb-4">Blog</h1>
          </ViewTransition>
          <p>
            Suelo escribir sobre desarrollo de software, soluciones a errores y
            otras ideas más
          </p>
        </div>
      </section>
      <section className="container-section pt-8">
        <SearchBar />
        {allCategories && <CategoryFilter allCategories={allCategories} />}
        {posts && <PostsGrid allPosts={posts} />}
      </section>
    </main>
  );
}
