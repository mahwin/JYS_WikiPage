import { fetchPosts } from "../apis/PostList";
import { useState, useEffect, useMemo } from "react";
import { MAX_WIKI_PAGE_NUM, MAX_PAGENATION_NUM } from "../constants/pagenation";

export function usePagenation(postsNumber: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [pageNationList, setPageNationList] = useState<number[]>();

  const lastPage = useMemo(() => {
    return Math.ceil(postsNumber / MAX_WIKI_PAGE_NUM);
  });

  const offset = useMemo(() => Math.min(MAX_PAGENATION_NUM, lastPage));

  useEffect(() => {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(lastPage, startPage + offset - 1);

    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => endPage - offset + i + 1
    );
    setPageNationList(pages);

    setIsStart(currentPage === 1);
    setIsEnd(currentPage === lastPage);
  }, [currentPage, lastPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return {
    currentPage,
    isStart,
    isEnd,
    pageNationList,
    handleNextPage,
    handlePrevPage,
    setCurrentPage,
  };
}
