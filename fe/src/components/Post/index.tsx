import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPost } from "../../apis/Post";
import { Button, VStack, Space } from "../Common";
import { updatePost } from "../../apis/Post";
import styled from "styled-components";

export function Post() {
  const { id } = useParams();

  const [post, setPost] = useState({ title: "", content: "" });
  const [copy, setCopy] = useState([]);

  const [canUpdate, setCanUpdate] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    (async function () {
      const res = await fetchPost(id);
      if (res.status === 200) {
        setPost(res.data);
        setCopy(res.data);
      }
    })();
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPost((prev) => ({ ...prev, title: value }));
  };

  const handleTextAreaChange = (e) => {
    const { value } = e.target;
    setPost((prev) => ({ ...prev, content: value }));
  };

  useEffect(() => {
    if (JSON.stringify(post) !== JSON.stringify(copy)) {
      setCanUpdate(true);
    } else {
      setCanUpdate(false);
    }
  }, [post]);

  const handleEditClick = () => {
    setCanEdit(true);
  };

  const handleEditCancleClick = () => {
    setCanEdit(false);
    setPost(copy);
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
        {canEdit ? (
          <Button.Base onClick={handleEditCancleClick}>편집 취소</Button.Base>
        ) : (
          <Button.Base onClick={handleEditClick}>편집</Button.Base>
        )}
        <Button.Submit onClick={handleClickSubmit} disabled={!canUpdate}>
          업데이트
        </Button.Submit>
      </VStack>
      <TitleInput
        disabled={!canEdit}
        value={post.title}
        onChange={handleInputChange}
      />
      <ContentInput
        disabled={!canEdit}
        value={post.content}
        onChange={handleTextAreaChange}
      />
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
`;

const ContentInput = styled.textarea`
  flex-grow: 1;
`;
