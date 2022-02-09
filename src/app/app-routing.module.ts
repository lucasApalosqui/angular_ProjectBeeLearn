import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { GrupoComponent } from './grupo/grupo.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [

  {path:'entrar', component: EntrarComponent},
  {path:'contato', component: ContatoComponent},
  {path:'grupo', component: GrupoComponent},
  {path:'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
