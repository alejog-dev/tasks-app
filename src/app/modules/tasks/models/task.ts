export interface TasksResponse {
  limit: number,
  skip: number,
  todos: Task[],
  total: number
}

export interface NewTask {
  todo: string,
  completed: boolean,
  userId: number
}

export interface Task {
  id: number,
  todo: string,
  completed: boolean,
  userId: number
}