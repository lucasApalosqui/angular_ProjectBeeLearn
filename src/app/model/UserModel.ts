import { GrupoModel } from "./GrupoModel"
import { PostagemModel } from "./PostagemModel"

export class UserModel{
    public idUsuario: number
	public nomeUsuario: string
	public email: string
	public senha: string
	public bio: string
	public urlAvatar: string
	public nivel: number
	public xp: number
	public token: string
	public tokenBasic: string
	public foto: string
	public tipo: string
    public postagem: PostagemModel []
	public grupo: GrupoModel []
}