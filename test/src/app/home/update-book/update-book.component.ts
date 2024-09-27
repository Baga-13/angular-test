import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;
  bookId!: string;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id')!; // Get the book ID from the route
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      year: ['', [Validators.required]],
    });

    this.fetchBook(); // Fetch the existing book details
  }

  fetchBook() {
    this.apiService.getBook(this.bookId).subscribe({
      next: (book) => {
        this.bookForm.patchValue(book); // Populate the form with the book details
      },
      error: (error) => {
        console.error('Error fetching book:', error); // Log any errors
      },
    });
  }

  onSubmit() {
    if (this.bookForm.valid) {
      this.apiService.updateBook(this.bookId, this.bookForm.value).subscribe({
        next: () => {
          console.log('Book updated successfully');
          this.routeBookList();
        },
        error: (error) => {
          console.error('Error updating book:', error); // Log any errors
        },
      });
    }
  }

  routeBookList() {
    this.router.navigate(['/home/booklist'], {
      relativeTo: this.route,
    });
  }
}
