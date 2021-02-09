import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { SearchComponent } from './components/search/search.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NavBarComponent,
    EditPageComponent,
    CreatePageComponent,
    SearchComponent,
    TodoCardComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
