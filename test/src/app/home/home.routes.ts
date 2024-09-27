import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { UpdateBookComponent } from './update-book/update-book.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'update/:id', component: UpdateBookComponent },
  { path: 'booklist', component: ListComponent },
  { path: '**', redirectTo: 'home' },
];
