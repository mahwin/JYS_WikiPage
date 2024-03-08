import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { Pagenation } from "../components/Pagenation";
import styled from "styled-components";
import { usePosts } from "../hooks/usePosts";
import { usePagenation } from "../hooks/usePagenation";
import { Footer } from "../components/Footer";

export function Main() {
  const { posts } = usePosts();

  const pagenationProps = usePagenation(posts?.length);

  return (
    <MainPageLayout>
      <Header />
      <PostList posts={posts} page={pagenationProps.currentPage} />
      <Pagenation {...pagenationProps} />
      <Footer />
    </MainPageLayout>
  );
}

const MainPageLayout = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
