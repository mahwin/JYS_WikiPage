import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "../../types";

interface PostBodyProps {
  content: string;
  sortedPosts: PostType[];
}

export const ContentLink = ({ content, sortedPosts }: PostBodyProps) => {
  const renderContentWithLink = (content: string) => {};

  return <div>{content}</div>;
};
