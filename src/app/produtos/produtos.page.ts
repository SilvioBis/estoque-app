import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/Produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProdutosPage{

  constructor(private ProdutoService: ProdutosService) {
    this.buscarProdutos();
   }

   listaProduto: Produto[] = [];

  buscarProdutos(){
    this.ProdutoService.getAll().subscribe(dados => {
      this.listaProduto = dados  as Produto[];
    });
  }

}
