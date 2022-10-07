import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  @Input() alumnos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
