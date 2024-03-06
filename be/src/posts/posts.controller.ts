import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import type { PostData } from './types';
import type { PostType } from '../../db/types';

type Status = {
  status: number;
};

type GetPost = Status & { data: PostType | null };

type GetPosts = Status & { data: PostType[] };

@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/posts/:id')
  getPost(@Param('id') id: string): GetPost {
    return { status: 200, data: this.postsService.getPost(id) };
  }

  @Get('/posts')
  getPosts(): GetPosts {
    return { status: 200, data: this.postsService.getPosts() };
  }

  @Post('/posts')
  post(@Body() post: PostData): Status {
    this.postsService.createPost(post);
    return { status: 201 };
  }

  @Delete('/posts/:id')
  deletePost(@Param('id') id: string): Status {
    this.postsService.deletePost(id);
    return { status: 204 };
  }
  @Patch('/posts/:id')
  updatePost(@Param('id') id: string, @Body() post: PostData): Status {
    this.postsService.updatePost(id, post);
    return { status: 204 };
  }
}
