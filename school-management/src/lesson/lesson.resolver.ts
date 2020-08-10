import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { CreateLessonInput, AssignStudentsToLessonInput } from './lesson.input';

@Resolver(() => Lesson)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => Lesson)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [Lesson])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(() => Lesson)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => Lesson)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput
  ) {
    const { lessonId, studentsIds } = assignStudentsToLessonInput;

    return this.lessonService.assignStudentsToLesson(lessonId, studentsIds);
  }
}
