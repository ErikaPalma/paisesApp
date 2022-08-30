import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  isError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(): void {
    this.isError = false;
    this.paisService.buscarPais(this.termino).subscribe(
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
