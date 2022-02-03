import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from 'src/app/model/PostagemModel';

@Component({
  selector: 'app-post-delete',
  templateUrl: './post-delete.component.html',
  styleUrls: ['./post-delete.component.css']
})
export class PostDeleteComponent implements OnInit {

  
  postagem: PostagemModel = new PostagemModel()
  idPostagem: number

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if( environment.token ==''){
      this.router.navigate(['/entrar'])
    }

    this.idPostagem = this.route.snapshot.params['id']
    this.getByIdPostagem(this.idPostagem)
  }

  getByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: PostagemModel) => {
      this.postagem = resp
    })
  }


  apagar(){
    this.postagemService.deletePostagem(this.idPostagem).subscribe(()=> {
      alert ('Postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
  }

}