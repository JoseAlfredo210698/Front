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
  public auth: boolean = false
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
    let user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      return user['token'] ? this.auth = true : this.auth = false;
    } else {
      return this.auth = false;
    }
  }




  toCreateUnit(params: string, token: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token
      })
    }
    return this.http.post(`${this.api}unit/`, params, httpOptions)
  }


}
