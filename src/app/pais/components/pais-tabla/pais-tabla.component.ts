import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss'],
})
export class PaisTablaComponent implements OnInit {
  @Input() paises: Pais[] = [];

  constructor() {}

  ngOnInit(): void {}
}
