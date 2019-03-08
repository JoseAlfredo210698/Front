import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-unidades',
  templateUrl: './form-unidades.component.html',
  styleUrls: ['./form-unidades.component.css']
})
export class FormUnidadesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

}
