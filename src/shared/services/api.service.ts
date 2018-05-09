import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private apiUrl = 'http://karoldevblog.me/api/post';
  // private apiUrl = 'http://localhost:5000/api/post';

  constructor(private http: HttpClient) {
  }

  public get(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  public add(post: Post): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  public search(query: string, page: number = 1): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/search/${query}/${page}`);
}
}
