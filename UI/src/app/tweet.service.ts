import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class TweetService {
  private readonly searchUrl = 'http://localhost:8999/search';

  constructor(private http: HttpClient) { }

  getData (query: string): Observable<any> {
    return this.http.get(`${this.searchUrl}/${query}`);
  }
}
