import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grupo } from 'src/app/model/Grupo';
import { Postagem } from 'src/app/model/Postagem';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { GrupoService } from 'src/app/service/grupo.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {


  postagem: Postagem = new Postagem()
  grupo: Grupo = new Grupo()
  user: Usuario = new Usuario

  listaGrupo: Grupo[]
  listaPost: Postagem[]

  PostId: number
  GrupoId: number
  UserId = environment.idUser

  constructor(
    private grupoService: GrupoService,
    private postagemService: PostagemService,

    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService

  ) {}

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

   

//POSTAGEM EDITAR E DELETE//
  let idPost = this.route.snapshot.params ['idPost']
  this.findByIdPostagem(idPost)
  this.findAllGrupo()

  this.PostId = this.route.snapshot.params ['idPost']
 this.findByIdPostagem(this.PostId)




//CRIAR POSTAGEM//
  this.getAllGrupo()
  this.getAllPostagem()

  
  this.findByIdUser()
  }


 //FUNÇÕES DE POSTAGEM//

  //EDITAR E DELETE//

  findByIdPostagem(idPost: number){
    this.postagemService.getByIdPost(idPost).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
  }

  findByIdPostGrupo(){
    this.grupoService.getByIdGrupo(this.GrupoId).subscribe((resp: Grupo) =>{
      this.grupo = resp
    })
  }

  findAllGrupo(){
    this.grupoService.getAllGrupo().subscribe((resp: Grupo[]) => {
      this.listaGrupo = resp
    })
  }

  atualizarPost(){
    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem atualizado com sucesso!')
      this.postagem = new Postagem()
    })
  }

  apagarPost(){
    this.postagemService.deletePostagem(this.PostId).subscribe(()=>{
      alert('Grupo apagado com sucesso!')
      this.router.navigate(['/home'])
    })
  }

  //

getAllGrupo(){
    this.grupoService.getAllGrupo().subscribe((resp: Grupo[]) => {
      this.listaGrupo = resp
    })
  }

   

  getAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) => {
      this.listaPost = resp
    })
  }

  

  

  findByIdUser(){
    this.authService.getByIdUser(this.UserId).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  

  publicar(){
    this.grupo.idGrupo = this.GrupoId
    this.postagem.grupo = this.grupo

    this.user.idUser = this.UserId
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
    })
  }
 

 

}
