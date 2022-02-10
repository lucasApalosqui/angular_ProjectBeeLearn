import { Grupo } from "./Grupo"
import { Usuario } from "./Usuario"

export class Postagem{

public idPost: number
public tituloPost: string
public texto: string
public data: Date
public materia: string
public usuario: Usuario
public grupo: Grupo

}

