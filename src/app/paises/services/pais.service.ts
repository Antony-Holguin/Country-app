import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private mainURL:string = "https://restcountries.com/v3.1";
  private capitalURL = "https://restcountries.com/v3.1/capital";

  constructor(private http:HttpClient) { }

  consultarPais(terminoBusqueda:string):Observable<Country[]>{
      return this.http.get<Country[]>(`${this.mainURL}/name/${terminoBusqueda}`);
      //.pipe(catchError(e));
  }

  consultarCapital(terminoBusqueda:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.capitalURL}/${terminoBusqueda}`);
  }

  




}
