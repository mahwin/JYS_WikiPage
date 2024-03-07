import styled from "styled-components";

import { Header } from "../components/Header";
import { Post } from "../components/Post";

export function PostDetail() {
  return (
    <PageLayout>
      <Header />
      <Post />
    </PageLayout>
  );
}

const PageLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
