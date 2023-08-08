import CategoryFilter from "@/components/filter/category-filter";
import SearchBar from "@/components/filter/search-bar";
import PostsGrid from "@/components/posts/posts-grid";
import { getAllPostsFromNotion } from "@/services/posts";
import { toUniqueArray } from "@/utils/to-unique-array";
import "@/styles/paginate.css";

export const metadata = {
  title: "Blogs",
  description: "Aquí encontraras todos mis blogs relacionados a tecnología",
};

export default async function BlogsPage() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <main>
      <section className="background-gradient">
        <div className="container-section pt-16">
          <h1 className="title dark:text-white">
            Aquí puedes leer todos mis blogs
          </h1>
          <p>
            Suelo escribir sobre tecnología y además, sobre problemas en el
            desarrollo que tengo en mi día a día
          </p>
        </div>
      </section>
      <section className="container-section pt-8">
        <SearchBar />
        <CategoryFilter allCategories={allCategories} />
        <PostsGrid allPosts={allPosts} />
      </section>
    </main>
  );
}
