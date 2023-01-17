import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  arepas = [
    { nombre: 'Reina Pepiada', descripcion: 'Con pepperoni y queso', precio: 15 },
    { nombre: 'Peluda', descripcion: 'Con queso y tocino', precio: 12 },
    { nombre: 'la Arepa', descripcion: 'Con lechuga y tomate', precio: 10 },
  ];


 obtenerArepas(){
  return this.arepas;
 }
  constructor(private router:Router) {

   }
  ngOnInit(): void {
    
console.log(this.arepas);
  }

}
