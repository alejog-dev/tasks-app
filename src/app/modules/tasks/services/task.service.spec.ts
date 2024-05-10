import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/config/api.config';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';



describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ {  provide: API_BASE_URL, useValue: environment.api} ]
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return tasks', () => {

    const mock = { limit: 1, todos: [{ todo: 'a', completed: false, userId: 1, id: 1 }], total: 1, skip: 0}

    spyOn(service, 'getTasks').and.returnValue(of(mock))

    const response = service.getTasks()

    response.subscribe({
      next: response => {
        expect(response.todos).toEqual([ { todo: 'a', completed: false, userId: 1, id: 1}])
      }
    })
  });
});
