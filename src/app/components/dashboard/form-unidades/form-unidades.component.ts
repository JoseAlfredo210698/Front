import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/Services/api.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-unidades',
  templateUrl: './form-unidades.component.html',
  styleUrls: ['./form-unidades.component.css']
})
export class FormUnidadesComponent implements OnInit {
  formUnidades: FormGroup
  submited = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
  ) {
    this.formUnidades = this.formBuilder.group({
      LicensePlate: ['', Validators.required],
      Brand: ['', Validators.required],
      Model: ['', Validators.required],
      IMEI: ['', Validators.required],
      Year: ['', Validators.required],
      kilometers: ['', Validators.required],
      Power: ['', Validators.required],
      Engine: ['', Validators.required],
      Transmition: ['', Validators.required],
      User: ['']
    })
  }

  ngOnInit() {
  }

  toCreate() {
    this.submited = true;
    if (this.formUnidades.invalid) {
      return;
    }
    this.formUnidades.value.User = [JSON.parse(localStorage.getItem('userData')).data.userId]
    console.log(this.formUnidades.value)
    this.api.toCreateUnit(this.formUnidades.value, JSON.parse(localStorage.getItem('userData')).token ).subscribe(response => {
      console.log('Creacion de unidad: ', response)
      this.router.navigateByUrl('views/unidades');
    }, error => {
      console.log(error)
    });
  }

  get formCheck() {
    return this.formUnidades.controls
  }

}
