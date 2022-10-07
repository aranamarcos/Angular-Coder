import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  alumnosAdmin: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlumno($event: any): void {
    this.alumnosAdmin.push($event);
  }

}
