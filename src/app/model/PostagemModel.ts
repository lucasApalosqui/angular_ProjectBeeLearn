import { GrupoModel } from "./GrupoModel"
import { UserModel } from "./UserModel"

export class PostagemModel{
    public idPostagem: number
    public titulo: string
    public postagem: string
    public data: Date
    public user: UserModel
    public grupo: GrupoModel
}
