import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: UserModel = new UserModel

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  cadastrar(){
    this.authService.cadastrar(this.user).subscribe((resp: UserModel) => {
      this.user = resp
      this.router.navigate(['/entrar'])
      alert('usuario cadastrado com sucesso')
    })
  }

}
