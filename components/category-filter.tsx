"use client";

import { useRecoilState } from "recoil";

import { Category } from "@/components/category";
import { categoriesState } from "@/lib/states/categories";

export function CategoryFilter({ allCategories }: { allCategories: string[] }) {
  const [categories, setCategories] = useRecoilState(categoriesState);
  const clearAllActive = categories.selected.length > 0;

  const handleClearAll = () => {
    setCategories({
      selected: [],
      active: [],
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between mt-4 md:w-[80%]">
        <h2 className="text-xl font-bold">Selecciona algún tema</h2>
        <button
          onClick={handleClearAll}
          className={`text-xs ${
            !clearAllActive &&
            "pointer-events-none text-gray-400 dark:text-gray-600"
          }`}
        >
          Limpiar todo
        </button>
      </div>
      <div className="flex gap-4 md:gap-6 min-h-[56px] w-[90vw] max-w-[36rem] flex-wrap justify-start gap-y-[0.3rem]">
        {allCategories.map((category) => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
