import { Component } from '@angular/core';
import { ApiService } from 'src/Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiRest';
  auth:boolean = false
  constructor(
    public api: ApiService,
    private router: Router,
  ){ }

  logout(){
    console.log('logout')
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
