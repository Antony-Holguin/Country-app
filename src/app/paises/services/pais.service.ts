import { HttpClient, HttpParams } from '@angular/common/http';
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
  private paisPorCodeURL = "https://restcountries.com/v3.1/alpha";
  private regionURL = "https://restcountries.com/v3.1/region";

  get httpParams(){
    return new HttpParams().set('fields', 'name,flags,population,cca2');
  }

  constructor(private http:HttpClient) { }

  consultarPais(terminoBusqueda:string):Observable<Country[]>{
      return this.http.get<Country[]>(`${this.mainURL}/name/${terminoBusqueda}`);
      //.pipe(catchError(e));
  }

  consultarCapital(terminoBusqueda:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.capitalURL}/${terminoBusqueda}`);
  }

  consultarPorCodigo(id:string):Observable<Country[]>{
      return this.http.get<Country[]>(`${this.paisPorCodeURL}/${id}`);
  }

  consultarPorRegion(region:string):Observable<Country[]>{
      return this.http.get<Country[]>(`${this.regionURL}/${region}`, {params: this.httpParams});
  }

  




}
