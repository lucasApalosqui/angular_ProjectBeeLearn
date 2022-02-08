import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../model/Grupo';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { GrupoService } from '../service/grupo.service';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  postagem: Postagem = new Postagem()
  grupo: Grupo = new Grupo()
  usuario: Usuario = new Usuario

  listaGrupo: Grupo[]
  listaPost: Postagem[]

  idPost: number
  idGrupo: number
  idUser: number

  constructor(
    private grupoService: GrupoService,
    private postagemService: PostagemService,

    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService

  ) {}

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
//GRUPO
    this.idGrupo = this.route.snapshot.params ['idGrupo']
    this.findAllGrupo()
    this.findByIdGrupo(this.idGrupo)

//POSTAGEM
    this.getAllGrupo()
    this.getAllPostagem()
    this.findByIdUser()
  }


//FUNÇÕES DE GRUPO//

  findAllGrupo(){
    this.grupoService.getAllGrupo().subscribe((resp: Grupo[]) => {
      this.listaGrupo = resp
    })
  }

  findByIdGrupo(idGrupo: number){
    this.grupoService.getByIdGrupo(idGrupo).subscribe((resp: Grupo) => {
      this.grupo = resp
    })
  }

  atualizar(){
    this.grupoService.putGrupo(this.grupo).subscribe((resp: Grupo)=>{
      this.grupo = resp
      alert('Grupo atualizado com sucesso!')
      this.router.navigate(['/grupo/:idGrupo'])
    })
  }

  apagar(){
    this.grupoService.deleteGrupo(this.idGrupo).subscribe(()=>{
      alert('Grupo apagado com sucesso!')
      this.router.navigate(['/home'])
    })
  }


  //FUNÇÕES DE POSTAGEM//

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
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar(){
    this.grupo.idGrupo = this.idGrupo
    this.postagem.grupo = this.grupo

    this.usuario.idUser= this.idUser
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagem()
    })
  }


}
