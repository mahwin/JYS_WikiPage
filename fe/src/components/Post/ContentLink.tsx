import { useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { PostType } from "../../types";
import { kmp, marking } from "../../utils/kmp";
import { TITLE_MARK, NUMBER_MARK } from "../../constants/mark";
import styled from "styled-components";

interface PostBodyProps {
  content: string;
  sortedPosts: PostType[];
}

export const ContentLink = ({ content, sortedPosts }: PostBodyProps) => {
  const markingContent = useMemo(() => {
    if (sortedPosts.length == 0) return;

    let copyContent = content;

    for (const { id, title } of sortedPosts) {
      if (content === title) continue;

      const matchArr = kmp(copyContent, title, TITLE_MARK);
      if (matchArr.length === 0) continue;

      copyContent = marking(
        copyContent,
        matchArr,
        TITLE_MARK,
        id,
        NUMBER_MARK,
        title.length
      );
    }

    return copyContent;
  }, [content, sortedPosts]);

  const renderWithLink = useCallback(() => {
    if (!markingContent) return;

    const parts = markingContent.split(TITLE_MARK);

    return parts.map((part, idx) => {
      if (part.indexOf(NUMBER_MARK) !== -1) {
        const [postId, title] = part.split(NUMBER_MARK);
        return (
          <AStyle key={idx} href={`/posts/${postId}`}>
            {title}
          </AStyle>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  }, [markingContent]);

  return <ContentLinkWrapper>{renderWithLink()}</ContentLinkWrapper>;
};

const ContentLinkWrapper = styled.section`
  border: 1px solid #e0e0e0;
  height: 100%;
  padding: 12px 24px;
  background-color: rgba(239, 239, 239, 0.3);
`;

const AStyle = styled.a`
  color: #000;
  text-decoration: underline;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.color.hover};
  }
`;
