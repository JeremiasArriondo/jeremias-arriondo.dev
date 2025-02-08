import { useEffect, useMemo } from "react";

import { categoriesState } from "@/lib/states/categories";
import { pageState } from "@/lib/states/page";
import { queryState } from "@/lib/states/query";
// import { Post } from "@/types/post";
// import { search } from "@/utils/search";
import { toUniqueArray } from "@/lib/to-unique-array";
import { Post } from "@/.contentlayer/generated";
import { CategoriesPost } from "@/types/post";
import { useAtom, useAtomValue } from "jotai";

const POST_PER_PAGE = 12;

export default function usePosts(allPosts: Post[]) {
  const page = useAtomValue(pageState);
  const query = useAtomValue(queryState);
  const [categories, setCategories] = useAtom(categoriesState);

  const allPostsFiltered = useMemo(
    () =>
      allPosts.filter((post) => {
        if (!post.published) {
          return false;
        }

        if (!post.title.toLocaleLowerCase().includes(query)) {
          return false;
        }

        if (categories.selected.length) {
          const isCategoryMatch = categories.selected.every((cat) =>
            post.categories.includes(cat as CategoriesPost)
          );
          if (!isCategoryMatch) {
            return false;
          }
        }

        return true;
      }),
    [allPosts, categories.selected, query]
  );
  allPostsFiltered.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  const totalPages = Math.ceil(allPostsFiltered.length / POST_PER_PAGE);
  const offset = (page ? +page - 1 : 0) * POST_PER_PAGE;
  const postsForCurrentPage = allPostsFiltered.slice(
    offset,
    offset + POST_PER_PAGE
  );

  useEffect(() => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      active: toUniqueArray(
        allPostsFiltered.map((post) => post.categories).flat()
      ),
    }));
  }, [allPostsFiltered, setCategories]);

  return {
    posts: postsForCurrentPage,
    totalPages,
  };
}
