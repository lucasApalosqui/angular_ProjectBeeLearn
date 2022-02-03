import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoModel } from 'src/app/model/GrupoModel';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { GrupoModelService } from 'src/app/service/grupo.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postagem: PostagemModel = new PostagemModel()
  grupo: GrupoModel = new GrupoModel()
  listaGrupo: GrupoModel[]
  idGrupo: number

 constructor(
   private postagemService: PostagemService,
   private router: Router,
   private route: ActivatedRoute,
   private grupoService: GrupoModelService

 ) { }

 ngOnInit() {
   window.scroll(0,0)

   if( environment.token ==''){
     this.router.navigate(['/entrar'])
   }

   let id = this.route.snapshot.params['id']
   this.findByIdPostagem(id)
   this.findAllGrupo()
 }

 findByIdPostagem(id: number) {
   this.postagemService.getByIdPostagem(id).subscribe((resp: PostagemModel) => {
     this.postagem = resp
   })
 }

 findByIdGrupo() {
   this.grupoService.getByIdGrupo(this.idGrupo).subscribe((resp: GrupoModel) => {
     this.grupo = resp
   })
 }

 findAllGrupo() {
   this.grupoService.getAllGrupo().subscribe((resp: GrupoModel[]) => {
     this.listaGrupo = resp
   })
 }

 atualizar(){
   this.postagemService.putPostagem(this.postagem).subscribe((resp: PostagemModel)=> {
     this.postagem = resp
     alert ('Postagem atualizado com sucesso!')
     this.router.navigate(['/inicio'])
   })
 }

}