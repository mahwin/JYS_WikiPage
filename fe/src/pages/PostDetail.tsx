import styled from "styled-components";

import { Header } from "../components/Header";
import { Post } from "../components/Post";
import { Footer } from "../components/Footer";

export function PostDetail() {
  return (
    <PageLayout>
      <Header />
      <Post />
      <Footer />
    </PageLayout>
  );
}

const PageLayout = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
