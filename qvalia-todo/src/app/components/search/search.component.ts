import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent implements OnInit {
  searchText = new FormControl('')

  constructor() { }

  ngOnInit(): void {
  }

}
