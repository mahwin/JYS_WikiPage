import { fetchPosts } from "../apis/PostList";
import { useState, useEffect } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetchPosts();
      if (response.status === 200) {
        setPosts(response.data);
      }
    })();
  }, []);
  return { posts };
}
