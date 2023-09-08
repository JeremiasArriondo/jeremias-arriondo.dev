"use client";

import { ChangeEvent } from "react";

import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useRecoilState } from "recoil";

import useFocus from "@/hooks/use-focus";
import useHover from "@/hooks/use-hover";
import { queryState } from "@/lib/states/query";

export function SearchBar() {
  const [query, setQuery] = useRecoilState(queryState);
  const { ref: hoverRef, isHovering } = useHover<HTMLDivElement>();
  const { ref: focusRef, isFocusing } = useFocus<HTMLInputElement>();

  const handleInputClear = () => {
    setQuery("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLocaleLowerCase());
  };

  return (
    <div ref={hoverRef} className="relative">
      <BsSearch className="absolute left-6 flex h-full items-center text-xl text-gray-400" />
      {query && (isHovering || isFocusing) && (
        <IoMdClose
          onClick={handleInputClear}
          className="absolute right-6 flex h-full items-center text-xl"
        />
      )}
      <input
        ref={focusRef}
        type="text"
        placeholder="Busca algún post"
        onChange={handleInputChange}
        value={query}
        className={`w-full rounded-xl border dark:placeholder:text-gray-600 border-gray-300 py-2 pl-14 pr-8 text-xl font-medium hover:border-violetPrimary focus:border-violetPrimary dark:focus:border-violetSecondary focus:bg-gray-100 focus:outline-none dark:border-gray-800 dark:bg-gray-900 ${
          isHovering && "border-violetPrimary"
        }`}
      />
    </div>
  );
}
