import { Module } from '@nestjs/common';
import { CommentsService } from '../comments/comments.service';
import { PostsService } from '../posts/posts.service';
import { PrismaService } from '../prisma/prisma.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [
    UsersResolver,

    CommentsService,
    PostsService,
    PrismaService,
    UsersService,
  ],
})
export class UsersModule {}
