import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, expand, map, Observable, reduce, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string = "https://reqres.in/api/users/";
  contactMes = new BehaviorSubject({name: '', message: ''})

  constructor(private http : HttpClient) { }

  fetchUser() : Observable<any> {
    let page = 1

    return this.http.get<any>(`${this.url}?page=${page}`).pipe(
      expand(response =>
        response.page < response.total_pages ? this.http.get<any>(`${this.url}?page=${response.page + 1}`) : []
      ),
      // takeWhile(response => response.page <= response.total_pages, true), 
      map(response => response.data), // Extract `data` from each response
      reduce((acc, data) => acc.concat(data), []) // Merge all pages into one array
    );
  }

  sendContactMes(name: string, message: string) : void {
    this.contactMes.next({name, message})
  }

}
