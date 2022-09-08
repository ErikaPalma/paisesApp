import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/paises-interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiURL}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const urlCapital = `${this.apiURL}/capital/${termino}
    `;
    return this.http.get<Pais[]>(urlCapital);
  }

  verDetalleId(id: string): Observable<Pais[]> {
    const urlDetalle = `${this.apiURL}/alpha/${id}
    `;
    return this.http.get<Pais[]>(urlDetalle);
  }

  buscarRegion(region: string): Observable<Pais[]> {
    const urlRegion = `https://restcountries.com/v2/regionalbloc/${region}
    `;
    return this.http.get<Pais[]>(urlRegion);
  }
}
