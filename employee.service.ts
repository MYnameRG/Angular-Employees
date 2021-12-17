import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }

  getPostId(id: number) {
    return this.http.get(`${this.url}/posts/${id}`);
  }

  createPost(post: any) {
    return this.http.post(`${this.url}/posts`, JSON.stringify(post));
  }

  updatePost(post: any) {
    return this.http.put(`${this.url}/posts/${post.id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.url}/posts/${id}`);
  }
}
