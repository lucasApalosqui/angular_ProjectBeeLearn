import { Observable } from 'rxjs';
import { environment} from './../../environments/environment.prod';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostagemModel } from '../model/PostagemModel'

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('http//localhost:8080/api/v1/postagem/all', this.token)
    }
    
  postPostagem(postagem: PostagemModel) : Observable<PostagemModel> {
    return this.http.post<PostagemModel> ('http//localhost:8080/api/v1/postagem/save', postagem, this.token)
  }

 
}
