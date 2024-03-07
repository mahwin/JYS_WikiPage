import type { DB } from './types';
import type { PostData } from '../src/posts/types';

import { readFileSync, writeFileSync } from 'fs';

const dbPath = './db/wiki.json';

function getDB() {
  return JSON.parse(readFileSync(dbPath, 'utf-8')) as DB;
}
// db 갖고 오는거, 쓰는거 모두 요청마다 다시 실행하고 동기 함수로 처리해서 최대한 경쟁 상태를 피함.
function main() {
  function save(db: DB) {
    writeFileSync(dbPath, JSON.stringify(db), 'utf8');
  }

  function getPostArrIdx(id: string, db: DB) {
    return db.posts.findIndex((post) => post.id == id);
  }

  return {
    getPost(id: string) {
      const db = getDB();
      const postIdx = getPostArrIdx(id, db);
      if (postIdx === -1) return null;
      return db.posts[postIdx];
    },
    getPosts() {
      const db = getDB();
      return [...db.posts];
    },
    createPost(post: PostData) {
      const db = getDB();
      const newPost = { id: db.metaInfo.nextId.toString(), ...post };
      db.metaInfo.nextId++;
      db.posts.push(newPost);
      save(db);
      return;
    },
    updatePost(id: string, post: PostData) {
      const db = getDB();
      const postIdx = getPostArrIdx(id, db);

      if (postIdx === -1) return null;
      console.log(post);
      db.posts[postIdx] = { ...db.posts[postIdx], ...post };
      save(db);
      return;
    },
    deletePost(id: string) {
      const db = getDB();
      const postIdx = getPostArrIdx(id, db);

      if (postIdx === -1) return null;
      db.posts.splice(postIdx, 1);
      save(db);
      return;
    },
  };
}

const store = main();

export { store };
