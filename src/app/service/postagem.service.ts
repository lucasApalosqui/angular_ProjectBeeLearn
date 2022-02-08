import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens', this.token)
  }

  getByIdPost(idPost: number): Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/postagens/${idPost}`, this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{
    return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)
  }

  putPostagem(grupo: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('http://localhost:8080/postagens', grupo, this.token)
  }

  deletePostagem(idPost: number) {
    return this.http.delete(`http://localhost:8080/postagens/${idPost}`, this.token)
  }
}
