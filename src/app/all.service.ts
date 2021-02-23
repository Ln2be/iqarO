import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  post(mpost: Post): Observable<Post>{
    return <Observable<Post>>this.http.post(this.BASE_URL+'post', mpost)
  }

  // BASE_URL = 'http://localhost:3000/'
  BASE_URL = 'https://iqarnktt.com:3000/'

  get(query: string): Observable<any>{
    return this.http.get(this.BASE_URL+'posts'+query)
  }

  getPost(query: string): Observable<any>{
    return this.http.get(this.BASE_URL+'post'+query)
  }

  user = 'guest';

  constructor(
    private http:HttpClient
  ) { }

  getUser() {
    return this.user
  }

  log(message:any){
    console.log(message)
  }
}
