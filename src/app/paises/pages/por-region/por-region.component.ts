import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent {
  regiones: string[] = ['america', 'europe', 'africa', 'oceania', 'asia'];
  regionSeleccionada = '';
  paisesPorRegion:Country[] = [];

  //Inyectar el servicio
  constructor(private paisServicio:PaisService){}


  regionCss(region: string): string {
    return region === this.regionSeleccionada
      ? 'btn btn-primary text-white'
      : 'btn btn-outline-primary';
  }

  setRegionActiva(region: string) {
    this.regionSeleccionada = region;
    console.log(region);
    this.buscarPaisesPorRegion(region);
  }

  buscarPaisesPorRegion(region:string){
      this.paisServicio.consultarPorRegion(region)
      .subscribe( data => {
          this.paisesPorRegion = data;
      });
  }
}
