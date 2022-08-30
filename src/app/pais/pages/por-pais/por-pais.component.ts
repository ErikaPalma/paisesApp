import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss'],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  isError: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(): void {
    this.isError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        this.isError = true;
      }
    );
  }
}
