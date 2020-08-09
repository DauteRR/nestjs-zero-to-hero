import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './tasks.repository';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: number, user: User): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    deleteTask(id: number, user: User): Promise<void>;
    updateTaskStatus(id: number, status: TaskStatus, user: User): Promise<Task>;
}
