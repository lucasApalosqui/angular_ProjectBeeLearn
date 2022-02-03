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
  return this.http.get<GrupoModel[]>('http://localhost:8080/grup',this.token)
  
}
getByIdGrupo(idGrupo: number): Observable<GrupoModel>{
  return this.http.get<GrupoModel>(`http://localhost:8080/grup/${idGrupo}`, this.token)
} 
postGrupo(grupo: GrupoModel):Observable<GrupoModel>{
  return this.http.post<GrupoModel>('http://localhost:8080/grup', grupo, this.token)
}

putGrupo(grupo: GrupoModel):Observable<GrupoModel>{
  return this.http.put<GrupoModel>('http://localhost:8080/grup', grupo, this.token)
}

deleteGrupo(idGrupo: number) {
  return this.http.delete(`http://localhost:8080/grup/${idGrupo}`, this.token)
} 
}
