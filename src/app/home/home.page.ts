import { ClientesService } from './../services/clientes.service';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Cliente } from '../models/Cliente.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {
  constructor(private ClientesService: ClientesService) {
    this.buscarClientes();
  }

  listaClientes: Cliente[] = [];

  buscarClientes(){
    this.ClientesService.getAll().subscribe(dados => {
      this.listaClientes = dados;
    });
  }
}
