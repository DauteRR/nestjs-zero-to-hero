import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson(): LessonType {
    return {
      id: 'id',
      name: 'Math',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString()
    };
  }
}
