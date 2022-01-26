import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { UserModel } from '../model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>  {
    return this.http.post<UserLogin>('https://beelearn.herokuapp.com/api/v1/user/logar', userLogin)
  }

  cadastrar(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>('https://beelearn.herokuapp.com/api/v1/user/register', user)
  }
}
