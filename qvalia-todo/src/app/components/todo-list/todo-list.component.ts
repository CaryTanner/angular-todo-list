import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';
import * as feather from 'feather-icons';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',

})
export class TodoListComponent implements OnInit {
  

  unfinished
  finished


  constructor( private todoService: TodoService) { 
   
  }

  ngOnInit(): void {
    //icons
    feather.replace()
    this.todoService.fetchTodos()
   
    
    this.finished = this.todoService.todos.pipe(
      map(todos => todos.filter(todo => todo.complete === true) )
    )
    this.unfinished = this.todoService.todos.pipe(
      map(todos => todos.filter(todo => todo.complete === false) )
    )
    
      
    
   
  }

  

}
