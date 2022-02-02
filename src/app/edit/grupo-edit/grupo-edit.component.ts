import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { GrupoModel } from '../../model/GrupoModel';
import { GrupoModelService } from '../../service/grupo.service';

@Component({
  selector: 'app-grupo-edit',
  templateUrl: './grupo-edit.component.html',
  styleUrls: ['./grupo-edit.component.css']
})
export class GrupoEditComponent implements OnInit {

  grupo: GrupoModel = new GrupoModel()

  constructor(
    private grupoService: GrupoModelService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if( environment.token ==''){
      this.router.navigate(['/entrar'])
    }

    let idGrupo = this.route.snapshot.params['id']
    this.findByIdTema(idGrupo)
  }

  findByIdTema(id: number) {
    this.grupoService.getByIdGrupo(id).subscribe ((resp: GrupoModel) => {
      this.grupo = resp
    })
  }

  atualizar(){
    this.grupoService.putGrupo(this.grupo).subscribe((resp: GrupoModel)=> {
      this.grupo = resp
      alert ('Grupo atualizado com sucesso!')
      this.router.navigate(['/grupo'])
    })
  }
}