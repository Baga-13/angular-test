import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'booklist', component: ListComponent },
  { path: '**', redirectTo: 'home' },
];
