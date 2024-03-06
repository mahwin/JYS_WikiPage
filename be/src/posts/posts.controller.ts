import { Controller, Get, Post, Delete, Param, Body, Patch } from "@nestjs/common";
import { PostsService } from "./posts.service";
import type {PostData} from './types'


@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/posts/:id')
  getPost(@Param('id') id: string): string {
    return this.postsService.getPost(id);
  }

  @Get('/posts')
  getPosts(): string {
    return this.postsService.getPosts();
  }

  @Post('/posts')
  post(@Body() post: PostData): string {
    return this.postsService.createPost(post);
  }

  @Delete('/posts/:id')
  deletePost(@Param('id') id: string): string {
    return this.postsService.deletePost(id);
  }
  @Patch('/posts/:id')
  updatePost(@Param('id') id: string, @Body() post: PostData): string {
    return this.postsService.updatePost(id, post);
  }
}
