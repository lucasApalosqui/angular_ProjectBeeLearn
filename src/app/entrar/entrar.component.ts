import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  
  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

entrar() {
  this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
    this.userLogin = resp

    environment.idUsuario = this.userLogin.idUsuario
    environment.bio = this.userLogin.bio
    environment.email = this.userLogin.email
    environment.nomeUsuario = this.userLogin.nomeUsuario
    environment.senha = this.userLogin.senha
    environment.tipo = this.userLogin.tipo
    environment.token = this.userLogin.token
    environment.tokenBasic = this.userLogin.tokenBasic
    environment.foto  = this.userLogin.foto

    console.log(environment.bio)
    console.log(environment.email)
    console.log(environment.idUsuario)
    console.log(environment.foto)
    console.log(environment.nomeUsuario)
    console.log(environment.senha)
    console.log(environment.tipo)
    console.log(environment.token)
    console.log(environment.tokenBasic)


   this.router.navigate(['/home'])
  }, erro =>{
    if(erro.status == 500){
      alert('Usúario ou senha incorretos!')
    }
})
}
}
