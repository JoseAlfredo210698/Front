import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, from } from 'rxjs'
import { API } from 'src/app/app-config'

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'applications/json',
    'Authorization': 'Token '
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = API;

  constructor(private http: HttpClient) { }

  login(params: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.post(`${this.api}login/`, params, httpOptions)
  }

  isAuthenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user_data'));
    console.log('User: ', user)
    if (user) {
      return user['token'] ? true : false;
    } else {
      return false;
    }
  }

}
