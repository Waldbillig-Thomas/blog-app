import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from '../comments/comment';
import { Post } from '../posts/post';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  userName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  passwordHash: string;

  @Field(() => [Post])
  posts?: Post[];

  @Field(() => [Comment])
  comments?: Comment[];

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}
