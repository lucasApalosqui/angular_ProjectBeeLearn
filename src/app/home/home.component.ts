import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { GrupoModel } from '../model/GrupoModel';
import { AuthService } from '../service/auth.service';
import { GrupoModelService } from '../service/grupo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grupo: GrupoModel = new GrupoModel()
  listaGrupo: GrupoModel[]  
  nomeUsuario = environment.nomeUsuario
  email = environment.email
  bio = environment.bio
  tipo = environment.tipo
  foto =environment.foto
  idUsuario= environment.idUsuario


  constructor(
    private auth: AuthService,
    private router:Router,
    private grupoModelService: GrupoModelService
  ) { }


  ngOnInit(){
    if(environment.token==''){
      this.router.navigate(['/entrar']) 
    }
  
    this.findAllGrupo()
  }

  findAllGrupo(){
    this.grupoModelService.getAllGrupo().subscribe((resp:GrupoModel[])=>{
  this.listaGrupo = resp
    })

  }

  cadastrar(){
    this.grupoModelService.postGrupo(this.grupo).subscribe((resp:GrupoModel)=>{
    this.grupo = resp 
    alert('Grupo cadastrado com sucesso!')
    this.findAllGrupo()
    this.grupo=new GrupoModel()
    this.router.navigate(['/grupo'])


    })
  }

}
