import { lerBanco } from "../data/funcoesBanco.js";
export function verificaIdUsuario(id) {
  const PATH = "./data/usuarios.json";
  const usuarios = lerBanco(PATH);

  const usuarioExiste = usuarios.find((u) => u.id === id);

  if (!usuarioExiste) {
    return {
      ok: false,
      mesagem: "Usuario não existe.",
    };
  }

  return {
    ok: true,
    mesagem: "Sucesso na busca do usuario.",
    usuario: usuarioExiste,
  };
}
