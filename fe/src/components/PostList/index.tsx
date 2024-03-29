import { Text, Button, VStack, Space } from "../Common";
import { useEffect, useState, useRef } from "react";
import { PostType } from "../../apis/PostList";
import { MAX_WIKI_PAGE_NUM } from "../../constants/pagenation";
import { Modal } from "../Modal";
import { CreatePost } from "./CreatePost";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function PostList({ posts, page }: { posts: PostType[]; page: number }) {
  const start = (page - 1) * MAX_WIKI_PAGE_NUM;

  const dialog = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    if (dialog.current === null) return;
    dialog.current.showModal();
  };

  const handleClose = () => {
    if (dialog.current === null) return;
    dialog.current.close();
  };

  return (
    <>
      <Ul>
        <VStack>
          <Text.Display>Wiki Page</Text.Display>
          <Space />
          <Button.Base onClick={handleOpen}>Create</Button.Base>

          <Modal ref={dialog}>
            <CreatePost onClick={handleClose} />
          </Modal>
        </VStack>
        {posts.slice(start, start + MAX_WIKI_PAGE_NUM).map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.theme.size.width};
  height: 600px;
  padding: 12px 24px;

  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  gap: 10px;
`;

function PostItem({ id, title, content }: PostType) {
  const navigate = useNavigate();

  const handleClickPost = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <Li onClick={handleClickPost}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Li>
  );
}
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 12px 24px;
  gap: 10px;
  width: 100%;
  height: 100px;

  border: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    border: 1px solid gray;
  }
  transition: border 0.3s ease-in-out;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Content = styled.p`
  color: darkgray;
  height: 40px;

  text-overflow: ellipsis;
`;
