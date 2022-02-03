import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { GrupoModel } from '../model/GrupoModel';
import { PostagemModel } from '../model/PostagemModel';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';
import { GrupoModelService } from '../service/grupo.service';
import { PostagemService } from '../service/postagem.service';


@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

grupo: GrupoModel = new GrupoModel()
listaGrupo: GrupoModel[]
idGrupo: number
postagem: PostagemModel = new PostagemModel()
usuario: UserModel = new UserModel()
idUsuario = environment.idUsuario
listaPostagens: PostagemModel[]
 

 nomeGrupo = environment.nomeGrupo
	descricao = environment.descricao
	urlImagem = environment.urlImagem

  constructor(
    private router:Router,
    private grupoModelService: GrupoModelService,
    private postagemService: PostagemService,
    private authService: AuthService
      
    
  ) { }

  ngOnInit(){
    if(environment.token==''){
      this.router.navigate(['/entrar'])
    }
  

    this.getAllPostagens()
  }


  findByIdGrupo() {
    this.grupoModelService.getByIdGrupo(this.idGrupo).subscribe((resp: GrupoModel) =>{
      this.grupo = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: PostagemModel[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.grupo.idGrupo = this.idGrupo
    this.postagem.grupo = this.grupo

    this.usuario.idUsuario = this.idUsuario
    this.postagem.user = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: PostagemModel) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!!')
      this.postagem = new PostagemModel()
      this.getAllPostagens()

    })
    }

    findByIdUser() {
      this.authService.getByIdUser(this.idUsuario).subscribe((resp: UserModel) => {
        this.usuario = resp
      })
    }

  }
