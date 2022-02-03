import { GrupoModel } from "./GrupoModel"
import { UserModel } from "./UserModel"

export class PostagemModel{
    public idPost: number
    public titulo: string
    public post: string
    public data: Date
    public user: UserModel
    public grupo: GrupoModel
}
