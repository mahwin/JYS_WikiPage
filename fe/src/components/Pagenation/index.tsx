import { Arrow } from "./Arrow";
import styled from "styled-components";

export interface PagenationProps {
  pageNationList: number[];
  currentPage: number;
  isStart: boolean;
  isEnd: boolean;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  setCurrentPage: (page: number) => void;
}
export function Pagenation({
  pageNationList,
  currentPage,
  handlePrevPage,
  handleNextPage,
  setCurrentPage,
  isStart,
  isEnd,
}: PagenationProps) {
  return (
    <NaviWrapper>
      {!isStart && <Arrow direction="left" handleClick={handlePrevPage} />}
      {pageNationList?.map((page) => (
        <button
          key={page}
          disabled={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {!isEnd && <Arrow direction="right" handleClick={handleNextPage} />}
    </NaviWrapper>
  );
}

const NaviWrapper = styled.nav`
  display: flex;
  gap: 8px;
`;
