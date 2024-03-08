import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { fetchPost } from "../../apis/Post";
import { Button, VStack, Space } from "../Common";
import { updatePost } from "../../apis/Post";
import { usePosts } from "../../hooks/usePosts";
import { INPUT, TEXTAREA } from "../../constants/htmlElement";
import { ContentLink } from "./ContentLink";

import { Link } from "react-router-dom";

import styled from "styled-components";

export function Post() {
  const { id } = useParams();

  const [post, setPost] = useState({ title: "", content: "" });
  const [origin, setOrigin] = useState({ title: "", content: "" });

  const { posts } = usePosts();
  const [sortedPosts, setSortedPosts] = useState([]);

  const [canUpdate, setCanUpdate] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    (async function () {
      const { data, status } = await fetchPost(id);

      if (status === 200) {
        setPost(Object.assign({}, data));
        setOrigin(Object.assign({}, data));
      }
    })();
  }, []);

  useEffect(() => {
    if (!posts) return;
    setSortedPosts(posts.sort((a, b) => b.title.length - a.title.length));
  }, [posts]);

  const handleChange = (e) => {
    const { tagName, value } = e.target;

    if (tagName === "INPUT") {
      setPost((prev) => ({ ...prev, title: value }));
      return;
    }
    if (tagName === "TEXTAREA") {
      setPost((prev) => ({ ...prev, content: value }));
      return;
    }
  };

  useEffect(() => {
    if (JSON.stringify(post) !== JSON.stringify(origin)) {
      setCanUpdate(true);
    } else {
      setCanUpdate(false);
    }
  }, [post]);

  const handleEditClick = () => {
    if (canEdit) setPost(Object.assign({}, origin));
    setCanEdit((prev) => !prev);
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, post);
    alert("업데이트 완료");
  };

  return (
    <PostWrapper>
      <VStack>
        <Space />

        <Button.Base onClick={handleEditClick}>
          {canEdit ? "편집 취소" : "편집"}
        </Button.Base>

        <Button.Submit onClick={handleClickSubmit} disabled={!canUpdate}>
          업데이트
        </Button.Submit>
      </VStack>
      <TitleInput
        disabled={!canEdit}
        value={post.title}
        onChange={handleChange}
      />
      {canEdit ? (
        <ContentInput value={post.content} onChange={handleChange} />
      ) : (
        <ContentLink content={origin} sortedPosts={sortedPosts} />
      )}
    </PostWrapper>
  );
}

const PostWrapper = styled.main`
  border: 1px solid red;
  padding: 12px 24px;
  width: ${(props) => props.theme.size.width};
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleInput = styled.input`
  height: 40px;
  padding: 12px 24px;
`;

const ContentInput = styled.textarea`
  flex-grow: 1;
  padding: 12px 24px;
`;
