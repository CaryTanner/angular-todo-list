import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  
})
export class CreatePageComponent implements OnInit {
  createText = new FormControl('')
  constructor() { }

  ngOnInit(): void {
    feather.replace()
  }

}
