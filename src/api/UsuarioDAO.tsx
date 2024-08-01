import APIConsumer from "./APIConsumer";
import { Usuario, UsuarioIn } from "@/types/usuario";

class UsuarioDAO extends APIConsumer<UsuarioIn, Usuario> {
    constructor() {
        super("/usuarios");
    }

    isAuthorized(login: string, password: string): Promise<boolean> {
        return fetch(`${this.endpoint}/validarUsuario?login=${login}&password=${password}`)
            .then(response => response.json())
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error("Erro ao verificar autorização: ", error);
                return false;
            });
    }
}

export default new UsuarioDAO();