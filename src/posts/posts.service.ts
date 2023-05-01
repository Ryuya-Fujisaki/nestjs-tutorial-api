import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

//実際の機能を実装するところ。関数の定義。

@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];

  findAll(): PostType[] {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }

  findById(id: string): PostType {
    return this.posts.find((post) => post.id === id);
  }

  deleteById(id: string): void {
    this.posts.splice(
      this.posts.findIndex((post) => post.id === id),
      1,
    );
  }
}
