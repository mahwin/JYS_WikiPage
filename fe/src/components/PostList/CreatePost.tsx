import styled from "styled-components";
import { Button, Space, VStack, HStack } from "../Common/";
import { MouseEvent, useRef, useEffect, useState } from "react";
import { createPost } from "../../apis/Post";
import { useNavigate } from "react-router-dom";

import { UNIQUE_CHAR } from "../../constants/uniqueChar.ts";

export function CreatePost({ onClick }) {
  const inputRef = useRef("input");
  const textAreaRef = useRef("textArea");
  const navigate = useNavigate();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const title = inputRef.current.value;
    const content = textAreaRef.current.value;

    if (title.includes(UNIQUE_CHAR) || content.includes(UNIQUE_CHAR)) {
      alert("# 특수문자는 사용할 수 없습니다.");
      return;
    }

    if (!title || !content) {
      alert("제목과 본문을 작성해주세요");
      return;
    }

    (async function () {
      const res = await createPost({
        title,
        content,
      });

      if (res.status === 201) {
        window.location.reload();
      }
    })();
  };

  return (
    <Wrapper>
      <VStack>
        <Space />
        <Button.Submit onClick={handleSubmit}>작성하기</Button.Submit>
        <Button.Base onClick={onClick}>x</Button.Base>
      </VStack>
      <HStack>
        <Label htmlFor="title">제목을 작성하세요! </Label>
        <Input id="title" ref={inputRef} />
      </HStack>
      <ContentWrapper>
        <Label htmlFor="content">본문을 작성하세요! </Label>
        <Content id="content" ref={textAreaRef} />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid gray;
  border-radius: 1rem;
  width: 600px;
  height: 600px;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #000;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Content = styled.textarea`
  width: 100%;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid #000;
  flex-grow: 1;
`;
