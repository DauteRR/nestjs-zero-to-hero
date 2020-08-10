import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@ObjectType('Student')
@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  @Field((type) => ID)
  id: string;

  @Column()
  @Field()
  firstName: string;

  @Column()
  @Field()
  lastName: string;
}
