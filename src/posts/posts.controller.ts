import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './post.interface';

//GET/POST/PUT/DELETE等を選択して、サービス（実際の機能）から呼び出す。

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): PostType[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): PostType {
    return this.postsService.findById(id);
  }

  @Post()
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): void {
    this.postsService.deleteById(id);
  }
}
