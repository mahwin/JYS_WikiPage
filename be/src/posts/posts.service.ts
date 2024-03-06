import { Injectable } from '@nestjs/common';
import type { PostData } from './types';
import { store } from '../../db/store';

@Injectable()
export class PostsService {
  getPost(id: string) {
    return store.getPost(id);
  }
  getPosts() {
    return store.getPosts();
  }
  createPost(post: PostData) {
    store.createPost(post);
    return { ok: true };
  }
  updatePost(id: string, post: PostData) {
    return store.updatePost(id, post);
  }
  deletePost(id: string) {
    return store.deletePost(id);
  }
}
