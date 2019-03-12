import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/Services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-equipos',
  templateUrl: './form-equipos.component.html',
  styleUrls: ['./form-equipos.component.css']
})
export class FormEquiposComponent implements OnInit {
  formEquipos: FormGroup
  submited = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
  ) {
    this.formEquipos = this.formBuilder.group({
      Brand: ['', Validators.required],
      Model: ['', Validators.required],
      Type: ['', Validators.required],
      RealTime: ['', Validators.required],
      Battery: ['', Validators.required],
      ComunicationMethods: ['', Validators.required],
      Precision: ['', Validators.required],
      Unit: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  toCreate(){
    this.submited = true;
    if (this.formEquipos.invalid) {
      return;
    }
    console.log(this.formEquipos.value)
    this.api.login(this.formEquipos.value).subscribe(response => {
        this.router.navigateByUrl('register/login');
    }, error => {
      console.log(error)
    });
  }

  get formCheck() {
    return this.formEquipos.controls
  }

}
