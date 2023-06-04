import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { ApiResponse } from 'src/global/entities/apiresponse.entity';
import { TaskDto } from './dto/task.dto';

/* This is the service that will be used by the controller.
Normally should use a repository, but for the example we will use fetch.
*/
@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createTaskDto),
    }).then(response => {
        return response.json();
    });
  }

  async findByProjectId(projectId: string) : Promise<TaskDto[]> {
    const url = `http://127.0.0.1:8090/api/collections/task/records?filter=(project='${projectId}')`
    const value = await fetch(
      url,
    ).then(response => response.json()).then((data: ApiResponse<Task>) => data?.items);
    return value.map((item : Task) => {
      return {
        id: item.id,
        name: item.name,
        done: item.done,
      } as TaskDto
    });
  }

  async update(updateTaskDto: UpdateTaskDto) {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records/${updateTaskDto.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateTaskDto),
    }).then(response =>  response.json());
  }

  async remove(id: number) {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records/${id}`,{
        method: 'DELETE',
    }).then(response =>  response.json());
  }
}
