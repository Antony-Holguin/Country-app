import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  pais:Country[] = [];
  //traducciones:Country = [];

  constructor(private parametrosRuta: ActivatedRoute, private paisService:PaisService, private route:Router) {}

  ngOnInit(): void {
    this.parametrosRuta.params
    .pipe(
      switchMap(({id}) => this.paisService.consultarPorCodigo(id))
    )
    .subscribe((paisInfo)=>{
      console.log(paisInfo);

      this.pais =paisInfo;
      //this.traducciones = paisInfo[0].translations;
    }, error=>{
      console.log("Error, codigo no encontrado");
      window.location.href="/";
      
    });
    // this.parametrosRuta.params.subscribe(({id})=>{
    //      console.log(id);
    //      this.paisService.consultarPorCodigo(id).subscribe(params=>{
    //         console.log(params);
    //      });

    // });

  }
}
