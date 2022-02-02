import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoModel } from 'src/app/model/GrupoModel';
import { GrupoModelService } from 'src/app/service/grupo.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-grupo-delete',
  templateUrl: './grupo-delete.component.html',
  styleUrls: ['./grupo-delete.component.css']
})
export class GrupoDeleteComponent implements OnInit {

  grupo: GrupoModel = new GrupoModel()
  idGrupo: number

  constructor(
    private grupoService: GrupoModelService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if( environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    this.idGrupo = this.route.snapshot.params['id']
    this.findByIdGrupo(this.idGrupo)
  }

  findByIdGrupo(id: number) {
    this.grupoService.getByIdGrupo(id).subscribe ((resp: GrupoModel) => {
      this.grupo = resp
    })
  }

  apagar() {
    this.grupoService.deleteGrupo(this.idGrupo).subscribe(()=> {
      alert('Tema apagado com sucesso')
      this.router.navigate(['/tema'])
    })
  }

}