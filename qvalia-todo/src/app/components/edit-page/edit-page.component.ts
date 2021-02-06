import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  
})
export class EditPageComponent implements OnInit {
  editText = new FormControl('')
  constructor() { }

  ngOnInit(): void {
    feather.replace()
  }

}
