import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Student } from './student.entity';
import { StudentService } from './student.service';
import { CreateStudentInput } from './student.input';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(() => Student)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query(() => [Student])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation(() => Student)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
