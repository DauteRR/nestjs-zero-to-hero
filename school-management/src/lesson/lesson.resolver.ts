import { Resolver, Query } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';

@Resolver((of) => Lesson)
export class LessonResolver {
  @Query((returns) => Lesson)
  lesson(): void {}
}
