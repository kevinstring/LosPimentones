import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrincipalComponent } from '../principal/principal.component';
@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() descripcion: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }
}
