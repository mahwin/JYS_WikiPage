import { api } from "../";

export async function fetchPosts() {
  try {
    const postsResponse = await api.get("/posts");
    return postsResponse.data;
  } catch (e) {
    console.error(e);
  }
}

export type PostType = {
  id: number;
  title: string;
  content: string;
};

export type ResponseType = {
  status: number;
  data: PostType[];
};
