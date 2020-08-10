import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@ObjectType('Lesson')
@Entity()
export class Lesson {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field((type) => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  startDate: string;

  @Column()
  @Field()
  endDate: string;

  @Column()
  @Field(() => [Student])
  students: string[];
}
