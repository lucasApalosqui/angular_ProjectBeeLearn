import { UserModel } from "./UserModel"

export class PostagemModel{
    public idPost: number
    public titulo: string
    public texto: string
    public data: Date
    public user: UserModel[]
}
