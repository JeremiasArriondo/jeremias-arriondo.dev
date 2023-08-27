import Image from "next/image";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import PostsGrid from "@/components/posts/posts-grid";
import SearchBar from "@/components/filter/search-bar";
import CategoryFilter from "@/components/filter/category-filter";
import { toUniqueArray } from "@/utils/to-unique-array";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  // const allCategories = toUniqueArray(
  //   allPosts
  //     .filter((post) => post.published)
  //     .map((post) => post.categories)
  //     .flat()
  // ).sort();

  const allCategories = toUniqueArray(
    allPosts.map((post) => post.categories).flat()
  ).sort();

  return (
    <main>
      <section className="background-gradient">
        <div className="container-section pt-16">
          <h1 className="title dark:text-white">
            Aquí puedes leer todos mis blogs
          </h1>
          <p>
            Suelo escribir sobre tecnología y soluciones a problemas en el
            desarrollo del día a día
          </p>
        </div>
      </section>
      <section className="container-section pt-8">
        <SearchBar />
        <CategoryFilter allCategories={allCategories} />
        <PostsGrid allPosts={posts} />
        {/* {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )} */}
      </section>
    </main>
  );
}
