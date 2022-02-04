import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { GrupoModel } from '../model/GrupoModel';


@Injectable({
  providedIn: 'root'
})
export class GrupoModelService {

  constructor(private http: HttpClient){ }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

getAllGrupo():Observable<GrupoModel[]>{
  return this.http.get<GrupoModel[]>('https://beelearn.herokuapp.com/grup/all',this.token)
  
}
getByIdGrupo(idGrupo: number): Observable<GrupoModel>{
  return this.http.get<GrupoModel>(`https://beelearn.herokuapp.com/grup/${idGrupo}`, this.token)
} 
postGrupo(grupo: GrupoModel):Observable<GrupoModel>{
  return this.http.post<GrupoModel>('https://beelearn.herokuapp.com/grup', grupo, this.token)
}

putGrupo(grupo: GrupoModel):Observable<GrupoModel>{
  return this.http.put<GrupoModel>('https://beelearn.herokuapp.com/grup', grupo, this.token)
}

deleteGrupo(idGrupo: number) {
  return this.http.delete(`https://beelearn.herokuapp.com/grup/${idGrupo}`, this.token)
} 
}
