import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import {Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit{
  

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject<string>(); //Observable que emitira valores
  /**
   * El Debouncer se llena de valores que vienen del input
   * next('valor 1');
   * next('valor 2');
   * next('valor 3');
   *
   */

  termino:string = "";

  buscar(){
      this.onEnter.emit(this.termino);
  }

  //Configurar el debouncer al crearse el componente
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(1000)) //Aqui el Observable hara algo cada 1 segundo
    .subscribe(valor =>{ //Subscripcion al debouncer que hara algo con esos valores que emite
      console.log("debouncer", valor);
      this.onDebounce.emit(valor);
    });
  }

  teclaPresionada(event:any){
      this.debouncer.next(this.termino);
  }

}
