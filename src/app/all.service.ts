import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  BASE_URL = 'https://iqarnktt.com'

  get(query: string): Observable<any>{
    return this.http.get(this.BASE_URL+'/posts'+query)
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
