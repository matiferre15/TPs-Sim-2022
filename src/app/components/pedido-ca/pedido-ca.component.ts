import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pedido-ca',
  templateUrl: './pedido-ca.component.html',
  styleUrls: ['./pedido-ca.component.css'],
})
export class PedidoCaComponent implements OnInit {
  FormPedidoCa = new FormGroup({
    Calle: new FormControl(null),
    Numero: new FormControl(null),
    Ciudad: new FormControl(null),
    Referencia: new FormControl(null),
    FormaPago: new FormControl(null),
    Monto: new FormControl(null),
    NroTarjeta: new FormControl(null),
    NombreTitular: new FormControl(null),
    ApellidoTitular: new FormControl(null),
    FechaVencimiento: new FormControl(null),
    Cvc: new FormControl(null),
  });

  Opciones = [{ Nombre: 'Efectivo' }, { Nombre: 'Tarjeta de credito' }];

  constructor() {}

  ngOnInit() {}
}

