import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { NewTask } from '../../../models/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {

  taskForm: FormGroup;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service: TaskService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      todo: ["", Validators.required],
      completed: [false]
    });
  }

  ngOnInit(): void {
  }

  createTask(): void {
    if (this.taskForm.get('todo')?.errors) {
      this.error = true;
      return;
    }

    this.error = false

    const newTask: NewTask = {
      todo: this.taskForm.get('todo')?.value,
      completed: this.taskForm.get('completed')?.value,
      userId: 1
    }

    this.service.createTask(newTask).subscribe(
      {
        next: response => {
          console.log(response);
          this.taskForm.reset();
          alert('Tarea creada con éxito.')
          this.router.navigate(['/listPage'])
        },
        error: error => {
          alert('La creacion de la tarea ha fallado. :(')
        }
      }
    )
  }

}
