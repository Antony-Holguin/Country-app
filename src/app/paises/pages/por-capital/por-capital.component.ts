import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css'],
})
export class PorCapitalComponent {
  capitales: Country[] = [];
  termino = '';
  hayError: boolean = false;

  constructor(private paisServicio: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisServicio.consultarCapital(this.termino).subscribe(
      (val) => {
        this.capitales = val;
        console.log(this.capitales);
      },
      (error) => {
        this.hayError = true;
        console.log(error);
      }
    );
  }
}
