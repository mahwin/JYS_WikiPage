import { Injectable } from "@nestjs/common";
import type { PostData } from './types'
// import db from '../db/wiki.json'

@Injectable()
export class PostsService {
  getPost(id:string) {
    return `${id} 포스트 하나 주세요`;
  }
  getPosts() {
    return "포스트 다 주세요";
  }
  createPost(post: PostData) {
    return `${JSON.stringify(post)} 포스트 생성 완료`;
  }
  updatePost(id: string, post: PostData) {
    return "포스트 업데이트 완료";
  }
  deletePost(id) {
    return `${id} 포스트 삭제 완료`;
  }
}
