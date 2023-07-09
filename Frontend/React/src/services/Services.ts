import { PageRecord } from "../model/api/pagerecord.model";
import { TaskDTO } from "../model/api/taskdto";
import { Project } from "../model/project.model";
import { Task } from "../model/task.model";

export async function getTasks(params: string): Promise<Task[]> {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records?filter=(project='${params}')`
    ).then(response => response.json()).then((data: PageRecord<Task>) => data?.items);
}

export async function getProjects(): Promise<Project[]> {
    return fetch(
      'http://127.0.0.1:8090/api/collections/project/records?page=1&perPage=30',
    ).then(response => response.json()).then((data: PageRecord<Project>) => data?.items);
}

export async function deleteTask(id: string): Promise<Response> {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records/${id}`,{
        method: 'DELETE',
    });
  }  
  
export async function updateTask(task: Task): Promise<TaskDTO> {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records/${task.id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    }).then(response =>  response.json());
}  

export async function createTask(name: string,projectId:string): Promise<TaskDTO> {
    return fetch(
      `http://127.0.0.1:8090/api/collections/task/records/`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, project:projectId }),
    }).then(response => {
        return response.json();
    });
}