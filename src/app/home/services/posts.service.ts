import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from './Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'http://localhost:5000/posts';


  constructor(private http: HttpClient) { }

  public getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.apiUrl)
  }
}
