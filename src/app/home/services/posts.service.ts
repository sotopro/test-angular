import { HttpClient } from '@angular/common/http';
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
  public deletePost(posts: Posts): Observable<Posts> {
    const url = `${this.apiUrl}/${posts.id}`
    return this.http.delete<Posts>(url)
  }
}
