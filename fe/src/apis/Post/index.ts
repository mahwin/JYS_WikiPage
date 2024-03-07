import { api } from "../";

export async function fetchPost(id) {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function updatePost(id, data: PostType) {
  try {
    const res = await api.patch(`/posts/${id}`, data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export type PostType = {
  title?: string;
  content?: string;
};

export type ResponseType = {
  status: number;
  data: PostType;
};
