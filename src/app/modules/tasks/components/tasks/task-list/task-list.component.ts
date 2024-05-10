import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasksList: Task[] = []

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe(
      { 
        next: response => {
          this.tasksList = response.todos
        },
        error: error => console.log(error)
      }
    )
  }

}
