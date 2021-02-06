import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { EditPageComponent } from '../components/edit-page/edit-page.component';
import { CreatePageComponent } from '../components/create-page/create-page.component';

const routes: Routes = [
  { path: '', component: TodoListComponent  },
  { path: 'edit/:id', component: EditPageComponent, data: { animation: 'isLeft' }},
  { path: 'create', component: CreatePageComponent, data: { animation: 'isRight' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
