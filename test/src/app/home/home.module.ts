import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { ApiService } from '../service/api.service';
import { UpdateBookComponent } from './update-book/update-book.component';

@NgModule({
  declarations: [HomeComponent, ListComponent, UpdateBookComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ApiService],
})
export class HomeModule {}
