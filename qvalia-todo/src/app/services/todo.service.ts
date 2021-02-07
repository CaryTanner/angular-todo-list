import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import { tap } from 'rxjs/operators';

//TODO: add DB error handling


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = '/api/todos';

   _todos = new Subject<Todo[]>();;
   dataStore: { todos: Todo[] } = { todos: [] };
  todos = this._todos.asObservable();

  constructor(private http: HttpClient) {}

  

  // Get Todos
  fetchTodos() {
    this.http.get<Todo[]>(`${this.todosUrl}`).subscribe(
      (data) => {
        this.dataStore.todos = data;
        this._todos.next(Object.assign({}, this.dataStore).todos);
      },
      (error) => console.log('Fetch todos failed')
    );
  }

  // Get single Todo
  getSingleTodo(id: string) {
    return this.http.get<Todo>(`${this.todosUrl}/${id}`)
  }

  // update Todo & set complete
  updateTodo(todo: Todo) {
    const url = `${this.todosUrl}/${todo._id}`;
    this.http.put<Todo>(url, todo, httpOptions).subscribe((data) => {
      
      this.dataStore.todos.forEach((t, index) => {
        if (t._id === data._id) {
          this.dataStore.todos[index] = data;
        }
      });
      this._todos.next(Object.assign({}, this.dataStore).todos);
      return ('update finished')
    },
    (error) => console.log('Update todo failed')
    );
  }

  // Delete Todo
  deleteTodo(todo: Todo){
    const url = `${this.todosUrl}/${todo._id}`;
    this.http.delete<Todo>(url, httpOptions).subscribe(response => {
      this.dataStore.todos.forEach((item, index)=> {
        if(item._id === todo._id){
          this.dataStore.todos.splice(index, 1)
        }
      })
      this._todos.next(Object.assign({}, this.dataStore).todos);
    },
    (error) => console.log('Delete todo failed')
    )
    
  }

  // Add Todo
  addTodo(todo: Todo) {
    this.http.post<Todo>(this.todosUrl, todo, httpOptions).subscribe(
      (data) => {
        this.dataStore.todos.push(data);
        this._todos.next(Object.assign({}, this.dataStore).todos);
      },
      (error) => console.log('Create todo failed')
    );
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http.put(url, todo, httpOptions)
  }
}
