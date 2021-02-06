import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as feather from 'feather-icons';
import { Todo } from 'src/app/models/Todo';


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo
  
  
  @Output('delete') deleteEvent: EventEmitter<Todo> = new EventEmitter();

  


  constructor() { }

  ngOnInit(): void {
    feather.replace()
  }

  onDeleteClick(todo: Todo){
    console.log('delete clicked')
    this.deleteEvent.emit(todo)

  }

}
