import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => Lesson)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Mutation(() => Lesson)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }
}
