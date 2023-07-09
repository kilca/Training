import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { Project } from "../model/project.model";
import { HttpClient } from "@angular/common/http";
import { Task } from "../model/task.model";
import { PageRecord } from "src/model/api/pagerecord.model";
import { TaskDTO } from "src/model/api/taskdto";

@Injectable({
    providedIn: 'root',
})
export class AppService {
  
    constructor(private http: HttpClient) { }
  
    getProjects(): Observable<PageRecord<Project>> {
        const url = 'http://127.0.0.1:8090/api/collections/project/records?page=1&perPage=30';
        return this.http.get<PageRecord<Project>>(url);
    }

    getTasks(projectId: string): Observable<PageRecord<Task>> {
        const url = `http://127.0.0.1:8090/api/collections/task/records?filter=(project='${projectId}')`;
        return this.http.get<PageRecord<Task>>(url);
    }

    createTask(projectId: string, name: string): Observable<TaskDTO> {
        const url = 'http://127.0.0.1:8090/api/collections/task/records/';
        const body = { name: name, project: projectId };
        return this.http.post<TaskDTO>(url, body);
    }

    deleteTask(id: string) : Observable<null>{
        const url = `http://127.0.0.1:8090/api/collections/task/records/${id}`;
        return this.http.delete<null>(url);
    }  
      
    updateTask(task: Task): Observable<TaskDTO> {
        const url = `http://127.0.0.1:8090/api/collections/task/records/${task.id}`
        return this.http.patch<TaskDTO>(url, task);
    }  

}