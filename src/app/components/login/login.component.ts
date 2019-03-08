import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/Services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/Services/websocket.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [WebsocketService]
})
export class LoginComponent implements OnDestroy, OnInit {
  formLogin: FormGroup;
  submited = false;
  datas: any = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public webSocket: WebsocketService

  ) {
    
    this.webSocket.getPosition()

    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    if (api.isAuthenticated()) {
      this.router.navigate(['gps/unidades']);
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    localStorage.removeItem('token');
  }

  getLogin(): void {
    this.api.login(this.formLogin.value).subscribe(
      response => {
        // console.log(response.data)
        this.datas = response.data;
        // localStorage.setItem('token', this.datas.token)
      }
    )

    this.api.login(this.formLogin.value).subscribe(response => {
      if (response.token) {
        console.log('token: ', response)
        // let school = response.data[0].school[0];
        // delete response.data[0].school;
        let user = Object.assign({ token: response.token });
        localStorage.setItem('user_data', JSON.stringify(user));
        this.router.navigateByUrl('gps/unidades');
      } else {
        // if(response.message.email) this.toastr.warning(response.message.email);
        // else this.toastr.warning(response.message);
      }
    }, error => {
      // this.toastr.error(error);
      console.log(error)
    });
  }

  sendLogin() {
    this.submited = true;
    if (this.formLogin.invalid) {
      return;
    }
    this.getLogin()
  }

  ngOnDestroy(): void {

  }

  get f() { return this.formLogin.controls }

}
