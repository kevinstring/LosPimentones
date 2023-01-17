import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
{path:'',component:PrincipalComponent},
 {path:'compo1/:id', component:TarjetaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
