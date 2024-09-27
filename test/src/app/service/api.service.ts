import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/api-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ApiUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.ApiUrl);
  }
  getBook(id: any): Observable<any> {
    return this.http.get(`${this.ApiUrl}/${id}`);
  }
  addBook(book: Book): Observable<any> {
    return this.http.post<Book>(this.ApiUrl, book);
  }
  deleteBook(id: any): Observable<any> {
    return this.http.delete(`${this.ApiUrl}/${id}`);
  }
  updateBook(id: any, book: any): Observable<any> {
    return this.http.put(`${this.ApiUrl}/${id}`, book);
  }  
}
