import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { EditPageComponent } from '../components/edit-page/edit-page.component';
import { CreatePageComponent } from '../components/create-page/create-page.component';

const routes: Routes = [
  { path: '', component: TodoListComponent  },
  { path: 'edit/:id', component: EditPageComponent},
  { path: 'create', component: CreatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
