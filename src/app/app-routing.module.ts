import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {path: '', redirectTo: 'page', pathMatch: 'full'},
  {path: 'grupo/:idGrupo', component: GrupoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'page', component: PageComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'home', component: HomeComponent},
  {path:'grupo', component: GrupoComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
