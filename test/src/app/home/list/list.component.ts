import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  books: any[] = [];
  searchQuery: string = '';
  filteredBooks: any[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    return this.apiService.getBooks().subscribe({
      next: (response) => {
        this.books = response;
        console.log('Here are the books >>', response);
      },
      error: (error) => {
        console.error('Error fetching books:', error);
      },
    });
  }

  onDelete(id: any) {
    return this.apiService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter((book) => book.id !== id);
        console.log('Book deleted successfully');
      },
      error: (error) => {
        console.error('Error deleting book:', error);
      },
    });
  }

  routeBookForm() {
    this.router.navigate(['/home/home'], {
      relativeTo: this.route,
    });
  }

  routeUpdateBookForm() {
    this.router.navigate(['/home/update/:id'], {
      relativeTo: this.route,
    });
  }

  searchBooks() {
    if (!this.searchQuery) {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(
        (book) =>
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
