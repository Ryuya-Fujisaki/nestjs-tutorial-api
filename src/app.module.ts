import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [ItemsModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
