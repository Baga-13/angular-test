import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  bookForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      year: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    const payload = {
      title: this.bookForm.get('title')?.value,
      author: this.bookForm.get('title')?.value,
      year: this.bookForm.get('title')?.value,
    };

    console.log('Book Payload >>', payload);

    
  }
}
