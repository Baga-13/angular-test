import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HomeComponent, ViewComponent, ListComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, FormsModule],
})
export class HomeModule {}
