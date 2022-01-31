import { PostagemModel } from "./PostagemModel"
import { UserModel } from "./UserModel"




export class GrupoModel{
    public idGrupo: number
	public nomeGrupo: string
	public descricao: string
	public urlImagem: string
    public user: UserModel[]
    public postagem: PostagemModel[]
}