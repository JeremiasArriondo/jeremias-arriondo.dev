"use client";

import { useRecoilState, useSetRecoilState } from "recoil";

import { categoriesState } from "@/lib/states/categories";
import { pageState } from "@/lib/states/page";
import { isTouchDevice } from "@/lib/is-touch-device";

export function Category({ category }: { category: string }) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const setPage = useSetRecoilState(pageState);
  const checked = categories.selected.includes(category);
  const active = categories.active.includes(category);

  const handleCategoryClick = (category: string) => () => {
    setCategories((prevCategories) => {
      if (prevCategories.selected.includes(category)) {
        return {
          ...prevCategories,
          selected: prevCategories.selected.filter(
            (value) => value !== category
          ),
        };
      } else {
        return {
          ...prevCategories,
          selected: [...prevCategories.selected, category],
        };
      }
    });

    setPage(1);
  };

  return (
    <button
      onClick={handleCategoryClick(category)}
      className={`my-2 border border-gray-300 text-gray-600 cursor-pointer rounded-xl px-4 transition-all duration-300
      shadow-xl shadow-violet-400/20 hover:shadow-violet-400/40 dark:border dark:border-gray-800 dark:bg-transparent dark:text-white
      ${checked ? "dark:text-white" : "bg-secondary"} ${
        !active && "pointer-events-none opacity-25 shadow-none"
      } ${active && !isTouchDevice() && ""}`}
    >
      {category}
    </button>
  );
}
