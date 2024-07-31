import APIConsumer from "./APIConsumer";
import { Usuario, UsuarioIn } from "@/types/usuario"

export const UsuarioDAO = new APIConsumer<UsuarioIn, Usuario>("/usuarios");