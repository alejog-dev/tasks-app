import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http'
import { API_BASE_URL, SERVICE_TASKS } from '../../../config/api.config';
import { NewTask, Task, TasksResponse } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient, 
    @Inject(API_BASE_URL) private baseUrl: string
  ) { }


  getTasks(): Observable<TasksResponse> {
    return this.http.get<TasksResponse>(`${this.baseUrl}${SERVICE_TASKS}`)
  }

  createTask(newTask: NewTask): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}${SERVICE_TASKS}/add`, newTask)
  }
}
