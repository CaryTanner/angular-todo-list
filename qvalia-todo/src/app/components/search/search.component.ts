import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {
  searchText = new FormControl('')

  unfinished: Observable<Todo[]> 
  @ViewChild('searchInput') searchInput: ElementRef
  @ViewChild('searchResults') searchResults: ElementRef

  isMenuOpen: boolean = false

  constructor(private todoService: TodoService, private renderer: Renderer2) { 

    //hide search results and collapse search field on click outside
     
    this.renderer.listen('window', 'click',(event:Event)=>{
      
      if(!this.searchInput.nativeElement.contains(event.target) && !this.searchResults.nativeElement.contains(event.target)) {
          this.isMenuOpen=false;
      }
  });

  }

  ngOnInit(): void {
    
    this.unfinished = this.todoService.todos.pipe(
      map(todos => todos.filter(todo => todo.complete === false) )
    )
  }

//expand search field on click
  setIsMenuOpen = () => {  
    this.isMenuOpen = true
  }
  
}
