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
    return this.http.get<PostagemModel[]>('https://beelearn.herokuapp.com/api/v1/postagem/all', this.token)
    }
  
  getByIdPostagem(idPostagem: number): Observable<PostagemModel>{
      return this.http.get<PostagemModel>(`https://beelearn.herokuapp.com/api/v1/postagem/${idPostagem}`, this.token)
  } 
    
  postPostagem(postagem: PostagemModel) : Observable<PostagemModel> {
    return this.http.post<PostagemModel> ('https://beelearn.herokuapp.com/api/v1/postagem/save', postagem, this.token)
  }

  putPostagem(postagem: PostagemModel):Observable<PostagemModel>{
    return this.http.put<PostagemModel>('https://beelearn.herokuapp.com/api/v1/postagem/update', postagem, this.token)
  }
  
  deletePostagem(idPostagem: number) {
    return this.http.delete(`https://beelearn.herokuapp.com/api/v1/postagem/delete/${idPostagem}`, this.token)
  } 
}
