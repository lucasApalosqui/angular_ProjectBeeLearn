import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: Usuario = new Usuario
  nome = environment.nome
  foto = environment.foto
  idUser = environment.idUser
  tipUser: string
  confiSenha: string


  constructor(  
    
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.findByIdUser(this.idUser)
  }

    confirmSenha(event: any){
      this.confiSenha = event.target.value
    }

    tipoUser(event: any){
      this.tipUser = event.target.value
    }

    atualizar(){
      this.user.tipo = this.tipUser

      if (this.user.senha != this.confiSenha) {
        alert('As senhas estão incorretas')
      } else {
        this.authService.cadastrar(this.user).subscribe((resp: Usuario)=> {
          this.user = resp
          this.router.navigate(['/entrar'])
          alert('Usuário atualizado com sucesso, se logue novamente!')
        })
      }
  
    }

    findByIdUser(id: number){
      this.authService.getByIdUser(id).subscribe((resp: Usuario)=> {
        this.user = resp
      })
    }
}