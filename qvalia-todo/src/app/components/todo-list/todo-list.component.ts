import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',

})
export class TodoListComponent implements OnInit {
  todos: Todo[];


  constructor( private todoService:TodoService) { }

  ngOnInit(): void {
    //icons
    feather.replace()
    
    //fetch all todos
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos
      
    });
  }

  deleteTodo(todo: Todo){
    //remove from UI
    this.todos = this.todos.filter(t => t._id !== todo._id);
    //
      this.todoService.deleteTodo(todo)
  }

}
