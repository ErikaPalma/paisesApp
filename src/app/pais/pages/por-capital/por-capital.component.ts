import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss'],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  isError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}
  buscar(termino: string) {
    this.isError = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino).subscribe(
      (paises) => {
        // El array de paises será igual a los paises que recibe como argumento
        this.paises = paises;
      },
      (err) => {
        this.isError = true;
        this.paises = [];
      }
    );
  }
}
