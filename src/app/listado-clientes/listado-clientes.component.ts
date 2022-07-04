import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor() {
    this.clientes = [];
  }

  ngOnInit() {

  let tmp_cliente: Cliente = new Cliente("asd", 25, true);

  this.clientes.push(tmp_cliente);

  tmp_cliente = new Cliente("dsa", 28, false);

  this.clientes.push(tmp_cliente);

  }

}