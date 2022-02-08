import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';

const routes: Routes = [
  {path: 'grupo/:idGrupo', component: GrupoComponent},
  {path: 'grupo/:idGrupo', component: GrupoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
