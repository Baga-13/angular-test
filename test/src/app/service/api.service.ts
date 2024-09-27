import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiModel } from '../model/api-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private ApiUrl = 'http//localhost:3000';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(`${this.ApiUrl}/books`);
  }
  getBook(id: number): Observable<any> {
    return this.http.get(`${this.ApiUrl}/books/${id}`);
  }
  addBook(data: ApiModel): Observable<any> {
    return this.http.post(`${this.ApiUrl}/books`, data);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.ApiUrl}/books/${id}`);
  }
}
