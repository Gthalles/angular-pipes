import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {
  // Atributos
  livro: any = {
    title: 'Aprendendo Javascript, estrutura de dados e algorítimo segunda edição',
    rating: 4.54321,
    pages: 314,
    price: 44.50,
    postingData: new Date(2016, 5, 23),
    url: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_5c8cf2c0bf670bbaa656e0f65e89ced7cd5bf781.jpg'
  };

  // Métodos
  constructor() { }

  ngOnInit() {
  }

}