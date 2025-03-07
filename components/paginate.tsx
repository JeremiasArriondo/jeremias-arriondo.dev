"use client";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { pageState } from "@/lib/states/page";
import "@/styles/paginate.css";
import { useAtom } from "jotai";

export default function Paginate({
  totalPages,
  elementToScroll,
}: {
  totalPages: number;
  elementToScroll: HTMLElement | null;
}) {
  const [page, setPage] = useAtom(pageState);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);

    elementToScroll &&
      elementToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <ReactPaginate
      className="paginate"
      pageCount={totalPages}
      previousLabel={<AiOutlineLeft />}
      nextLabel={<AiOutlineRight />}
      breakLabel={<FiMoreHorizontal />}
      onPageChange={handlePageChange}
      forcePage={page - 1}
      renderOnZeroPageCount={() => null}
    />
  );
}
