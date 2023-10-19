import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaisesModule } from './paises/paises.module';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisesModule,
    SharedModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
