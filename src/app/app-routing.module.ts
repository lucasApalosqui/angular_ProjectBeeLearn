import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'grupo/:idGrupo', component: GrupoComponent},
  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
