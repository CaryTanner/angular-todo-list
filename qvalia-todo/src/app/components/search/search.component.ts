import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {
  searchText = new FormControl('')

  todos 

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.todos
  }

}
