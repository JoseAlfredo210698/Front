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
    // this.formEquipos.value.Unit = [parseInt(this.formEquipos.value.Unit)]
    console.log('Create unit: ', this.formEquipos.value)
    this.api.toCreateDevice(this.formEquipos.value, JSON.parse(localStorage.getItem('userData')).token).subscribe(response => {
        this.router.navigateByUrl('views/equipos');
    }, error => {
      console.log(error)
    });
  }

  get formCheck() {
    return this.formEquipos.controls
  }

}
