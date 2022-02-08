import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }

  getByIdUser(idUser: number): Observable<Usuario>{
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${idUser}`)
  }

}
