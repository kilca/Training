import { Injectable } from "@angular/core";
import { Observable, Subscription, tap } from "rxjs";
import { Project } from "../model/project.model";
import { HttpClient } from "@angular/common/http";
import { Task } from "../model/task.model";

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private project: Project[] = [];
  
    constructor(private http: HttpClient) { }
  
    getProjects(): Observable<{items:Project[]}> {
        const url = 'http://127.0.0.1:8090/api/collections/project/records?page=1&perPage=30';
        return this.http.get<{items:Project[]}>(url);
    }

    getTasks(projectId: string): Observable<{items:Task[]}> {
        const url = `http://127.0.0.1:8090/api/collections/task/records?filter=(project='${projectId}')`;
        return this.http.get<{items:Task[]}>(url);
    }

    createTask(projectId: string, name: string): Observable<any> {
        const url = 'http://127.0.0.1:8090/api/collections/task/records/';
        const body = { name: name, project: projectId };
        return this.http.post(url, body);
    }

    deleteTask(id: string) : Observable<any>{
        const url = `http://127.0.0.1:8090/api/collections/task/records/${id}`;
        return this.http.delete(url);
      }  
      
    updateTask(task: Task): Observable<any> {
        const url = `http://127.0.0.1:8090/api/collections/task/records/${task.id}`
        return this.http.patch(url, task);
    }  

}