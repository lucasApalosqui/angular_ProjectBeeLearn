import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeUsuario = environment.nomeUsuario
  email = environment.email
  bio = environment.bio
  tipo = environment.tipo
  foto =environment.foto
  

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

}
