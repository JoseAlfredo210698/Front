import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/Services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email: string = ''
  username: string = ''


  constructor(
    private api: ApiService
  ) {
    let data = JSON.parse(localStorage.getItem('userData')).data
    console.log(data)
    console.log(api.getProfile(data.userId, JSON.parse(localStorage.getItem('userData')).token))
    this.email = data.email
    this.username = data.username
  }

  ngOnInit() {
    
  }

}
