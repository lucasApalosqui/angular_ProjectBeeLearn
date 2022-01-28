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

logar() {
  this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
  this.userLogin = resp

  environment.token = this.userLogin.token
  environment.urlAvatar = this.userLogin.urlAvatar
  environment.xp = this.userLogin.xp
  environment.nomeUsuario = this.userLogin.nomeUsuario
  environment.idUsuario = this.userLogin.idUsuario
  environment.nivel = this.userLogin.nivel

  this.router.navigate(['/home'])
}, erro =>{
  if(erro.status == 500){
    alert('Usúario ou senha incorretos!')
  }

})
}

}
