import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

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

  cursos: string[] = ['Angular', 'Java', 'NodeJS', 'Ionic', 'PostgreSQL', 'MongoDB'];
  filtro: string;

  // Métodos
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assíncrono!'), 5000)
  });

  valorAsync3 = interval(5000).pipe(map(valor => 'Valor assíncrono 3'));
  valorAsync2 = interval(5000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit() {
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }

  obterCurso() {
    if(this.cursos.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.cursos;
    }

    return this.cursos.filter((v) => {
      if(v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
    return false;
    })
  }

}
