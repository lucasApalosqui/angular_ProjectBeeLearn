import { Postagem } from "./Postagem"

export class Usuario{
public idUser: number
public nome: string
public bio: string
public email: string
public senha: string
public foto: string
public tipo: string
public postagem: Postagem[]
}
