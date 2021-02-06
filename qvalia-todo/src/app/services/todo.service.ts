import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'http://localhost:5000/api/todos';
 

  constructor(private http:HttpClient) { }

  // Get Todos
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}`);
  }


  // update Todo
  updateTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  // Delete Todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http.put(url, todo, httpOptions);
  }
}