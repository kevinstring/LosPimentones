import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterModule } from '@angular/router';
import { DesayunosCenasComponent } from './desayunos-cenas/desayunos-cenas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    PrincipalComponent,
    DesayunosCenasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
