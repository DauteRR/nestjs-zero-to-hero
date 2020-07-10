import { Injectable } from '@nestjs/common';

export interface Task {}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }
}
