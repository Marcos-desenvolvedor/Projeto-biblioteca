import { lerID } from "../prompts/lerDados.js";
import { verificaIdLivro } from "../services/buscarLivroId.js";
import { verificaIdUsuario } from "../services/buscarUserId.js";
import { verificaEmprestimo } from "../services/verificaEmprestimo.js";

export function fluxoEmprestimo() {
  const idLivro = lerID("Qual id do livro: ");
  const idUsuario = lerID("Qual ID do usuario: ");

  const resultadoLivro = verificaIdLivro(idLivro);
  const resultadoUsuario = verificaIdUsuario(idUsuario);

  if (!resultadoLivro.ok) {
    console.log(resultadoLivro.mesagem);
    return;
  }

  if (!resultadoUsuario.ok) {
    console.log(resultadoUsuario.mesagem);
    return;
  }

  const dados = {
    idLivro: resultadoLivro.livro.id,
    idUsuario: resultadoUsuario.usuario.id,
  };

  const resutadoEmprestimo = verificaEmprestimo(dados);

  if (!resutadoEmprestimo.ok) {
    console.log(resultadoUsuario.mesagem);
    return;
  }

  console.log(resutadoEmprestimo.mesagem);
}
