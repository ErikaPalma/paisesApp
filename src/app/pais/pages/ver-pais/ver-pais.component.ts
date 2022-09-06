import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pais } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss'],
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;

  constructor(
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisService.verDetalleId(id)))
      .subscribe((pais) => (this.pais = pais[0]));
  }
}
